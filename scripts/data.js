let materials = [
    {
        id: 0,
        name: "Third Age iron",
        qty: 0,
        goal: 0,
        hide: false,
        level: "5",
        faction: "Agnostic",
        location: "Varrock Dig Site\nKharid-et\nInfernal Source\nEverlight\nStormguard Citadel\nWarforge!"
    },
    {
        id: 1,
        name: "Zarosian insignia",
        qty: 0,
        goal: 0,
        hide: false,
        level: "5",
        faction: "Zarosian",
        location: "Kharid-et (barracks)\nEmpty Throne Room"
    },
    {
        id: 2,
        name: "Samite silk",
        qty: 0,
        goal: 0,
        hide: false,
        level: "12",
        faction: "Agnostic",
        location: "Kharid-et (barracks)\nKharid-et entrance"
    },
    {
        id: 3,
        name: "Imperial steel",
        qty: 0,
        goal: 0,
        hide: false,
        level: "12",
        faction: "Zarosian",
        location: "Kharid-et (barracks)\nEmpty Throne Room (east)"
    },
    {
        id: 4,
        name: "White oak",
        qty: 0,
        goal: 0,
        hide: false,
        level: "17",
        faction: "Agnostic",
        location: "Ice Mountain\nKharid-et\nInfernal Source\nEverlight\nStormguard Citadel\nWarforge!"
    },
    {
        id: 5,
        name: "Goldrune",
        qty: 0,
        goal: 0,
        hide: false,
        level: "20",
        faction: "Agnostic",
        location: "Kharid-et\nCamdozaal"
    },
    {
        id: 6,
        name: "Orthenglass",
        qty: 0,
        goal: 0,
        hide: false,
        level: "20",
        faction: "Agnostic",
        location: "Anachronia (north)"
    },
    {
        id: 7,
        name: "Vellum",
        qty: 0,
        goal: 0,
        hide: false,
        level: "24",
        faction: "Agnostic",
        location: "First Tower"
    },
    {
        id: 8,
        name: "Cadmium red",
        qty: 0,
        goal: 0,
        hide: false,
        level: "24",
        faction: "Zamorakian",
        location: "Infernal Source (Star Lodge cellar)\nInfernal Source (Dagon Overlook south-west)\nFirst Tower"
    },
    {
        id: 9,
        name: "Ancient vis",
        qty: 0,
        goal: 0,
        hide: false,
        level: "25",
        faction: "Zarosian",
        location: "Kharid-et (Culinarum)\nSlayer Tower"
    },
    {
        id: 10,
        name: "Tyrian purple",
        qty: 0,
        goal: 0,
        hide: false,
        level: "25",
        faction: "Zarosian",
        location: "Kharid-et (barracks)\nEmpty Throne Room (south)"
    },
    {
        id: 11,
        name: "Leather scraps",
        qty: 0,
        goal: 0,
        hide: false,
        level: "29",
        faction: "Agnostic",
        location: "Morytania (north)"
    },
    {
        id: 12,
        name: "Chaotic brimstone",
        qty: 0,
        goal: 0,
        hide: false,
        level: "29",
        faction: "Zamorakian",
        location: "Infernal Source (Vestibule of Futility, south)\nDaemonheim (south-west)"
    },
    {
        id: 13,
        name: "Demonhide",
        qty: 0,
        goal: 0,
        hide: false,
        level: "29",
        faction: "Zamorakian",
        location: "Infernal Source (The Harrowing, north-east)\nGod Wars Dungeon (Zamorak's Fortress, east)"
    },
    {
        id: 14,
        name: "Eye of Dagon",
        qty: 0,
        goal: 0,
        hide: false,
        level: "36",
        faction: "Zamorakian",
        location: "Infernal Source (Dungeon of Disorder, south-east)\nDaemonheim (south-west)"
    },
    {
        id: 15,
        name: "Hellfire metal",
        qty: 0,
        goal: 0,
        hide: false,
        level: "36",
        faction: "Zamorakian",
        location: "Infernal Source (Dungeon of Disorder)\nInfernal Source (Vestibule of Futility, north-east)\nInfernal Source (Dagon Overlook, north)\nGod Wars Dungeon (Zamorak's Fortress. north)"
    },
    {
        id: 16,
        name: "Keramos",
        qty: 0,
        goal: 0,
        hide: false,
        level: "42",
        faction: "Saradominist",
        location: "Everlight (mass grave)\nEverlight (Oikoi)\nGod Wars Dungeon (Saradominist, south-east)"
    },
    {
        id: 17,
        name: "White marble",
        qty: 0,
        goal: 0,
        hide: false,
        level: "42",
        faction: "Saradominist",
        location: "Everlight (Dominion Games stadium)\nEverlight (Acroplois)\nFirst Tower"
    },
    {
        id: 18,
        name: "Cobalt blue",
        qty: 0,
        goal: 0,
        hide: false,
        level: "48",
        faction: "Saradominist",
        location: "Everlight (Amphitheatre)\nGod Wars Dungeon (Saradominist, south-east)"
    },
    {
        id: 19,
        name: "Everlight silvthril",
        qty: 0,
        goal: 0,
        hide: false,
        level: "51",
        faction: "Saradominist",
        location: "Everlight (Dominion Games stadium)\nBarrows mounds"
    },
    {
        id: 20,
        name: "Star of Saradomin",
        qty: 0,
        goal: 0,
        hide: false,
        level: "51",
        faction: "Saradominist",
        location: "Everlight (Acropolis)\nBarrows mounds"
    },
    {
        id: 21,
        name: "Blood of Orcus",
        qty: 0,
        goal: 0,
        hide: false,
        level: "58",
        faction: "Zarosian",
        location: "Kharid-et (Chapel)\nSlayer Tower"
    },
    {
        id: 22,
        name: "Stormguard steel",
        qty: 0,
        goal: 0,
        hide: false,
        level: "70",
        faction: "Armadylean",
        location: "Stormguard Citadel (Research & Development, south-west)\nGod Wars Dungeon (Armadylean, south-west)"
    },
    {
        id: 23,
        name: "Wings of War",
        qty: 0,
        goal: 0,
        hide: false,
        level: "70",
        faction: "Armadylean",
        location: "Stormguard Citadel (Dayguard tower)\nStormguard Citadel (Nightguard)\nGod Wars Dungeon (Armadylean, south-west)"
    },
    {
        id: 24,
        name: "Animal furs",
        qty: 0,
        goal: 0,
        hide: false,
        level: "76",
        faction: "Agnostic",
        location: "Feldip"
    },
    {
        id: 25,
        name: "Armadylean yellow",
        qty: 0,
        goal: 0,
        hide: false,
        level: "76",
        faction: "Armadylean",
        location: "Stormguard Citadel (Keshik memorial)\nStormguard Citadel (Relay station)\nEmpyrean Citadel"
    },
    {
        id: 26,
        name: "Malachite green",
        qty: 0,
        goal: 0,
        hide: false,
        level: "76",
        faction: "Bandosian",
        location: "Warforge! (Crucible arena)\nWarforge! (north goblin tunnels)\nGod Wars Dungeon (Bandos's Stronghold)"
    },
    {
        id: 27,
        name: "Mark of the Kyzaj",
        qty: 0,
        goal: 0,
        hide: false,
        level: "76",
        faction: "Bandosian",
        location: "Warforge! (north goblin tunnels)\nGod Wars Dungeon (Bandosian west)"
    },
    {
        id: 28,
        name: "Vulcanised rubber",
        qty: 0,
        goal: 0,
        hide: false,
        level: "76",
        faction: "Bandosian",
        location: "Warforge! (south goblin tunnels)\nFeldip (shores)"
    },
    {
        id: 29,
        name: "Warforged bronze",
        qty: 0,
        goal: 0,
        hide: false,
        level: "76",
        faction: "Bandosian",
        location: "Warforge! (Crucible arena)\nWarforge! (north goblin tunnels)\nGod Wars Dungeon (Bandosian, north)\nGod Wars Dungeon (Bandos's Stronghold)"
    },
    {
        id: 30,
        name: "Fossilised bone",
        qty: 0,
        goal: 0,
        hide: false,
        level: "81",
        faction: "Agnostic",
        location: "Ancient cavern\nOdd old man"
    },
    {
        id: 31,
        name: "Yu'biusk clay",
        qty: 0,
        goal: 0,
        hide: false,
        level: "83",
        faction: "Bandosian",
        location: "Warforge! (animal pens)\nFeldip (shores)"
    },
    {
        id: 32,
        name: "Aetherium alloy",
        qty: 0,
        goal: 0,
        hide: false,
        level: "85",
        faction: "Armadylean",
        location: "Stormguard Citadel (Research & Development, north-east)\nStormguard Citadel (Research & Development, north-west)\nEmpyrean Citadel"
    },
    {
        id: 33,
        name: "Quintessence",
        qty: 0,
        goal: 0,
        hide: false,
        level: "91",
        faction: "Armadylean",
        location: "Stormguard Citadel (Research & Development, north-east)\nStormguard Citadel (Howl's workshop)\nEmpyrean Citadel"
    },
    {
        id: 34,
        name: "Soapstone",
        qty: 0,
        goal: 0,
        hide: false,
        level: "98",
        faction: "Agnostic",
        location: "Waiko"
    }
];

function checkSaveMats() {

    if (localStorage.getItem("archMats") != null) {
        materials = JSON.parse(localStorage.archMats);
    } else {
        localStorage.archMats = JSON.stringify(materials);
    }
}

checkSaveMats();