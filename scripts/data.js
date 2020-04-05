let materials = [
    {
        name: "Third Age iron",
        qty: 0,
        goal: 0,
        hide: false,
        level: "5",
        faction: "Agnostic",
        location: "Varrock Dig Site\nKharid-et\nInfernal Source\nEverlight\nStormguard Citadel\nWarforge!"
    },
    {
        name: "Zarosian insignia",
        qty: 0,
        goal: 0,
        hide: false,
        level: "5",
        faction: "Zarosian",
        location: "Kharid-et (barracks)\nEmpty Throne Room"
    },
    {
        name: "Samite silk",
        qty: 0,
        goal: 0,
        hide: false,
        level: "12",
        faction: "Agnostic",
        location: "Kharid-et (barracks)\nKharid-et entrance"
    },
    {
        name: "Imperial steel",
        qty: 0,
        goal: 0,
        hide: false,
        level: "12",
        faction: "Zarosian",
        location: "Kharid-et (barracks)\nEmpty Throne Room (east)"
    },
    {
        name: "White oak",
        qty: 0,
        goal: 0,
        hide: false,
        level: "17",
        faction: "Agnostic",
        location: "Ice Mountain\nKharid-et\nInfernal Source\nEverlight\nStormguard Citadel\nWarforge!"
    },
    {
        name: "Goldrune",
        qty: 0,
        goal: 0,
        hide: false,
        level: "20",
        faction: "Agnostic",
        location: "Kharid-et\nCamdozaal"
    },
    {
        name: "Orthenglass",
        qty: 0,
        goal: 0,
        hide: false,
        level: "20",
        faction: "Agnostic",
        location: "Anachronia (north)"
    },
    {
        name: "Vellum",
        qty: 0,
        goal: 0,
        hide: false,
        level: "24",
        faction: "Agnostic",
        location: "First Tower"
    },
    {
        name: "Cadmium red",
        qty: 0,
        goal: 0,
        hide: false,
        level: "24",
        faction: "Zamorakian",
        location: "Infernal Source (Star Lodge cellar)\nInfernal Source (Dagon Overlook south-west)\nFirst Tower"
    },
    {
        name: "Ancient vis",
        qty: 0,
        goal: 0,
        hide: false,
        level: "25",
        faction: "Zarosian",
        location: "Kharid-et (Culinarum)\nSlayer Tower"
    },
    {
        name: "Tyrian purple",
        qty: 0,
        goal: 0,
        hide: false,
        level: "25",
        faction: "Zarosian",
        location: "Kharid-et (barracks)\nEmpty Throne Room (south)"
    },
    {
        name: "Leather scraps",
        qty: 0,
        goal: 0,
        hide: false,
        level: "29",
        faction: "Agnostic",
        location: "Morytania (north)"
    },
    {
        name: "Chaotic brimstone",
        qty: 0,
        goal: 0,
        hide: false,
        level: "29",
        faction: "Zamorakian",
        location: "Infernal Source (Vestibule of Futility, south)\nDaemonheim (south-west)"
    },
    {
        name: "Demonhide",
        qty: 0,
        goal: 0,
        hide: false,
        level: "29",
        faction: "Zamorakian",
        location: "Infernal Source (The Harrowing, north-east)\nGod Wars Dungeon (Zamorak's Fortress, east)"
    },
    {
        name: "Eye of Dagon",
        qty: 0,
        goal: 0,
        hide: false,
        level: "36",
        faction: "Zamorakian",
        location: "Infernal Source (Dungeon of Disorder, south-east)\nDaemonheim (south-west)"
    },
    {
        name: "Hellfire metal",
        qty: 0,
        goal: 0,
        hide: false,
        level: "36",
        faction: "Zamorakian",
        location: "Infernal Source (Dungeon of Disorder)\nInfernal Source (Vestibule of Futility, north-east)\nInfernal Source (Dagon Overlook, north)\nGod Wars Dungeon (Zamorak's Fortress. north)"
    },
    {
        name: "Keramos",
        qty: 0,
        goal: 0,
        hide: false,
        level: "42",
        faction: "Saradominist",
        location: "Everlight (mass grave)\nEverlight (Oikoi)\nGod Wars Dungeon (Saradominist, south-east)"
    },
    {
        name: "White marble",
        qty: 0,
        goal: 0,
        hide: false,
        level: "42",
        faction: "Saradominist",
        location: "Everlight (Dominion Games stadium)\nEverlight (Acroplois)\nFirst Tower"
    },
    {
        name: "Cobalt blue",
        qty: 0,
        goal: 0,
        hide: false,
        level: "48",
        faction: "Saradominist",
        location: "Everlight (Amphitheatre)\nGod Wars Dungeon (Saradominist, south-east)"
    },
    {
        name: "Everlight silvthril",
        qty: 0,
        goal: 0,
        hide: false,
        level: "51",
        faction: "Saradominist",
        location: "Everlight (Dominion Games stadium)\nBarrows mounds"
    },
    {
        name: "Star of Saradomin",
        qty: 0,
        goal: 0,
        hide: false,
        level: "51",
        faction: "Saradominist",
        location: "Everlight (Acropolis)\nBarrows mounds"
    },
    {
        name: "Blood of Orcus",
        qty: 0,
        goal: 0,
        hide: false,
        level: "58",
        faction: "Zarosian",
        location: "Kharid-et (Chapel)\nSlayer Tower"
    },
    {
        name: "Stormguard steel",
        qty: 0,
        goal: 0,
        hide: false,
        level: "70",
        faction: "Armadylean",
        location: "Stormguard Citadel (Research & Development, south-west)\nGod Wars Dungeon (Armadylean, south-west)"
    },
    {
        name: "Wings of War",
        qty: 0,
        goal: 0,
        hide: false,
        level: "70",
        faction: "Armadylean",
        location: "Stormguard Citadel (Dayguard tower)\nStormguard Citadel (Nightguard)\nGod Wars Dungeon (Armadylean, south-west)"
    },
    {
        name: "Animal furs",
        qty: 0,
        goal: 0,
        hide: false,
        level: "76",
        faction: "Agnostic",
        location: "Feldip"
    },
    {
        name: "Armadylean yellow",
        qty: 0,
        goal: 0,
        hide: false,
        level: "76",
        faction: "Armadylean",
        location: "Stormguard Citadel (Keshik memorial)\nStormguard Citadel (Relay station)\nEmpyrean Citadel"
    },
    {
        name: "Malachite green",
        qty: 0,
        goal: 0,
        hide: false,
        level: "76",
        faction: "Bandosian",
        location: "Warforge! (Crucible arena)\nWarforge! (north goblin tunnels)\nGod Wars Dungeon (Bandos's Stronghold)"
    },
    {
        name: "Mark of the Kyzaj",
        qty: 0,
        goal: 0,
        hide: false,
        level: "76",
        faction: "Bandosian",
        location: "Warforge! (north goblin tunnels)\nGod Wars Dungeon (Bandosian west)"
    },
    {
        name: "Vulcanised rubber",
        qty: 0,
        goal: 0,
        hide: false,
        level: "76",
        faction: "Bandosian",
        location: "Warforge! (south goblin tunnels)\nFeldip (shores)"
    },
    {
        name: "Warforged bronze",
        qty: 0,
        goal: 0,
        hide: false,
        level: "76",
        faction: "Bandosian",
        location: "Warforge! (Crucible arena)\nWarforge! (north goblin tunnels)\nGod Wars Dungeon (Bandosian, north)\nGod Wars Dungeon (Bandos's Stronghold)"
    },
    {
        name: "Fossilised bone",
        qty: 0,
        goal: 0,
        hide: false,
        level: "81",
        faction: "Agnostic",
        location: "Ancient cavern\nOdd old man"
    },
    {
        name: "Yu'biusk clay",
        qty: 0,
        goal: 0,
        hide: false,
        level: "83",
        faction: "Bandosian",
        location: "Warforge! (animal pens)\nFeldip (shores)"
    },
    {
        name: "Aetherium alloy",
        qty: 0,
        goal: 0,
        hide: false,
        level: "85",
        faction: "Armadylean",
        location: "Stormguard Citadel (Research & Development, north-east)\nStormguard Citadel (Research & Development, north-west)\nEmpyrean Citadel"
    },
    {
        name: "Quintessence",
        qty: 0,
        goal: 0,
        hide: false,
        level: "91",
        faction: "Armadylean",
        location: "Stormguard Citadel (Research & Development, north-east)\nStormguard Citadel (Howl's workshop)\nEmpyrean Citadel"
    },
    {
        name: "Soapstone",
        qty: 0,
        goal: 0,
        hide: false,
        level: "98",
        faction: "Agnostic",
        location: "Waiko"
    }
];

if (localStorage.getItem("mats") != null) {
    if (JSON.parse(localStorage.mats)[0].goal === undefined) {
        materials = JSON.parse(localStorage.mats);
        materials.forEach(mat => {
            if (mat.goal === undefined)
                mat.goal = 0
        })
        localStorage.mats = JSON.stringify(materials);
        location.reload();
    } else {
        materials = JSON.parse(localStorage.mats);
    }
}