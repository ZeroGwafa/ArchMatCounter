$(function () {

  function listMats(mats) {
    let list = ""
    mats.forEach(function (mat) {
      list += `- ${mat.name.replace("'", "")}: ${mat.qty}<br/>`
    })
    return list
  }

  function listArtefacts() {
    $(".main").empty();
    let artefactInput = {};
    if (localStorage.artefactInput)
      artefactInput = JSON.parse(localStorage.artefactInput);
    artefactsList.forEach((item) => {
      $(".main").append(
        `
        <div class="row" data-mat="${item.name}">
          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" data-toggle="popover" data-html="true" data-trigger="hover" data-placement="bottom"
                title="${item.name}" 
                data-content="
                  <div>
                    <span class='header'>Level:</span> ${item.level}
                  </div>
                  <div>
                    <span class='header'>XP:</span> ${item.experience}
                  </div>
                  <div>
                    <span class='header'>Materials(s):</span><br/>${listMats(item.mats)}
                  </div>
                </div>
              ">
                <a href="http://runescape.wiki/${item.name}" target="_blank" tabindex=-1>${item.name}</a>
              </span>
            </div>
            <input type="number" class="artefactInput form-control" data-name="${item.name}" value=${artefactInput[item.name] || 0}>
            <div class="input-group-append" style="${artefactInput[item.name] > 0 ? "" : "display:none"}">
                <button tabindex=-1 class="btn btn-outline-secondary complete" type="button" data-name="${item.name}">Complete</button>
            </div>
          </div>
        </div>
        `
      )
    });

    $('[data-toggle="popover"]').popover();

    if ($(".search").val() !== "") $(".search").keyup();
    else if ($("#collection").val() !== "") $("#collection").change();
  }

  function calcMats() {
    let mats = {};
    let artefactInput = {};
    let xp = 0;

    document.querySelectorAll("input").forEach((item) => {
      let name = item.dataset.name;
      artefactInput[name] = parseInt(item.value);
      artefactsList.forEach((art) => {
        if (art.name === name) {
          xp += parseFloat(art.experience) * item.value;
          art.mats.forEach((mat) => {
            if (mats[mat.name] === undefined) {
              mats[mat.name] = parseInt(mat.qty) * parseInt(item.value);
            } else {
              mats[mat.name] =
                +mats[mat.name] + parseInt(mat.qty) * parseInt(item.value);
            }
          });
        }
      });
    });
    $("#xp").html(xp.toLocaleString("en-US", { maximumFractionDigits: 2 }))
    localStorage.setItem("tempGoalMats", JSON.stringify(mats));
    localStorage.setItem("artefactInput", JSON.stringify(artefactInput));
  }

  function markComplete(name) {
    let temp = {};
    let tempMaterials = JSON.parse(localStorage.getItem("mats"));
    artefactsList.forEach((art) => {
      if (art.name === name) {
        art.mats.forEach((mat) => {
          temp[mat.name] = +(
            parseInt(mat.qty) * parseInt($(`input[data-name="${name}"]`).val())
          );
        });
      }
    });
    tempMaterials.forEach((mat) => {
      Object.keys(temp).forEach((tempMat) => {
        if (tempMat === mat.name) {
          mat.qty = Math.max(mat.qty - temp[mat.name], 0);
        }
      });
    });
    $(`input[data-name='${name}']`).val(0);
    localStorage.setItem("tempMaterials", JSON.stringify(tempMaterials));
  }

  listArtefacts();

  $(".import").click(() => {
    
    localStorage.removeItem("goalMats");
    localStorage.setItem("goalMats", localStorage.tempGoalMats)
    localStorage.removeItem("tempGoalMats");
    location.reload();
  });

  $(".main").on("click", "button.complete", function (e) {
    let name = $(this).data("name");
    markComplete(name);
    calcMats();
    localStorage.removeItem("goalMats");
    localStorage.setItem("goalMats", localStorage.tempGoalMats)
    location.reload()
  });

  $(".artefactInput").on("focus", function () {
    $(this).select();
  })
  $(".artefactInput:first").focus();

  $(".artefactInput").on("keyup", function () {
    calcMats()
  })

  $(".clearAll").click(function () {
    $("input[type='number']").val(0);
    calcMats();
    localStorage.removeItem("goalMats");
    localStorage.setItem("goalMats", localStorage.tempGoalMats)
    location.reload();
  });

  $(".search").on("keyup search", function () {
    $("#collection").val("");
    $(".main .row").hide();
    let search = $(this).val();
    $(".main .row").each(function (i, row) {
      if ($(row).data("mat").toLowerCase().indexOf(search.toLowerCase()) > -1) {
        $(row).show();
      }
    });
    if (search.length === 0) $(".main .row").show();
  });

  // Get Collections from artefactList
  let collectionList = [];
  artefactsList.forEach((item) => {
    for (x in item.collections) {
      collectionList.push(item.collections[x]);
    }
  });
  //Make unique Set from collections, sorted alphabetically
  collectionList = new Set([...collectionList.sort()]);
  collectionList.forEach((item) => {
    if (item !== "") {
      //Add the collection name to the Dropdown.
      $("#collection").append(`
            <option value='${item}'>${item}</option>`);
    }
  });

  //Dropdown logic
  $("#collection").change(function () {
    $(".search").val("");
    let collection = $(this).val();
    $(".main .row").hide();
    $(".main .row").each(function (i, row) {
      let name = $(row).data("mat");
      artefactsList.forEach((artefact) => {
        if (name === artefact.name) {
          for (x in artefact.collections) {
            if (collection === artefact.collections[x]) {
              $(row).show();
            }
          }
          return;
        }
      });
    });
    if ($(this).val() === "") $(".main .row").show();
  });

  $(".completeAll").click(function () {
    let goalMats = JSON.parse(localStorage.getItem("goalMats"));
    let curMats = JSON.parse(localStorage.getItem("archMats"));
    Object.keys(goalMats).forEach((tempMat) => {
      curMats.forEach((mat) => {
        if (tempMat === mat.name) {
          mat.qty = Math.max(
            parseInt(mat.qty) - parseInt(goalMats[tempMat]),
            0
          );
          goalMats[tempMat] -= parseInt(goalMats[tempMat]);
        }
      });
    });
    localStorage.setItem("archMats", JSON.stringify(curMats));
    localStorage.setItem("goalMats", JSON.stringify(goalMats));
    listArtefacts();
    localStorage.removeItem("artefactInput");
    location.reload();
  });

  calcMats()
});
