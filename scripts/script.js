A1lib.identifyApp("appconfig.json");

window.setTimeout(function () {
  const appColor = A1lib.mixColor(255, 199, 0);
  const timestampRegex = /\[\d{2}:\d{2}:\d{2}\]/g;

  let reader = new Chatbox.default();
  reader.readargs = {
    colors: [
      A1lib.mixColor(255, 255, 255), //White text
      A1lib.mixColor(0, 255, 0), //Green Fortune Text
    ],
    backwards: true,
  };

  $(".mats").append("<span>Searching for chatboxes</span>");
  reader.find();
  let findChat = setInterval(function () {
    if (reader.pos === null) reader.find();
    else {
      clearInterval(findChat);
      reader.pos.boxes.map((box, i) => {
        $(".chat").append(`<option value=${i}>Chat ${i}</option>`);
      });

      if (localStorage.archChat) {
        reader.pos.mainbox = reader.pos.boxes[localStorage.archChat];
      } else {
        //If multiple boxes are found, this will select the first, which should be the top-most chat box on the screen.
        reader.pos.mainbox = reader.pos.boxes[0];
      }
      showSelectedChat(reader.pos);
      buildTable();
      $("button.tracker").click();
    }
  }, 1000);

  function showSelectedChat(chat) {
    //Attempt to show a temporary rectangle around the chatbox.  skip if overlay is not enabled.
    try {
      alt1.overLayRect(
        appColor,
        chat.mainbox.rect.x,
        chat.mainbox.rect.y,
        chat.mainbox.rect.width,
        chat.mainbox.rect.height,
        2000,
        5
      );
    } catch {}
  }

  function readChatbox() {
    var opts = reader.read() || [];
    var chatStr = "";
    var chatArr;

    if (opts.length != 0) {
      for (let line in opts) {
        //Filter out the first chat[line], if it has no timestamp.  This is probably from a screen reload.
        //Check if no timestamp exists, and it's the first line in the chatreader.
        if (!opts[line].text.match(timestampRegex) && line == "0") {
          continue;
        }
        // Beginning of chat line
        if (opts[line].text.match(timestampRegex)) {
          if (line > 0) {
            chatStr += "\n";
          }
          chatStr += opts[line].text + " ";
          continue;
        }
        chatStr += opts[line].text;
      }
    }
    if (chatStr.trim() != "") {
      chatArr = chatStr.trim().split("\n");
    }
    let name, type, qty;
    for (let line in chatArr) {
      console.log(chatArr[line]);
      if (localStorage.chatHistory.split("\n").includes(chatArr[line])) {
        console.log("Material already logged: " + chatArr[line]);
        continue;
      }
      if (chatArr[line].trim() != "") {
        // Determine quantity modifier
        if (chatArr[line] && !qty) {
          // Auto-Screener - Set qty to 1, process next line.
          if (chatArr[line].indexOf("Your auto-screener") > -1) {
            console.log("Previous line was a auto-screener effect, skip.");
            updateChatHistory(chatArr[line]);
            qty = 1;
            continue;
          }
          // Fortune and Balarak - double the material found.
          if (
            chatArr[line].indexOf("Fortune perk") > -1 ||
            chatArr[line].indexOf("Balarak") > -1
          ) {
            console.log("Fortune, or Balarak triggered, doubling mat.");
            updateChatHistory(chatArr[line]);
            qty = 2;
            continue;
          }
          // All other situations, set qty to 1, process current line.
          qty = 1;
        }
        // Get name and type
        [name, type] = checkLine(chatArr[line]);

        // If material found, log to console, and update Materials List.
        if (name) {
          console.log({
            line: chatArr[line],
            name,
            type,
            qty,
          });
          updateMats(name, qty);
          qty = null;
        }
      }
      if (chatStr != "") {
        updateChatHistory(chatArr[line]);
      }
    }
  }

  function updateChatHistory(line) {
    if (!localStorage.chatHistory) {
      localStorage.chatHistory = line;
      return;
    }
    var history = localStorage.chatHistory.split("\n");
    if (history.length == 5) {
      history.splice(0, 1);
    }
    history.push(line);
    localStorage.chatHistory = history.join("\n");
  }

  function updateMats(name, qty) {
    let mats = JSON.parse(localStorage.archMats);
    for (let mat of mats) {
      if (mat.name == name) {
        console.log({matQty: mat.qty, qty})
        mat.qty += qty;
      }
    }
    localStorage.archMats = JSON.stringify(mats);
    tidyTable(name);
  }

  function checkLine(line) {
    var name, type;
    // Inventory
    if (line.indexOf("You find some") > -1) {
      name = line
        .trim()
        .split("You find some")[1]
        .trim()
        .replace(/(\.|')/g, "");
      type = "Normal";
    }
    // Auto Screener
    if (line.indexOf("Your auto-screener") > -1) {
      name = line
        .trim()
        .split("Your auto-screener spits out some ")[1]
        .trim()
        .replace(/(\.|')/g, "");
      type = "Auto-screener";
    }
    // Porter/Imp-Souled
    if (line.indexOf("material storage") > -1) {
      name = line
        .trim()
        .split(/material storage:? /)[1]
        .trim()
        .replace(/(\.|')/g, "");
      if (line.indexOf("imp-souled") > -1) type = "Imp Souled";
      else type = "Porter";
    }
    // Familiar (Waterfiend/etc)
    if (line.indexOf("Your familiar has produced an item") > -1) {
      name = line
        .trim()
        .split(/produced an item:? /)[1]
        .trim()
        .replace(/(\.|')/g, "");
      type = "Familiar";
    }
    //Fortune Perk/Imp-Souled(material storage full catch)
    if (line.indexOf("Fortune perk") > -1 || line.indexOf("imp-souled") > -1) {
      //Imp-souled here as well, in case user doesn't have enough slots unlocked in item storage.
      name = line
        .match(/your bank:? [(\.|')+g\s]*/)[0]
        .split(/your bank:? /)[1]
        .split(/ x /)[0]
        .trim()
        .replace("'", "");
      if (line.indexOf("imp-souled") > -1) type = "Imp Souled";
      else type = "Fortune";
    }

    return [name, type];
  }
  function mapLocations(location) {
    let loc = "";
    location.split("\n").forEach((site) => (loc += `- ${site}<br/>`));
    return loc;
  }

  function buildTable() {
    $(".mats").empty();
    JSON.parse(localStorage.archMats).forEach((mat) => {
      let name = mat.name.replace("'", "");
      $(".mats").append(
        `
        <div class='row' data-name="${name}">
        <div class="col hide"><input type="checkbox" class="hideMe" ${
          mat.hide ? "checked=checked" : ""
        }/></div>
            <div class='col-6' tabindex="0" data-toggle="popover" data-html="true" data-trigger="focus" data-placement="bottom"
            title="${mat.name}" 
            data-content="<div><span class='header'>Level:</span> ${
              mat.level
            }<br/>
            <span class='header'>Faction:</span> ${mat.faction}<br/>
            <span class='header'>Location(s):</span><br/>${mapLocations(
              mat.location
            )}</div>">
            ${mat.name}
            </div>
            <div class="col qty">
            ${mat.qty}
            </div>
            <div class="col goal">
            ${mat.goal}
            </div>
            </div>`
      );
    });

    if (localStorage.getItem("archMatFilter") === "true") {
      $(".filter").prop("checked", true);
    }
    if (localStorage.getItem("goals") === "true") {
      $(".goals").prop("checked", true);
      $(".goal, .goalCol").show();
    }
    if ($(".edit").is(":checked")) $(".hide").show();

    $('[data-toggle="popover"]').popover();
    $(".popover-dismiss").popover({
      trigger: "focus",
    });
    tidyTable();
  }

  function tidyTable(name) {
    let materials = JSON.parse(localStorage.archMats);
    $(".mats .warning").remove();
    $(`[data-name="${name}"]`).removeClass("normal complete");
    $(`[data-name="${name}"]`).addClass("getMat");
    materials.forEach((mat) => {
      let name = mat.name.replace("'", "");
      $("[data-name='" + name + "'] > .qty").text(mat.qty);
      if (
        mat.qty >= 0 &&
        mat.goal > 0 &&
        mat.qty >= mat.goal &&
        localStorage.goals === "true"
      ) {
        $(`[data-name="${name}"]`).removeClass("getMat normal");
        $(`[data-name="${name}"]`).addClass("complete");
      } else {
        setTimeout(function () {
          $(`[data-name="${name}"]`).removeClass("getMat complete");
          $(`[data-name="${name}"]`).addClass("normal");
        }, 500);
      }
    });
    if (localStorage.archMatFilter === "true" && !$(".edit").is(":checked")) {
      $(".mats .row").hide();
      if ($(".goals").is(":checked")) {
        materials.forEach((mat) => {
          let name = mat.name.replace("'", "");
          if (mat.hide === false && mat.goal > 0) {
            $(`[data-name='${name}']`).show();
          }
        });
      } else {
        materials.forEach((mat) => {
          let name = mat.name.replace("'", "");
          if (mat.hide === false && mat.qty > 0) {
            $(`[data-name='${name}']`).show();
          }
        });
      }
      if ($(".mats .row:visible").length === 0 && !$(".edit").is(":checked")) {
        if ($(".filter").is(":checked")) {
          if ($(".goals").is(":checked")) {
            $(".mats").append(
              "<div class='warning'>Filtering materials by goals.  This will only show materials that have a goal value set." +
                " Please enter these values through either Edit Mode, or using the Artifact Calculator in the Settings box.  Or, uncheck 'Enable Filter'.</div>"
            );
          } else {
            $(".mats").append(
              "<div class='warning'>Filter has been enabled, showing only mats that have a amount greater than 0." +
                "  Please either fill in your current materials using Edit Mode, or this list will populate as you gain materials.</div>"
            );
          }
        }
      }
    }
  }

  $(function () {
    $("button, input, select, body").attr("tabindex", "-1");

    $(".chat").change(function () {
      reader.pos.mainbox = reader.pos.boxes[$(this).val()];
      showSelectedChat(reader.pos);
      localStorage.setItem("archChat", $(this).val());
      $(this).val("");
    });

    $(".edit").change(function () {
      let materials = JSON.parse(localStorage.archMats);
      document.querySelectorAll(".hideMe").forEach((row, i) => {
        if (row.checked === true) materials[i].hide = true;
        else materials[i].hide = false;
      });
      if ($(this).is(":checked")) {
        $(".filter, .modal-body button").prop("disabled", true);

        // Apply tabindex
        $(".row .qty").attr("tabindex", "1");
        $(".row .goal").attr("tabindex", "2");

        document.querySelectorAll(".col-6").forEach((row) => {
          row.classList.remove("col-6");
          row.classList.add("col-4");
        });
        if ($(".tracker").text() == "Stop") {
          $(".tracker").click();
        }
        $(".row:hidden:not(.modal *), .hide").show();
        $(".qty, .goal")
          .attr("contenteditable", "true")
          .on("focus", function () {
            setTimeout(function () {
              document.execCommand("selectAll", false, null);
            }, 0);
          });
        $(".qty:first").focus();
      } else {
        if ($(".tracker").text() == "Start") {
          $(".tracker").click();
        }
        $(".filter, .modal-body button").prop("disabled", false);
        $(".row .qty,.row .goal").removeAttr("tabindex");
        document.querySelectorAll(".col-4").forEach((row) => {
          row.classList.remove("col-4");
          row.classList.add("col-6");
        });
        $(".hide").hide();
        $(".qty, .goal").removeAttr("contenteditable");
        materials.forEach((mat) => {
          let name = mat.name.replace("'", "");
          mat.qty = parseInt($(`[data-name='${name}'] .qty`).text());
          mat.goal = parseInt($(`[data-name='${name}'] .goal`).text());
        });
        localStorage.archMats = JSON.stringify(materials);
        buildTable();
      }
    });

    let tracking;

    $("button.tracker").click(function () {
      if ($(this).html().trim() === "Start") {
        tracking = setInterval(function () {
          readChatbox();
        }, 200);
        $(this).html("Stop");
      } else {
        $(this).html("Start");
        clearInterval(tracking);
      }
    });

    $(".clear").click(function (e) {
      let type = e.target.dataset.type;
      if (type === "reset") {
        let data = [
          "goalMats",
          "goals",
          "artefactInput",
          "archMats",
          "tempGoalMats",
          "archMatFilter",
        ];
        data.forEach((item) => localStorage.removeItem(item));
        location.reload();
      } else {
        JSON.parse(localStorage.archMats).forEach((mat) => {
          mat[type] = 0;
        });
        buildTable();
      }
    });

    $("#sort").change((e) => {
      if (!$(".edit").is(":checked")) {
        let materials = JSON.parse(localStorage.archMats);
        materials.sort((a, b) => {
          if (a.id > b.id) return 1;
          else return -1;
        });
        let sort = e.target.value;
        switch (sort) {
          case "id":
          case "name":
            materials.sort((a, b) => {
              if (a[sort] > b[sort]) return 1;
              else return -1;
            });
            break;
          case "qty":
          case "goal":
            materials.sort((a, b) => {
              if (a[sort] > b[sort]) return -1;
              else return 1;
            });
            break;
          case "faction":
            materials.sort((a, b) => {
              if (a.id > b.id) return -1;
              else return 1;
            });
            materials.sort((a, b) => {
              if (a.faction > b.faction) return 1;
              else return -1;
            });
          default:
            break;
        }
        localStorage.archMats = JSON.stringify(materials);
        buildTable();
      }
    });

    $(".export").click(function () {
      var str = "Material,Quantity,Goal\n"; // column headers
      JSON.parse(localStorage.archMats).forEach((mat) => {
        let name = mat.name.replace("'", "");
        str = `${str}${name},${mat.qty},${mat.goal}\n`;
      });
      var blob = new Blob([str], { type: "text/csv;charset=utf-8;" });
      if (navigator.msSaveBlob) {
        // IE 10+
        navigator.msSaveBlob(blob, "archMatsExport.csv");
      } else {
        var link = document.createElement("a");
        if (link.download !== undefined) {
          // feature detection
          // Browsers that support HTML5 download attribute
          var url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute("download", "archMatsExport.csv");
          link.style.visibility = "hidden";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    });

    $(".filter").change(function () {
      if (!$(".edit").is(":checked")) {
        localStorage.archMatFilter = $(this).is(":checked");
        $(".mats .row").show();
        tidyTable();
      }
    });

    $(".goals").change(function () {
      localStorage.goals = $(this).is(":checked");
      if (localStorage.goals === "true") {
        $(".goal, .goalCol").show();
        tidyTable();
      } else {
        $(".goal, .goalCol").hide();
        tidyTable();
      }
    });

    localStorage.removeItem("tempMaterials");

    function onStorageEvent(storageEvent) {
      checkSaveMats();
      if (storageEvent.key === "goalMats") {
        if (storageEvent.newValue == null) return;
        if (localStorage.tempMaterials) {
          materials = JSON.parse(localStorage.tempMaterials);
          localStorage.removeItem("tempMaterials");
        }
        var mats = JSON.parse(storageEvent.newValue);
        JSON.parse(localStorage.archMats).forEach((mat, i) => {
          mat.goal = parseInt(mats[mat.name]);
        });
        buildTable();
      }
    }

    window.addEventListener("storage", onStorageEvent, false);

    $(".openImport").click(function () {
      window.open("artefacts.html", "", "width=400");
    });

    $(".matHeader .col:contains('Qty')").dblclick(function () {
      if ($(".edit").is(":checked")) $(".qty").text(1000);
    });
  });
}, 50);
