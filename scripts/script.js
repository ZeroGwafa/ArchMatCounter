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
reader.find()

if (reader.pos === null) {
    $(".mats").append("<span>Chat not detected.  Please ensure that you are in-game, then click <button onclick='location.reload()'>Refresh</button></span>")
}

else {

    reader.pos.boxes.map((box, i) => {
        $(".chat").append(`<option value=${i}>Chat ${i}</option>`)
    })
    if (localStorage.chat) {
        reader.pos.mainbox = reader.pos.boxes[localStorage.chat];
    } else {

        //If multiple boxes are found, this will select the first, which should be the top-most chat box on the screen.
        reader.pos.mainbox = reader.pos.boxes[0];
    }
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
        if ($(".edit").is(":checked"))
            $(".hide").show();
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
            localStorage.setItem("chat", $(this).val())
            $(this).val("")
        })

        $(".edit").change(function () {
            document.querySelectorAll(".hideMe").forEach((row, i) => {
                if (row.checked === true)
                    materials[i].hide = true
                else
                    materials[i].hide = false
            })
            if ($(this).is(':checked')) {
                $(".filter, .clear").prop("disabled", true)

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
                $(".filter, .clear").prop("disabled", false);
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
            var sbox = promptbox2({ width: document.body.offsetWidth, title: `Clear ${e.target.name}`, style: "nis" }, [
                { t: "text", text: `Are you sure you want to clear ${e.target.name}?` },
                { t: "h/11" },
                { t: "button:confirm", text: "Confirm" },
                { t: "button:cancel", text: "Cancel" }
            ]);
            sbox.confirm.onclick = function () {
                let type = e.target.dataset.type;
                materials.forEach(mat => {
                    mat[type] = 0;
                })
                buildTable()
                sbox.frame.close();
            }
            sbox.cancel.onclick = sbox.frame.close.b();
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

        $("#menu").on("shown.bs.collapse", function () { $("body").addClass("expand") })
        $("#menu").on("hide.bs.collapse", function () { $("body").removeClass("expand"), buildTable() })

        localStorage.removeItem("goalMats")
        function onStorageEvent(storageEvent) {
            if (storageEvent.key === "goalMats") {
                var mats = JSON.parse(storageEvent.newValue)
                materials.forEach((mat, i) => {
                    mat.goal = parseInt(mats[mat.name])
                })
                buildTable()
            }
        }

        window.addEventListener('storage', onStorageEvent, false);

        $(".openImport").click(function () {
            window.open("/ArchMatCounter/artefacts.html", "", "width=275")
        })

        // $("#test").click(function () {
        //     console.log("test")
        //     let chat = ["Select Chat"];
        //     reader.pos.boxes.forEach((box,i) => {
        //         chat.push(i)
        //     })
        //     var sbox = promptbox2({ width: window.innerWidth, title: "Settings", style: "nis" }, [
        //         { t: "h/11" },
        //         { t: "button:save", text: "Save Settings" },
        //         { t: "button:cancel", text: "Cancel" },
        //         { t: "h/11" },
        //         { t: "text", text: "Filter" },
        //         { t: "bool:filter"},
        //         { t: "h/11" },
        //         { t: "text", text: "Edit Mode" },
        //         { t: "bool:edit"},
        //         { t: "h/11" },
        //         { t: "text", text: "Enable Goals" },
        //         { t: "bool:goals"},
        //         { t: "h/11" },
        //         { t: "text", text: "Select Chat" },
        //         { t: "dropdown:chat", options:chat},
        //         { t: "h/11" },
        //         { t: "button:clearQty", text: "Clear Qty" },
        //         { t: "button:clearGoals", text: "Clear Goals" },
        //         { t: "h/11" },
        //         { t: "button:artiCalc", text: "Artifact Calculator" },
        //         { t: "button:exportCsv", text: "Export CSV" },
                
        //     ]);
        //     sbox.save.onclick = function () {
        //         console.log(sbox.filter.getValue(), sbox.edit.getValue(), sbox.goals.getValue(), sbox.chat.getValue())
        //         sbox.frame.close();
        //     }
        //     sbox.cancel.onclick = sbox.frame.close.b();
        // })


    })

}