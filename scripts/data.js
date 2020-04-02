let materials = [
    {
        name: "Purpleheart wood",
        faction: "Zarosian",
        location: "Tutorial-only",
        qty:0
    },
    {
        name: "Imperial iron",
        faction: "Zarosian",
        location: "Tutorial-only",
        qty:0
    },
    {
        name: "Third Age iron",
        faction: "Agnostic",
        location: "Varrock Dig Site, Kharid-et, Infernal Source, Everlight, Stormguard Citadel, Warforge!",
        qty:0
    },
    {
        name: "Zarosian insignia",
        faction: "Zarosian",
        location: "Kharid-et (barracks)\nEmpty Throne Room",
        qty:0
    },
    {
        name: "Samite silk",
        faction: "Agnostic",
        location: "Kharid-et (barracks)\nKharid-et entrance",
        qty:0
    },
    {
        name: "Imperial steel",
        faction: "Zarosian",
        location: "Kharid-et (barracks)\nEmpty Throne Room (east)",
        qty:0
    },
    {
        name: "White oak",
        faction: "Agnostic",
        location: "Ice Mountain, Kharid-et, Infernal Source, Everlight, Stormguard Citadel, Warforge!",
        qty:0
    },
    {
        name: "Goldrune",
        faction: "Agnostic",
        location: "Kharid-et, Camdozaal",
        qty:0
    },
    {
        name: "Orthenglass",
        faction: "Agnostic",
        location: "Anachronia (north)",
        qty:0
    },
    {
        name: "Vellum",
        faction: "Agnostic",
        location: "First Tower",
        qty:0
    },
    {
        name: "Cadmium red",
        faction: "Zamorakian",
        location: "Infernal Source (Star Lodge cellar)\nInfernal Source (Dagon Overlook south-west)\nFirst Tower",
        qty:0
    },
    {
        name: "Ancient vis",
        faction: "Zarosian",
        location: "Kharid-et (Culinarum)\nSlayer Tower",
        qty:0
    },
    {
        name: "Tyrian purple",
        faction: "Zarosian",
        location: "Kharid-et (barracks)\nEmpty Throne Room (south)",
        qty:0
    },
    {
        name: "Leather scraps",
        faction: "Agnostic",
        location: "Morytania (north)",
        qty:0
    },
    {
        name: "Chaotic brimstone",
        faction: "Zamorakian",
        location: "Infernal Source (Vestibule of Futility, south)\nDaemonheim (south-west)",
        qty:0
    },
    {
        name: "Demonhide",
        faction: "Zamorakian",
        location: "Infernal Source (The Harrowing, north-east)\nGod Wars Dungeon (Zamorak's Fortress, east)",
        qty:0
    },
    {
        name: "Eye of Dagon",
        faction: "Zamorakian",
        location: "Infernal Source (Dungeon of Disorder, south-east)\nDaemonheim (south-west)",
        qty:0
    },
    {
        name: "Hellfire metal",
        faction: "Zamorakian",
        location: "Infernal Source (Dungeon of Disorder)\nInfernal Source (Vestibule of Futility, north-east)\nInfernal Source (Dagon Overlook, north)\nGod Wars Dungeon (Zamorak's Fortress. north)",
        qty:0
    },
    {
        name: "Keramos",
        faction: "Saradominist",
        location: "Everlight (mass grave)\nEverlight (Oikoi)\nGod Wars Dungeon (Saradominist, south-east)",
        qty:0
    },
    {
        name: "White marble",
        faction: "Saradominist",
        location: "Everlight (Dominion Games stadium)\nEverlight (Acroplois)\nFirst Tower",
        qty:0
    },
    {
        name: "Cobalt blue",
        faction: "Saradominist",
        location: "Everlight (Amphitheatre)\nGod Wars Dungeon (Saradominist, south-east)",
        qty:0
    },
    {
        name: "Everlight silvthril",
        faction: "Saradominist",
        location: "Everlight (Dominion Games stadium)\nBarrows mounds",
        qty:0
    },
    {
        name: "Star of Saradomin",
        faction: "Saradominist",
        location: "Everlight (Acropolis)\nBarrows mounds",
        qty:0
    },
    {
        name: "Blood of Orcus",
        faction: "Zarosian",
        location: "Kharid-et (Chapel)\nSlayer Tower",
        qty:0
    },
    {
        name: "Stormguard steel",
        faction: "Armadylean",
        location: "Stormguard Citadel (Research & Development, south-west)\nGod Wars Dungeon (Armadylean, south-west)",
        qty:0
    },
    {
        name: "Wings of War",
        faction: "Armadylean",
        location: "Stormguard Citadel (Dayguard tower)\nStormguard Citadel (Nightguard)\nGod Wars Dungeon (Armadylean, south-west)",
        qty:0
    },
    {
        name: "Animal furs",
        faction: "Agnostic",
        location: "Feldip",
        qty:0
    },
    {
        name: "Armadylean yellow",
        faction: "Armadylean",
        location: "Stormguard Citadel (Keshik memorial)\nStormguard Citadel (Relay station)\nEmpyrean Citadel",
        qty:0
    },
    {
        name: "Malachite green",
        faction: "Bandosian",
        location: "Warforge! (Crucible arena)\nWarforge! (north goblin tunnels)\nGod Wars Dungeon (Bandos's Stronghold)",
        qty:0
    },
    {
        name: "Mark of the Kyzaj",
        faction: "Bandosian",
        location: "Warforge! (north goblin tunnels)\nGod Wars Dungeon (Bandosian west)",
        qty:0
    },
    {
        name: "Vulcanised rubber",
        faction: "Bandosian",
        location: "Warforge! (south goblin tunnels)\nFeldip (shores)",
        qty:0
    },
    {
        name: "Warforged bronze",
        faction: "Bandosian",
        location: "Warforge! (Crucible arena)\nWarforge! (north goblin tunnels)\nGod Wars Dungeon (Bandosian, north)\nGod Wars Dungeon (Bandos's Stronghold)",
        qty:0
    },
    {
        name: "Fossilised bone",
        faction: "Agnostic",
        location: "Ancient cavern\nOdd old man",
        qty:0
    },
    {
        name: "Yu'biusk clay",
        faction: "Bandosian",
        location: "Warforge! (animal pens)\nFeldip (shores)",
        qty:0
    },
    {
        name: "Aetherium alloy",
        faction: "Armadylean",
        location: "Stormguard Citadel (Research & Development, north-east)\nStormguard Citadel (Research & Development, north-west)\nEmpyrean Citadel",
        qty:0
    },
    {
        name: "Quintessence",
        faction: "Armadylean",
        location: "Stormguard Citadel (Research & Development, north-east)\nStormguard Citadel (Howl's workshop)\nEmpyrean Citadel",
        qty:0
    },
    {
        name: "Soapstone",
        faction: "Agnostic",
        location: "Waiko",
        qty:0
    }];

if (localStorage.getItem("mats") != null) {
    tempList = JSON.parse(localStorage.mats);
    for (x in tempList) {
        if (!tempList[x] || !materials[x]) {
            continue;
        } else {
            materials[x].qty = tempList[x].qty;
        }
    }
}