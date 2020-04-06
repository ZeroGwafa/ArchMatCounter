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
reader.pos.boxes.map((box, i) => {
    $(".chat").append(`<option value=${i}>Chat ${i}</option>`)
})
//If multiple boxes are found, this will select the first, which should be the top-most chat box on the screen.
reader.pos.mainbox = reader.pos.boxes[0];
showSelectedChat(reader.pos);


var chatCheck = reader.read();
var count, mats, index;

function showSelectedChat(chat) {
    //Attempt to show a temporary rectangle around the chatbox.  skip if overlay is not enabled.
    try {
        alt1.overLayRect(a1lib.mixcolor(255, 255, 255), chat.mainbox.rect.x, chat.mainbox.rect.y, chat.mainbox.rect.width, chat.mainbox.rect.height, 2000, 1);
    } catch { }
}

function readChatbox() {
    var opts = reader.read() || [];
    var chat = "";

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
                tidyTable(name);
            }
        })
    }
}

function buildTable() {
    $(".mats > .row").remove();
    materials.forEach(mat => {
        let name = mat.name.replace("'", "");
        $(".mats").append(`
        <div class='row' data-name="${name}">
            <div class="col hide"><input type="checkbox" class="hideMe" ${mat.hide ? "checked=checked" : ""}/></div>
            <div class='col-6' title="\nLevel: ${mat.level}\nFaction: ${mat.faction}\nLocation(s):\n${mat.location}">
                ${mat.name}
            </div>
            <div class="col qty">
                ${mat.qty}
            </div>
            <div class="col goal">
                ${mat.goal}
            </div>
            </div>`);
    })
    if (localStorage.getItem("filter") === "true") {
        $(".filter").prop("checked", true)
    }
    if (localStorage.getItem("goals") === "true") {
        $(".goals").prop("checked", true)
        $(".goal, .goalCol").show();
    }
    tidyTable();
}

function tidyTable(name) {
    localStorage.mats = JSON.stringify(materials);
    $(`[data-name="${name}"]`).removeClass('normal complete')
    $(`[data-name="${name}"]`).addClass("getMat")
    materials.forEach(mat => {
        let name = mat.name.replace("'", "");
        $("[data-name='" + name + "'] > .qty").text(mat.qty);
        if ((mat.qty >= 0 && mat.goal > 0) && mat.qty >= mat.goal && localStorage.goals === "true") {
            $(`[data-name="${name}"]`).removeClass('getMat normal')
            $(`[data-name="${name}"]`).addClass("complete")
        } else {
            setTimeout(function () {
                $(`[data-name="${name}"]`).removeClass('getMat complete')
                $(`[data-name="${name}"]`).addClass("normal")
            }, 500)
        }
    })
    if (localStorage.filter === "true" && !$(".edit").is(":checked")) {
        materials.forEach(mat => {
            let name = mat.name.replace("'", "")
            if (mat.qty === 0 && mat.goal === 0 || mat.hide === true) {
                $(`[data-name='${name}']`).hide();
            } else {
                $(`[data-name='${name}']`).show();
            }
        });
    }
}

$(function () {

    buildTable();
    $("button, input, select, body").attr("tabindex", "-1");

    $(".chat").change(function () {
        reader.pos.mainbox = reader.pos.boxes[$(this).val()];
        showSelectedChat(reader.pos);
    })

    $(".edit").change(function () {
        document.querySelectorAll(".hideMe").forEach((row, i) => {
            if (row.checked === true)
                materials[i].hide = true
            else
                materials[i].hide = false
        })
        if ($(this).is(':checked')) {
            $(".filter").prop("disabled", true).click();
            
            // Apply tabindex
            $(".row .qty").attr("tabindex", "1");
            $(".row .goal").attr("tabindex", "2");
            document.querySelectorAll(".col-6").forEach(row => {
                row.classList.remove("col-6")
                row.classList.add("col-4")
            })
            if ($(".tracker").text() == "Stop") {
                $(".tracker").click();
            }
            $(".row:hidden, .hide").show();
            $(".qty, .goal").attr('contenteditable', 'true').on("focus", function () { document.execCommand('selectAll', false, null); });
            $(".qty:first").focus();
        } else {
            if ($(".tracker").text() == "Start") {
                $(".tracker").click();
            }
            $(".filter").prop("disabled", false);
            $(".row .qty,.row .goal").removeAttr("tabindex");
            document.querySelectorAll(".col-4").forEach(row => {
                row.classList.remove("col-4")
                row.classList.add("col-6")
            })
            $(".hide").hide();
            $(".qty, .goal").removeAttr('contenteditable');
            materials.forEach(mat => {
                let name = mat.name.replace("'", "");
                mat.qty = parseInt($(`[data-name='${name}'] .qty`).text());
                mat.goal = parseInt($(`[data-name='${name}'] .goal`).text());
            })
            buildTable();
        }
    });

    let tracking;

    $("button.tracker").click(function () {
        if ($(this).html().trim() === "Start") {
            console.log("Starting tracker");
            tracking = setInterval(function () { readChatbox(); }, 600);
            $(this).html("Stop");
        } else {
            console.log("Stopping tracker");
            $(this).html("Start");
            clearInterval(tracking);
        }
    })

    $(".clear").click(function (e) {
        console.log(e.target.dataset.type)
        let type = e.target.dataset.type;
        materials.forEach(mat => {
            mat[type] = 0;
        })
        buildTable()
    });

    $(".sort").click(e => {
        if (!$(".edit").is(":checked")) {
            let sort = e.target.dataset.sort;
            sortComps = sort;
            if (sort === "level")
                materials.sort((a, b) => a[sort] - b[sort])
            else
                materials.sort((a, b) => b[sort] - a[sort])
            buildTable();
            localStorage.sort = sort;
        }
    })

    $(".export").click(function () {
        var str = 'ComponentName,Quantity,goaled\n'; // column headers
        materials.forEach(mat => {
            let name = mat.name.replace("'", "");
            str = `${str}${name},${mat.qty},${mat.goal}\n`;
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
        if (!$(".edit").is(":checked")) {
            localStorage.filter = $(this).is(":checked");
            $(".mats .row").show();
            tidyTable();
        }
    })

    $(".goals").change(function () {
        localStorage.goals = $(this).is(":checked");
        if (localStorage.goals === "true") {
            $(".goal, .goalCol").show();
            tidyTable();
        } else {
            $(".goal, .goalCol").hide();
            tidyTable();
        }
    })

    $("button.tracker").click();

    $("#menu").on("shown.bs.collapse", function(){$("body").addClass("expand")})
    $("#menu").on("hide.bs.collapse", function(){$("body").removeClass("expand")})

})