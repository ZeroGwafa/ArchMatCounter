a1lib.identifyUrl("appconfig.json");

var reader = new ChatBoxReader();
reader.readargs = {
    colors: [
        a1lib.mixcolor(255, 255, 255), //Common Mats
        a1lib.mixcolor(255, 128, 0), //Uncommon Mats
        a1lib.mixcolor(255, 165, 0), //Scavenging comps
        a1lib.mixcolor(255, 0, 0) //Rare Mats
    ],
    backwards: true
};
reader.find();

//Attempt to show a temporary rectangle around the chatbox.  skip if overlay is not enabled.
try {
    var p = reader.pos;
    alt1.overLayRect(a1lib.mixcolor(255, 255, 255), p.mainbox.rect.x, p.mainbox.rect.y, p.mainbox.rect.width, p.mainbox.rect.height, 2000, 1);
} catch { }

var chatCheck = reader.read();

var sortComps = true;
if (localStorage.getItem("sortComps") != null) {
    sortComps = localStorage.sortComps == "true";
}
if (sortComps) {
    materials.sort((a, b) => a.level - b.level);
}
else {
    materials.sort((a, b) => b.qty - a.qty);
}

var count, mats, index;
var actions = 0;

function readChatbox() {
    var opts = reader.read() || [];
    var chat = "";
    reader.find();

    for (a in opts) {
        chat += opts[a].text + " ";
    }

    if (chat.trim().length === 0) //Check if chat is null, to reduce some console errors.
        return;
    //Match "You find some <material>"
    if (chat.match(/You find some .+|Your auto-screener .+|material storage:? .+/g) !== null)
        var material = chat.match(/You find some .+|Your auto-screener .+|material storage:? .+/g)[0].trim();
    else return;
    if (material !== null) {
        actions++;
        let name = "";
        if (material.indexOf("You find some") > -1)
            name = material.split("You find some ")[1].trim().replace("'", "")
        else if (material.indexOf("auto-screener") > -1)
            name = material.split("Your auto-screener spits out some ")[1].trim().replace("'", "");
        else
            name = material.split(/material storage:? /)[1].trim().replace("'", "");
        console.log({
            chat: chat,
            name: name
        });
        materials.forEach(mat => {
            if (mat.name.replace("'", "") === name) {
                mat.qty++;
                if (!sortComps) {
                    materials.sort((a, b) => b.qty - a.qty);
                    buildTable(name);
                }
                tidyTable(name);
            }
        })
    }
}

function buildTable() {
    $(".mats > tr").remove();
    materials.forEach(mat => {
        let name = mat.name.replace("'", "");
        $(".mats").append(`<tr data-name="${name}"><td title="Level:${mat.level}\nLocation(s):\n${mat.location}">${mat.name}</td><td class='qty'>${mat.qty}</td></tr>`);
    })
    if (localStorage.getItem("filter") === "true") {
        $(".filter").prop("checked", true)
    }
    tidyTable();
}

function tidyTable(name) {
    localStorage.mats = JSON.stringify(materials);
    materials.forEach(mat => {
        let name = mat.name.replace("'", "")
        document.querySelector("[data-name='" + name + "'] > .qty").innerText = mat.qty;
    })
    $(`[data-name="${name}"]`).css({ "background-color": "lime" }).animate({
        backgroundColor: $.Color("rgba(0, 0, 0, 0)")
    }, 500, function () { $(this).removeAttr("style") });
    if (localStorage.filter === "true") {
        materials.forEach(mat => {
            let name = mat.name.replace("'", "")
            if (mat.qty === 0) {
                $(`[data-name='${name}']`).hide();
            } else {
                $(`[data-name='${name}']`).show();
            }
        });
    }
    $(".actions").text(actions);
}

buildTable();

$(".edit").change(function () {
    if ($(this).is(':checked')) {
        if ($(".tracker").text() == "Stop") {
            $(".tracker").click();
        }
        $("tr:hidden").show();
        $(".qty").attr('contenteditable', 'true').focus(function () { document.execCommand('selectAll', false, null) });
    } else {
        $(".qty").removeAttr('contenteditable');
        materials.forEach(mat => {
            let name = mat.name.replace("'", "");
            mat.qty = parseInt($(`[data-name='${name}'] .qty`).text());
        })
        if (!sortComps) {
            materials.sort((a, b) => b.qty - a.qty);
            buildTable(name);
        }
        tidyTable();
    }
});

$("button.tracker").click(function () {
    if ($(this).html() == "Start") {
        console.log("Starting tracker");
        tracking = setInterval(function () { readChatbox(); }, 600);
        $(this).html("Stop");
    } else {
        console.log("Stopping tracker");
        $(this).html("Start");
        clearInterval(tracking);
    }
}).click();

$("button.clear").click(function () {
    localStorage.removeItem("mats");
    materials.forEach(mat => {
        mat.qty = 0;
    })
    actions = 0;
    location.reload();
});

$(".toggleMenu").click(function () {
    $(".options").toggle();
});

$("#comps").click(function () {
    sortComps = true;
    materials.sort((a, b) => a.level - b.level);
    buildTable();
    tidyTable();
    localStorage.sortComps = true;
})

$("#quantity").click(function () {
    sortComps = false;
    materials.sort((a, b) => b.qty - a.qty);
    buildTable();
    tidyTable();
    localStorage.sortComps = false;
})

$(".export").click(function () {
    var str = 'ComponentName,Quantity\n'; // column headers
    materials.forEach(mat => {
        let name = man.name.replace("'", "");
        str = `${str}${name},${mat.qty}\n`;
    })
    var blob = new Blob([str], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, "componentExport.csv");
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "archMatsExport.csv");
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
});

$(".filter").change(function () {
    localStorage.filter = $(this).is(":checked");
    $(".mats tr").show();
    tidyTable();
})