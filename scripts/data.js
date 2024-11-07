function isInMatsList(matsList, name, location) {
  for (let mat of matsList) {
    if (mat.name == name) {
      mat.location = mat.location.concat(location);
      return true;
    }
  }
  return false;
}

// API code Stolen from Ex Inferi <3
async function getMatsfromWiki() {
  const response = await fetch(
    "https://runescape.wiki/api.php?action=parse&format=json&page=Material_caches&prop=text&onlypst=1&section=1&formatversion=2"
  );
  const data = await response.json();

  const htmlContent = data.parse.text;
  const parser = new DOMParser();
  const document = parser.parseFromString(htmlContent, "text/html");

  var mats = Array.from(
    document.querySelectorAll(".wikitable tbody tr:not(:nth-child(1)")
  );
  var matsList = [];
  for (let i = 0; i < mats.length; i++) {
    let cells = mats[i].querySelectorAll("td");
    let name = cells[4].innerText.trim();
    let location = cells[6].innerText.trim().split("\n");
    let level = Number(cells[0].innerText);
    let faction = cells[7].innerText.trim();

    if (isInMatsList(matsList, name, location)) {
      continue;
    }
    matsList.push({
      name,
      qty: 0,
      goal: 0,
      hide: false,
      level: level,
      faction: faction,
      location: location,
    });
  }
  // Put matsList in Material Storage order by default.
  matsList.sort((a, b) => {
    if (a["level"] < b["level"]) return 1;
    else return -1;
  });
  matsList.sort((a, b) => {
    if (a["faction"] > b["faction"]) return 1;
    else return -1;
  });
  matsList.forEach((mat, i) => (mat.id = i));

  return matsList;
}

async function checkSaveMats() {
  // Add new mats from wiki if they don't exist in LocalStorage.
  let materials = await getMatsfromWiki();
  if (localStorage.getItem("archMats") != null) {
    const saveData = JSON.parse(localStorage.archMats);
    materials.forEach((mat, i) => {
      if (!saveData[i]) {
        console.debug("Adding new Material: " + mat.name);
        saveData.push(mat);
        return;
      }
      // Update material data, such as location and level.
      saveData.forEach((saveMat) => {
        if (saveMat.name === mat.name) {
          saveMat.id = mat.id;
          saveMat.location = mat.location;
          saveMat.level = mat.level;
        }
      });
    });
    localStorage.archMats = JSON.stringify(saveData);
  } else {
    localStorage.archMats = JSON.stringify(materials);
  }
}

checkSaveMats();