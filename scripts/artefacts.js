$(function () {

    function listArtefacts() {
        $(".main").empty();
        let artefactInput = {}
        if (localStorage.artefactInput)
            artefactInput = JSON.parse(localStorage.artefactInput);
        console.log(artefactInput)
        artefactsList.forEach(item => {
            $(".main").append(`
        <div class="row" data-mat="${item.name}">
            <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                    <span class="input-group-text" 
                        title='
Level: ${item.level}
XP: ${item.experience}
Materials: ${item.mats.map(function (mat) { return `\n${mat.name}: ${mat.qty}` })}'>
                        <a href="http://runescape.wiki/${item.name}" target="_blank" tabindex=-1>${item.name}</a>
                    </span>
                </div>
                <input type="number" class="artefactInput form-control" data-name="${item.name}" value=${artefactInput[item.name] || 0}>
                <div class="input-group-append" style="${artefactInput[item.name] > 0 ? "" : "display:none"}">
                    <button tabindex=-1 class="btn btn-outline-secondary complete" type="button" data-name="${item.name}">Complete</button>
                </div>
            </div>
        </div>`)
        });
        if ($(".search").val() !== "")
            $(".search").keyup();
        else if ($("#collection").val() !== "")
            $("#collection").change()

    }

    function calcMats() {
        let mats = {};
        let artefactInput = {};
        document.querySelectorAll("input").forEach(item => {
            let name = item.dataset.name;
            artefactInput[name] = parseInt(item.value);
            artefactsList.forEach(art => {
                if (art.name === name) {
                    art.mats.forEach(mat => {
                        if (mats[mat.name] === undefined) {
                            mats[mat.name] = parseInt(mat.qty) * parseInt(item.value)
                        }
                        else {
                            mats[mat.name] = + mats[mat.name] + (parseInt(mat.qty) * parseInt(item.value))
                        }
                    })
                }
            })
        })
        localStorage.setItem("goalMats", JSON.stringify(mats))
        localStorage.setItem("artefactInput", JSON.stringify(artefactInput))
    }

    listArtefacts();

    $(".import").click(() => {
        calcMats()
        window.close()
    })

    $(".main").on("click", "button", function (e) {
        let name = $(this).data("name");
        let temp = {};
        let tempMaterials = JSON.parse(localStorage.getItem("mats"))
        artefactsList.forEach(art => {
            if (art.name === name) {
                art.mats.forEach(mat => {
                    temp[mat.name] = + (parseInt(mat.qty) * parseInt($(`input[data-name="${name}"]`).val()))
                })
            }
        })
        tempMaterials.forEach(mat => {
            Object.keys(temp).forEach(tempMat => {
                if (tempMat === mat.name) {
                    mat.qty = Math.max(mat.qty - temp[mat.name], 0)
                }
            })
        })
        $(`input[data-name='${name}']`).val(0);
        localStorage.setItem("tempMaterials", JSON.stringify(tempMaterials))
        calcMats()
        listArtefacts();
    })

    $(".artefactInput").on("focus", function () { document.execCommand('selectAll', false, null); });
    $(".artefactInput:first").focus()

    $(".clearAll").click(function () {
        $("input[type='number']").val(0);
    })

    $(".search").on("keyup search", function () {
        $("#collection").val("");
        $(".main .row").hide();
        let search = $(this).val();
        $(".main .row").each(function (i, row) {
            if ($(row).data("mat").toLowerCase().indexOf(search.toLowerCase()) > -1) {
                $(row).show();
            }
        })
        if (search.length === 0)
            $(".main .row").show();
    })

    // Get Collections from artefactList
    let collectionList = [];
    artefactsList.forEach(item => {
        for (x in item.collections) {
            collectionList.push(item.collections[x])
        }
    })
    //Make unique Set from collections, sorted alphabetically
    collectionList = new Set([...collectionList.sort()])
    collectionList.forEach(item => {
        if (item !== "") {
            //Add the collection name to the Dropdown.
            $("#collection").append(`
            <option value='${item}'>${item}</option>`)
        }
    })

    //Dropdown logic
    $("#collection").change(function () {
        $(".search").val("");
        let collection = $(this).val();
        $(".main .row").hide();
        $(".main .row").each(function (i, row) {
            let name = $(row).data("mat");
            artefactsList.forEach(artefact => {
                if (name === artefact.name) {
                    for (x in artefact.collections) {
                        if (collection === artefact.collections[x]) {
                            $(row).show();
                        }
                    }
                    return;
                }
            })
        })
        if ($(this).val() === "")
            $(".main .row").show();
    })

})
