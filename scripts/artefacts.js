$(function () {

    function listArtefacts() {
        $(".main").empty();
        let artefactInput = {}
        if (localStorage.artefactInput)
            artefactInput = JSON.parse(localStorage.artefactInput);
        console.log(artefactInput)
        artefactsList.forEach(item => {
            $(".main").append(`
        <div class="row">
            <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                    <span class="input-group-text">${item.name}</span>
                </div>
                <input type="number" class="artefactInput form-control" data-name="${item.name}" value=${artefactInput[item.name] || 0}>
                <div class="input-group-append" style="${artefactInput[item.name] > 0 ? "" : "display:none"}">
                    <button tabindex=-1 class="btn btn-outline-secondary complete" type="button" data-name="${item.name}">Complete</button>
                </div>
            </div>
        </div>`)
        });
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
})