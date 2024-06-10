let artefactsList = [
  {
    name: "Venator dagger",
    level: 5,
    experience: 305.1,
    mats: [
      {
        name: "Third Age iron",
        qty: 16,
      },
      {
        name: "Zarosian insignia",
        qty: 12,
      },
    ],
    collections: ["Zarosian I", "Museum - Zarosian I"],
  },
  {
    name: "Venator light crossbow",
    level: 5,
    experience: 305.1,
    mats: [
      {
        name: "Third Age iron",
        qty: 12,
      },
      {
        name: "Zarosian insignia",
        qty: 16,
      },
    ],
    collections: ["Zarosian I", "Museum - Zarosian I"],
  },
  {
    name: "Centurions seal",
    level: 12,
    experience: 430.8,
    mats: [
      {
        name: "Third Age iron",
        qty: 6,
      },
      {
        name: "Zarosian insignia",
        qty: 2,
      },
    ],
    collections: ["Other"],
  },
  {
    name: "Legionary gladius",
    level: 12,
    experience: 430.8,
    mats: [
      {
        name: "Third Age iron",
        qty: 10,
      },
      {
        name: "Zarosian insignia",
        qty: 6,
      },
      {
        name: "Imperial steel",
        qty: 12,
      },
    ],
    collections: ["Zarosian I", "Museum - Zarosian I"],
  },
  {
    name: "Legionary square shield",
    level: 12,
    experience: 430.8,
    mats: [
      {
        name: "Third Age iron",
        qty: 8,
      },
      {
        name: "Zarosian insignia",
        qty: 8,
      },
      {
        name: "Imperial steel",
        qty: 12,
      },
    ],
    collections: ["Zarosian I", "Museum - Zarosian I"],
  },
  {
    name: "Primis Elementis standard",
    level: 12,
    experience: 430.8,
    mats: [
      {
        name: "Samite silk",
        qty: 16,
      },
      {
        name: "Third Age iron",
        qty: 12,
      },
    ],
    collections: ["Zarosian I", "Museum - Zarosian I"],
  },
  {
    name: "Zaros effigy",
    level: 17,
    experience: 520.5,
    mats: [
      {
        name: "Samite silk",
        qty: 8,
      },
      {
        name: "White oak",
        qty: 10,
      },
      {
        name: "Zarosian insignia",
        qty: 12,
      },
    ],
    collections: ["Zarosian I", "Museum - Zarosian I"],
  },
  {
    name: "Zarosian training dummy",
    level: 17,
    experience: 520.5,
    mats: [
      {
        name: "Third Age iron",
        qty: 16,
      },
      {
        name: "White oak",
        qty: 14,
      },
    ],
    collections: ["Zarosian I", "Museum - Zarosian I"],
  },
  {
    name: "Hookah pipe",
    level: 20,
    experience: 574.4,
    mats: [
      {
        name: "Third Age iron",
        qty: 10,
      },
      {
        name: "Goldrune",
        qty: 12,
      },
      {
        name: "Orthenglass",
        qty: 8,
      },
    ],
    collections: ["Smoky Fings", "Zamorakian I", "Museum - Zamorakian I"],
  },
  {
    name: "Opulent wine goblet",
    level: 20,
    experience: 574.4,
    mats: [
      {
        name: "Third Age iron",
        qty: 14,
      },
      {
        name: "Goldrune",
        qty: 16,
      },
    ],
    collections: ["Smoky Fings", "Zamorakian I", "Museum - Zamorakian I"],
  },
  {
    name: "Crest of Dagon",
    level: 24,
    experience: 646.2,
    mats: [
      {
        name: "Goldrune",
        qty: 14,
      },
      {
        name: "Orthenglass",
        qty: 18,
      },
    ],
    collections: [
      "Showy Fings",
      "Zamorakian I",
      "Museum - Zamorakian I",
      "Knowledge is Power",
    ],
  },
  {
    name: "Disorder painting",
    level: 24,
    experience: 646.2,
    mats: [
      {
        name: "Samite silk",
        qty: 6,
      },
      {
        name: "White oak",
        qty: 6,
      },
      {
        name: "Vellum",
        qty: 6,
      },
      {
        name: "Cadmium red",
        qty: 14,
      },
    ],
    collections: [
      "Anarchic Abstraction",
      "Zamorakian I",
      "Museum - Zamorakian I",
    ],
  },
  {
    name: "Legatus Maximus figurine",
    level: 25,
    experience: 664.1,
    mats: [
      {
        name: "Goldrune",
        qty: 8,
      },
      {
        name: "Zarosian insignia",
        qty: 14,
      },
      {
        name: "Ancient vis",
        qty: 10,
      },
    ],
    collections: [
      "Showy Fings",
      "Zarosian I",
      "Museum - Zarosian I",
      "Magic Man",
    ],
  },
  {
    name: "Solem in Umbra painting",
    level: 25,
    experience: 664.1,
    mats: [
      {
        name: "Samite silk",
        qty: 8,
      },
      {
        name: "White oak",
        qty: 10,
      },
      {
        name: "Tyrian purple",
        qty: 14,
      },
    ],
    collections: [
      "Imperial Impressionism",
      "Zarosian I",
      "Museum - Zarosian I",
    ],
  },
  {
    name: "Imp mask",
    level: 29,
    experience: 735.9,
    mats: [
      {
        name: "Leather scraps",
        qty: 10,
      },
      {
        name: "Chaotic brimstone",
        qty: 10,
      },
      {
        name: "Demonhide",
        qty: 12,
      },
    ],
    collections: ["Zamorakian I", "Museum - Zamorakian I", "Hat Problem"],
  },
  {
    name: "Lesser demon mask",
    level: 29,
    experience: 735.9,
    mats: [
      {
        name: "Leather scraps",
        qty: 6,
      },
      {
        name: "Chaotic brimstone",
        qty: 8,
      },
      {
        name: "Demonhide",
        qty: 12,
      },
      {
        name: "Cadmium red",
        qty: 6,
      },
    ],
    collections: ["Zamorakian I", "Museum - Zamorakian I", "Hat Hoarder"],
  },
  {
    name: "Greater demon mask",
    level: 29,
    experience: 735.9,
    mats: [
      {
        name: "Third Age iron",
        qty: 6,
      },
      {
        name: "Leather scraps",
        qty: 6,
      },
      {
        name: "Chaotic brimstone",
        qty: 8,
      },
      {
        name: "Demonhide",
        qty: 12,
      },
    ],
    collections: ["Zamorakian I", "Museum - Zamorakian I", "Hat Hoarder"],
  },
  {
    name: "Order of Dis robes",
    level: 36,
    experience: 861.5,
    mats: [
      {
        name: "Samite silk",
        qty: 16,
      },
      {
        name: "Cadmium red",
        qty: 10,
      },
      {
        name: "Eye of Dagon",
        qty: 14,
      },
    ],
    collections: ["Zamorakian I", "Museum - Zamorakian I"],
  },
  {
    name: "Ritual dagger",
    level: 36,
    experience: 861.5,
    mats: [
      {
        name: "Goldrune",
        qty: 16,
      },
      {
        name: "Hellfire metal",
        qty: 24,
      },
    ],
    collections: ["Zamorakian I", "Museum - Zamorakian I", "Magic Man"],
  },
  {
    name: "Frying pan",
    level: 42,
    experience: 1073.3,
    mats: [
      {
        name: "Third Age iron",
        qty: 20,
      },
      {
        name: "White marble",
        qty: 24,
      },
    ],
    collections: ["Saradominist I", "Museum - Saradominist I"],
  },
  {
    name: "Hallowed lantern",
    level: 42,
    experience: 1073.3,
    mats: [
      {
        name: "Third Age iron",
        qty: 20,
      },
      {
        name: "Keramos",
        qty: 24,
      },
    ],
    collections: ["Saradominist I", "Museum - Saradominist I"],
  },
  {
    name: "Branding iron",
    level: 45,
    experience: 1283.3,
    mats: [
      {
        name: "Third Age iron",
        qty: 14,
      },
      {
        name: "Eye of Dagon",
        qty: 12,
      },
      {
        name: "Hellfire metal",
        qty: 20,
      },
    ],
    collections: ["Zamorakian II", "Museum - Zamorakian II"],
  },
  {
    name: "Manacles",
    level: 45,
    experience: 1283.3,
    mats: [
      {
        name: "Third Age iron",
        qty: 14,
      },
      {
        name: "Chaotic brimstone",
        qty: 18,
      },
      {
        name: "Eye of Dagon",
        qty: 14,
      },
    ],
    collections: ["Zamorakian II", "Museum - Zamorakian II"],
  },
  {
    name: "Ancient timepiece",
    level: 47,
    experience: 1423.3,
    mats: [
      {
        name: "Goldrune",
        qty: 12,
      },
      {
        name: "Imperial steel",
        qty: 16,
      },
      {
        name: "Ancient vis",
        qty: 18,
      },
    ],
    collections: [
      "Blingy Fings",
      "Zarosian II",
      "Museum - Zarosian II",
      "Magic Man",
    ],
  },
  {
    name: "Legatus pendant",
    level: 47,
    experience: 1423.3,
    mats: [
      {
        name: "Third Age iron",
        qty: 16,
      },
      {
        name: "Goldrune",
        qty: 18,
      },
      {
        name: "Ancient vis",
        qty: 12,
      },
    ],
    collections: ["Blingy Fings", "Zarosian II", "Museum - Zarosian II"],
  },
  {
    name: "Ceremonial unicorn ornament",
    level: 48,
    experience: 1493.3,
    mats: [
      {
        name: "Keramos",
        qty: 26,
      },
      {
        name: "Cobalt blue",
        qty: 20,
      },
    ],
    collections: ["Saradominist I", "Museum - Saradominist I", "Hat Hoarder"],
  },
  {
    name: "Ceremonial unicorn saddle",
    level: 48,
    experience: 1493.3,
    mats: [
      {
        name: "Leather scraps",
        qty: 24,
      },
      {
        name: "Cobalt blue",
        qty: 22,
      },
    ],
    collections: ["Saradominist I", "Museum - Saradominist I"],
  },
  {
    name: "Tetracompass (unpowered)",
    level: 50,
    experience: 2065,
    mats: [
      {
        name: "Malachite green",
        qty: 30,
      },
      {
        name: "Cadmium red",
        qty: 30,
      },
      {
        name: "Cobalt blue",
        qty: 30,
      },
      {
        name: "Armadylean yellow",
        qty: 30,
      },
      {
        name: "Tyrian purple",
        qty: 30,
      },
    ],
    collections: ["Other"],
  },
  {
    name: "Everlight harp",
    level: 51,
    experience: 1703.3,
    mats: [
      {
        name: "Everlight silvthril",
        qty: 30,
      },
      {
        name: "White oak",
        qty: 22,
      },
    ],
    collections: [
      "Saradominist I",
      "Museum - Saradominist I",
      "Wise Am the Music Man",
    ],
  },
  {
    name: "Everlight trumpet",
    level: 51,
    experience: 1703.3,
    mats: [
      {
        name: "Everlight silvthril",
        qty: 28,
      },
      {
        name: "Goldrune",
        qty: 24,
      },
    ],
    collections: [
      "Smoky Fings",
      "Saradominist I",
      "Museum - Saradominist I",
      "Wise Am the Music Man",
    ],
  },
  {
    name: "Everlight violin",
    level: 51,
    experience: 1703.3,
    mats: [
      {
        name: "Star of Saradomin",
        qty: 16,
      },
      {
        name: "White oak",
        qty: 20,
      },
      {
        name: "Samite silk",
        qty: 16,
      },
    ],
    collections: [
      "Saradominist I",
      "Museum - Saradominist I",
      "Wise Am the Music Man",
    ],
  },
  {
    name: "Folded-arm figurine (female)",
    level: 56,
    experience: 2053.3,
    mats: [
      {
        name: "White marble",
        qty: 30,
      },
      {
        name: "Goldrune",
        qty: 24,
      },
    ],
    collections: ["Saradominist I", "Museum - Saradominist I"],
  },
  {
    name: "Folded-arm figurine (male)",
    level: 56,
    experience: 2053.3,
    mats: [
      {
        name: "White marble",
        qty: 30,
      },
      {
        name: "Goldrune",
        qty: 24,
      },
    ],
    collections: ["Saradominist I", "Museum - Saradominist I"],
  },
  {
    name: "Pontifex signet ring",
    level: 58,
    experience: 2193.3,
    mats: [
      {
        name: "Third Age iron",
        qty: 16,
      },
      {
        name: "Goldrune",
        qty: 18,
      },
      {
        name: "Ancient vis",
        qty: 22,
      },
    ],
    collections: ["Blingy Fings", "Zarosian II", "Museum - Zarosian II"],
  },
  {
    name: "Incite Fear spell scroll",
    level: 58,
    experience: 2193.3,
    mats: [
      {
        name: "Vellum",
        qty: 20,
      },
      {
        name: "Ancient vis",
        qty: 18,
      },
      {
        name: "Blood of Orcus",
        qty: 18,
      },
    ],
    collections: [
      "Zarosian II",
      "Museum - Zarosian II",
      "Magic Man",
      "Imperial Sorcery",
    ],
  },
  {
    name: "Apex cap",
    level: 60,
    experience: 2193.3,
    mats: [
      {
        name: "Samite silk",
        qty: 28,
      },
      {
        name: "Leather scraps",
        qty: 12,
      },
      {
        name: "Ancient vis",
        qty: 20,
      },
    ],
    collections: ["Museum - Zarosian V", "Religious Iconography"],
  },
  {
    name: "Curse tablet",
    level: 60,
    experience: 2333.3,
    mats: [
      {
        name: "Imperial steel",
        qty: 16,
      },
      {
        name: "Zarosian insignia",
        qty: 12,
      },
      {
        name: "Soapstone",
        qty: 20,
      },
      {
        name: "Blood of Orcus",
        qty: 12,
      },
    ],
    collections: ["Museum - Zarosian V", "Imperial Sorcery"],
  },
  {
    name: "Funerary urn of shadow",
    level: 60,
    experience: 2333.3,
    mats: [
      {
        name: "Soapstone",
        qty: 26,
      },
      {
        name: "Tyrian purple",
        qty: 14,
      },
      {
        name: "Ancient vis",
        qty: 20,
      },
    ],
    collections: ["Museum - Zarosian V", "Urns of the Empire"],
  },
  {
    name: "Dominion discus",
    level: 61,
    experience: 2566.7,
    mats: [
      {
        name: "Keramos",
        qty: 34,
      },
      {
        name: "Star of Saradomin",
        qty: 28,
      },
    ],
    collections: ["Saradominist II", "Museum - Saradominist II"],
  },
  {
    name: "Dominion javelin",
    level: 61,
    experience: 2566.7,
    mats: [
      {
        name: "Keramos",
        qty: 32,
      },
      {
        name: "Third Age iron",
        qty: 30,
      },
    ],
    collections: ["Saradominist II", "Museum - Saradominist II"],
  },
  {
    name: "Dominion pelte shield",
    level: 61,
    experience: 2566.7,
    mats: [
      {
        name: "Star of Saradomin",
        qty: 34,
      },
      {
        name: "Samite silk",
        qty: 28,
      },
    ],
    collections: ["Saradominist II", "Museum - Saradominist II"],
  },
  {
    name: "Infula robes",
    level: 62,
    experience: 2800,
    mats: [
      {
        name: "Samite silk",
        qty: 26,
      },
      {
        name: "Leather scraps",
        qty: 12,
      },
      {
        name: "Goldrune",
        qty: 12,
      },
      {
        name: "Tyrian purple",
        qty: 12,
      },
    ],
    collections: ["Museum - Zarosian V", "Religious Iconography"],
  },
  {
    name: "Funerary urn of smoke",
    level: 62,
    experience: 2800,
    mats: [
      {
        name: "Soapstone",
        qty: 28,
      },
      {
        name: "Tyrian purple",
        qty: 14,
      },
      {
        name: "Ancient vis",
        qty: 20,
      },
    ],
    collections: ["Museum - Zarosian V", "Urns of the Empire"],
  },
  {
    name: "Hand of the Ancients",
    level: 62,
    experience: 2800,
    mats: [
      {
        name: "Blood of Orcus",
        qty: 12,
      },
      {
        name: "White oak",
        qty: 18,
      },
      {
        name: "Ancient vis",
        qty: 14,
      },
      {
        name: "Goldrune",
        qty: 18,
      },
    ],
    collections: ["Museum - Zarosian V", "Imperial Sorcery"],
  },
  {
    name: "Decorative amphora",
    level: 63,
    experience: 3033.3,
    mats: [
      {
        name: "Tyrian purple",
        qty: 16,
      },
      {
        name: "Ancient vis",
        qty: 18,
      },
      {
        name: "Soapstone",
        qty: 28,
      },
    ],
    collections: ["Museum - Zarosian VI", "Entertaining the Masses"],
  },
  {
    name: "Funerary urn of ice",
    level: 63,
    experience: 3033.3,
    mats: [
      {
        name: "Soapstone",
        qty: 28,
      },
      {
        name: "Tyrian purple",
        qty: 14,
      },
      {
        name: "Ancient vis",
        qty: 20,
      },
    ],
    collections: ["Museum - Zarosian VI", "Urns of the Empire"],
  },
  {
    name: "Loarnab rod",
    level: 63,
    experience: 3033.3,
    mats: [
      {
        name: "White oak",
        qty: 28,
      },
      {
        name: "Blood of Orcus",
        qty: 16,
      },
      {
        name: "Imperial steel",
        qty: 18,
      },
    ],
    collections: ["Museum - Zarosian VI", "Religious Iconography"],
  },
  {
    name: "Inquisitors ceremonial armour",
    level: 64,
    experience: 3266.7,
    mats: [
      {
        name: "Leather scraps",
        qty: 14,
      },
      {
        name: "Samite silk",
        qty: 30,
      },
      {
        name: "Tyrian purple",
        qty: 18,
      },
    ],
    collections: ["Finery of the Inquisition", "Museum - Zarosian VI"],
  },
  {
    name: "Inquisitors ceremonial mask",
    level: 64,
    experience: 3266.7,
    mats: [
      {
        name: "Ancient vis",
        qty: 14,
      },
      {
        name: "Leather scraps",
        qty: 12,
      },
      {
        name: "Blood of Orcus",
        qty: 14,
      },
      {
        name: "Samite silk",
        qty: 22,
      },
    ],
    collections: ["Finery of the Inquisition", "Museum - Zarosian VI"],
  },
  {
    name: "Inquisitors seal",
    level: 64,
    experience: 3266.7,
    mats: [
      {
        name: "Tyrian purple",
        qty: 14,
      },
      {
        name: "Zarosian insignia",
        qty: 20,
      },
      {
        name: "Ancient vis",
        qty: 14,
      },
      {
        name: "Goldrune",
        qty: 14,
      },
    ],
    collections: ["Finery of the Inquisition", "Museum - Zarosian VI"],
  },
  {
    name: "The Lake of Fire painting",
    level: 65,
    experience: 3500,
    mats: [
      {
        name: "Samite silk",
        qty: 10,
      },
      {
        name: "White oak",
        qty: 10,
      },
      {
        name: "Vellum",
        qty: 10,
      },
      {
        name: "Cadmium red",
        qty: 34,
      },
    ],
    collections: [
      "Anarchic Abstraction",
      "Zamorakian II",
      "Museum - Zamorakian II",
    ],
  },
  {
    name: "Lust metal sculpture",
    level: 65,
    experience: 3500,
    mats: [
      {
        name: "Third Age iron",
        qty: 16,
      },
      {
        name: "Eye of Dagon",
        qty: 24,
      },
      {
        name: "Goldrune",
        qty: 24,
      },
    ],
    collections: ["Showy Fings", "Zamorakian II", "Museum - Zamorakian II"],
  },
  {
    name: "Funerary urn of blood",
    level: 66,
    experience: 3773.3,
    mats: [
      {
        name: "Soapstone",
        qty: 30,
      },
      {
        name: "Tyrian purple",
        qty: 14,
      },
      {
        name: "Blood of Orcus",
        qty: 20,
      },
    ],
    collections: ["Museum - Zarosian VII", "Urns of the Empire"],
  },
  {
    name: "Gladiator helmet",
    level: 66,
    experience: 3773.3,
    mats: [
      {
        name: "Imperial steel",
        qty: 30,
      },
      {
        name: "Blood of Orcus",
        qty: 16,
      },
      {
        name: "Leather scraps",
        qty: 18,
      },
    ],
    collections: ["Entertaining the Masses", "Museum - Zarosian VII"],
  },
  {
    name: "Gladiator sword",
    level: 66,
    experience: 3773.3,
    mats: [
      {
        name: "Imperial steel",
        qty: 30,
      },
      {
        name: "Goldrune",
        qty: 18,
      },
      {
        name: "Zarosian insignia",
        qty: 16,
      },
    ],
    collections: ["Entertaining the Masses", "Museum - Zarosian VII"],
  },
  {
    name: "The Serpents Fall carving",
    level: 67,
    experience: 3966.7,
    mats: [
      {
        name: "Vellum",
        qty: 16,
      },
      {
        name: "Tyrian purple",
        qty: 24,
      },
      {
        name: "Blood of Orcus",
        qty: 12,
      },
      {
        name: "White oak",
        qty: 12,
      },
    ],
    collections: ["Museum - Zarosian VII", "Religious Iconography"],
  },
  {
    name: "Funerary urn of miasma",
    level: 67,
    experience: 3966.7,
    mats: [
      {
        name: "Soapstone",
        qty: 30,
      },
      {
        name: "Tyrian purple",
        qty: 14,
      },
      {
        name: "Ancient vis",
        qty: 20,
      },
    ],
    collections: ["Museum - Zarosian VII", "Urns of the Empire"],
  },
  {
    name: "Model chariot",
    level: 67,
    experience: 3966.7,
    mats: [
      {
        name: "Vellum",
        qty: 12,
      },
      {
        name: "Imperial steel",
        qty: 18,
      },
      {
        name: "Goldrune",
        qty: 20,
      },
      {
        name: "Zarosian insignia",
        qty: 14,
      },
    ],
    collections: ["Museum - Zarosian VII", "Religious Iconography"],
  },
  {
    name: "Chaos star",
    level: 68,
    experience: 4200,
    mats: [
      {
        name: "Chaotic brimstone",
        qty: 28,
      },
      {
        name: "Hellfire metal",
        qty: 36,
      },
    ],
    collections: ["Zamorakian II", "Museum - Zamorakian II"],
  },
  {
    name: "Spiked dog collar",
    level: 68,
    experience: 4200,
    mats: [
      {
        name: "Third Age iron",
        qty: 24,
      },
      {
        name: "Leather scraps",
        qty: 24,
      },
      {
        name: "Chaotic brimstone",
        qty: 16,
      },
    ],
    collections: ["Zamorakian II", "Museum - Zamorakian II"],
  },
  {
    name: "Bronze Dominion medal",
    level: 69,
    experience: 4433.3,
    mats: [
      {
        name: "Everlight silvthril",
        qty: 36,
      },
      {
        name: "Star of Saradomin",
        qty: 26,
      },
    ],
    collections: [
      "Blingy Fings",
      "Saradominist II",
      "Museum - Saradominist II",
    ],
  },
  {
    name: "Silver Dominion medal",
    level: 69,
    experience: 4433.3,
    mats: [
      {
        name: "Everlight silvthril",
        qty: 36,
      },
      {
        name: "Star of Saradomin",
        qty: 26,
      },
    ],
    collections: [
      "Blingy Fings",
      "Saradominist II",
      "Museum - Saradominist II",
    ],
  },
  {
    name: "Dominion torch",
    level: 69,
    experience: 4433.3,
    mats: [
      {
        name: "Goldrune",
        qty: 12,
      },
      {
        name: "Orthenglass",
        qty: 12,
      },
      {
        name: "Everlight silvthril",
        qty: 20,
      },
      {
        name: "Star of Saradomin",
        qty: 18,
      },
    ],
    collections: ["Smoky Fings", "Saradominist II", "Museum - Saradominist II"],
  },
  {
    name: "Ikovian gerege",
    level: 70,
    experience: 4666.7,
    mats: [
      {
        name: "Third Age iron",
        qty: 36,
      },
      {
        name: "Wings of War",
        qty: 30,
      },
    ],
    collections: [
      "Armadylean I",
      "Museum - Armadylean I",
      "Knowledge is Power",
    ],
  },
  {
    name: "Toy glider",
    level: 70,
    experience: 4666.7,
    mats: [
      {
        name: "Stormguard steel",
        qty: 36,
      },
      {
        name: "White oak",
        qty: 30,
      },
    ],
    collections: ["Armadylean I", "Museum - Armadylean I"],
  },
  {
    name: "Toy war golem",
    level: 70,
    experience: 4666.7,
    mats: [
      {
        name: "Third Age iron",
        qty: 36,
      },
      {
        name: "White oak",
        qty: 30,
      },
    ],
    collections: ["Armadylean I", "Museum - Armadylean I"],
  },
  {
    name: "Ceremonial dragonkin device",
    level: 70,
    experience: 4666.7,
    mats: [
      {
        name: "Orthenglass",
        qty: 66,
      },
    ],
    collections: ["Desperate for Artefacts"],
  },
  {
    name: "Decorative vase",
    level: 72,
    experience: 5133.3,
    mats: [
      {
        name: "White marble",
        qty: 36,
      },
      {
        name: "Cobalt blue",
        qty: 30,
      },
    ],
    collections: ["Saradominist II", "Museum - Saradominist II"],
  },
  {
    name: "Patera bowl",
    level: 72,
    experience: 5133.3,
    mats: [
      {
        name: "Keramos",
        qty: 36,
      },
      {
        name: "Goldrune",
        qty: 30,
      },
    ],
    collections: ["Saradominist II", "Museum - Saradominist II"],
  },
  {
    name: "Kantharos cup",
    level: 72,
    experience: 5133.3,
    mats: [
      {
        name: "Everlight silvthril",
        qty: 30,
      },
      {
        name: "Orthenglass",
        qty: 36,
      },
    ],
    collections: ["Saradominist II", "Museum - Saradominist II"],
  },
  {
    name: "Castle gatestone",
    level: 73,
    experience: 5366.7,
    mats: [
      {
        name: "Orgone",
        qty: 36,
      },
      {
        name: "Orthenglass",
        qty: 32,
      },
    ],
    collections: ["Dragonkin V", "Museum - Dragonkin V"],
  },
  {
    name: "Engraved ring of kinship",
    level: 73,
    experience: 5366.7,
    mats: [
      {
        name: "Goldrune",
        qty: 28,
      },
      {
        name: "Dragon metal",
        qty: 40,
      },
    ],
    collections: ["Dragonkin V", "Museum - Dragonkin V"],
  },
  {
    name: "Ceremonial mace",
    level: 74,
    experience: 5600,
    mats: [
      {
        name: "Imperial steel",
        qty: 20,
      },
      {
        name: "Third Age iron",
        qty: 20,
      },
      {
        name: "Goldrune",
        qty: 28,
      },
    ],
    collections: ["Hitty Fings", "Zarosian II", "Museum - Zarosian II"],
  },
  {
    name: "Consensus ad Idem painting",
    level: 74,
    experience: 5600,
    mats: [
      {
        name: "White oak",
        qty: 10,
      },
      {
        name: "Samite silk",
        qty: 10,
      },
      {
        name: "Tyrian purple",
        qty: 50,
      },
    ],
    collections: [
      "Imperial Impressionism",
      "Zarosian II",
      "Museum - Zarosian II",
    ],
  },
  {
    name: "Pontifex Maximus figurine",
    level: 74,
    experience: 5600,
    mats: [
      {
        name: "Zarosian insignia",
        qty: 24,
      },
      {
        name: "Ancient vis",
        qty: 16,
      },
      {
        name: "Goldrune",
        qty: 28,
      },
    ],
    collections: ["Showy Fings", "Zarosian II", "Museum - Zarosian II"],
  },
  {
    name: "Avian song-egg player",
    level: 76,
    experience: 6066.7,
    mats: [
      {
        name: "Stormguard steel",
        qty: 36,
      },
      {
        name: "Armadylean yellow",
        qty: 32,
      },
    ],
    collections: [
      "Armadylean I",
      "Museum - Armadylean I",
      "Wise Am the Music Man",
    ],
  },
  {
    name: "Keshik drum",
    level: 76,
    experience: 6066.7,
    mats: [
      {
        name: "Wings of War",
        qty: 16,
      },
      {
        name: "Animal furs",
        qty: 16,
      },
      {
        name: "White oak",
        qty: 20,
      },
      {
        name: "Leather scraps",
        qty: 16,
      },
    ],
    collections: [
      "Armadylean I",
      "Museum - Armadylean I",
      "Wise Am the Music Man",
    ],
  },
  {
    name: "Morin khuur",
    level: 76,
    experience: 6066.7,
    mats: [
      {
        name: "Armadylean yellow",
        qty: 36,
      },
      {
        name: "White oak",
        qty: 32,
      },
    ],
    collections: [
      "Armadylean I",
      "Museum - Armadylean I",
      "Wise Am the Music Man",
    ],
  },
  {
    name: "Ekeleshuun blinder mask",
    level: 76,
    experience: 6066.7,
    mats: [
      {
        name: "Vulcanised rubber",
        qty: 24,
      },
      {
        name: "Malachite green",
        qty: 20,
      },
      {
        name: "Vellum",
        qty: 24,
      },
    ],
    collections: [
      "Green Gobbo Goodies I",
      "Museum - Bandosian I",
      "Hat Problem",
    ],
  },
  {
    name: "Narogoshuun Hob-da-Gob ball",
    level: 76,
    experience: 6066.7,
    mats: [
      {
        name: "Vulcanised rubber",
        qty: 36,
      },
      {
        name: "Mark of the Kyzaj",
        qty: 32,
      },
    ],
    collections: ["Green Gobbo Goodies I", "Museum - Bandosian I"],
  },
  {
    name: "Rekeshuun war tether",
    level: 76,
    experience: 6066.7,
    mats: [
      {
        name: "Warforged bronze",
        qty: 20,
      },
      {
        name: "Vulcanised rubber",
        qty: 22,
      },
      {
        name: "Leather scraps",
        qty: 26,
      },
    ],
    collections: ["Green Gobbo Goodies I", "Museum - Bandosian I"],
  },
    {
    name: "Exploratory totem",
    level: 77,
    experience: 6300,
    mats: [
      {
        name: "Dragon metal",
        qty: 34,
      },
      {
        name: "Compass rose",
        qty: 36,
      },
    ],
    collections: ["Dragonkin V", "Museum - Dragonkin V"],
  },
  {
    name: "Excavator portal mine",
    level: 77,
    experience: 6300,
    mats: [
      {
        name: "Orgone",
        qty: 36,
      },
      {
        name: "Orthenglass",
        qty: 34,
      },
    ],
    collections: ["Dragonkin V", "Museum - Dragonkin V"],
  },
  {
    name: "Storage totem",
    level: 78,
    experience: 6533.3,
    mats: [
      {
        name: "Dragon metal",
        qty: 36,
      },
      {
        name: "Compass rose",
        qty: 34,
      },
    ],
    collections: ["Dragonkin VI", "Museum - Dragonkin VI"],
  },
    {
    name: "Plant seed satchel",
    level: 78,
    experience: 6533.3,
    mats: [
      {
        name: "Felt",
        qty: 28,
      },
      {
        name: "Carbon black",
        qty: 28,
      },
      {
        name: "Compass rose",
        qty: 14,
      },
    ],
    collections: ["Dragonkin VI", "Museum - Dragonkin VI"],
  },
  {
    name: "Snuff box",
    level: 78,
    experience: 6533.3,
    mats: [
      {
        name: "Soapstone",
        qty: 20,
      },
      {
        name: "Carbon black",
        qty: 30,
      },
      {
        name: "Felt",
        qty: 20,
      },
    ],
    collections: ["Dragonkin VI", "Museum - Dragonkin VI"],
  },
  {
    name: "Aviansie dreamcoat",
    level: 81,
    experience: 7388.9,
    mats: [
      {
        name: "Armadylean yellow",
        qty: 20,
      },
      {
        name: "Samite silk",
        qty: 30,
      },
      {
        name: "Animal furs",
        qty: 22,
      },
    ],
    collections: ["Armadylean I", "Museum - Armadylean I"],
  },
  {
    name: "Ceremonial plume",
    level: 81,
    experience: 7388.9,
    mats: [
      {
        name: "Armadylean yellow",
        qty: 38,
      },
      {
        name: "Goldrune",
        qty: 34,
      },
    ],
    collections: ["Showy Fings", "Armadylean I", "Museum - Armadylean I"],
  },
  {
    name: "Peacocking parasol",
    level: 81,
    experience: 7388.9,
    mats: [
      {
        name: "Armadylean yellow",
        qty: 22,
      },
      {
        name: "Samite silk",
        qty: 30,
      },
      {
        name: "White oak",
        qty: 20,
      },
    ],
    collections: ["Armadylean I", "Museum - Armadylean I"],
  },
  {
    name: "Ogre Kyzaj axe",
    level: 81,
    experience: 7388.9,
    mats: [
      {
        name: "Warforged bronze",
        qty: 28,
      },
      {
        name: "Mark of the Kyzaj",
        qty: 20,
      },
      {
        name: "Fossilised bone",
        qty: 24,
      },
    ],
    collections: ["Red Rum Relics I", "Museum - Bandosian I"],
  },
  {
    name: "Ork cleaver sword",
    level: 81,
    experience: 7388.9,
    mats: [
      {
        name: "Warforged bronze",
        qty: 36,
      },
      {
        name: "Fossilised bone",
        qty: 36,
      },
    ],
    collections: ["Red Rum Relics I", "Museum - Bandosian I"],
  },
  {
    name: "Larupia trophy",
    level: 81,
    experience: 7388.9,
    mats: [
      {
        name: "Cadmium red",
        qty: 18,
      },
      {
        name: "Animal furs",
        qty: 28,
      },
      {
        name: "Orthenglass",
        qty: 26,
      },
    ],
    collections: ["Zamorakian II", "Museum - Zamorakian II"],
  },
  {
    name: "Lion trophy",
    level: 81,
    experience: 7388.9,
    mats: [
      {
        name: "Cadmium red",
        qty: 18,
      },
      {
        name: "Animal furs",
        qty: 28,
      },
      {
        name: "White oak",
        qty: 26,
      },
    ],
    collections: ["Zamorakian II", "Museum - Zamorakian II"],
  },
  {
    name: "She-wolf trophy",
    level: 81,
    experience: 7388.9,
    mats: [
      {
        name: "Chaotic brimstone",
        qty: 26,
      },
      {
        name: "Cadmium red",
        qty: 18,
      },
      {
        name: "Animal furs",
        qty: 28,
      },
    ],
    collections: ["Zamorakian II", "Museum - Zamorakian II"],
  },
  {
    name: "Pontifex censer",
    level: 81,
    experience: 7388.9,
    mats: [
      {
        name: "Third Age iron",
        qty: 20,
      },
      {
        name: "Ancient vis",
        qty: 20,
      },
      {
        name: "Goldrune",
        qty: 32,
      },
    ],
    collections: ["Smoky Fings", "Zarosian II", "Museum - Zarosian II"],
  },
  {
    name: "Pontifex crozier",
    level: 81,
    experience: 7388.9,
    mats: [
      {
        name: "Imperial steel",
        qty: 20,
      },
      {
        name: "Zarosian insignia",
        qty: 20,
      },
      {
        name: "Goldrune",
        qty: 32,
      },
    ],
    collections: ["Hitty Fings", "Zarosian II", "Museum - Zarosian II"],
  },
  {
    name: "Pontifex mitre",
    level: 81,
    experience: 7388.9,
    mats: [
      {
        name: "Samite silk",
        qty: 32,
      },
      {
        name: "Ancient vis",
        qty: 20,
      },
      {
        name: "Zarosian insignia",
        qty: 20,
      },
    ],
    collections: ["Zarosian II", "Museum - Zarosian II", "Hat Hoarder"],
  },
  {
    name: "Thorobshuun battle standard",
    level: 83,
    experience: 8166.7,
    mats: [
      {
        name: "Mark of the Kyzaj",
        qty: 16,
      },
      {
        name: "Malachite green",
        qty: 22,
      },
      {
        name: "White oak",
        qty: 16,
      },
      {
        name: "Samite silk",
        qty: 20,
      },
    ],
    collections: ["Green Gobbo Goodies I", "Museum - Bandosian I"],
  },
  {
    name: "Yurkolgokh stink grenade",
    level: 83,
    experience: 8166.7,
    mats: [
      {
        name: "Yu'biusk clay",
        qty: 38,
      },
      {
        name: "Vulcanised rubber",
        qty: 36,
      },
    ],
    collections: ["Green Gobbo Goodies I", "Museum - Bandosian I"],
  },
  {
    name: "Dominarian device",
    level: 84,
    experience: 8555.6,
    mats: [
      {
        name: "Everlight silvthril",
        qty: 30,
      },
      {
        name: "Keramos",
        qty: 22,
      },
      {
        name: "Third Age iron",
        qty: 22,
      },
    ],
    collections: ["Saradominist III", "Museum - Saradominist III"],
  },
  {
    name: "Fishing trident",
    level: 84,
    experience: 8555.6,
    mats: [
      {
        name: "Star of Saradomin",
        qty: 22,
      },
      {
        name: "Third Age iron",
        qty: 30,
      },
      {
        name: "Goldrune",
        qty: 22,
      },
    ],
    collections: [
      "Hitty Fings",
      "Saradominist III",
      "Museum - Saradominist III",
    ],
  },
  {
    name: "Hawkeye lens multi-vision scope",
    level: 85,
    experience: 8944.4,
    mats: [
      {
        name: "Stormguard steel",
        qty: 40,
      },
      {
        name: "Orthenglass",
        qty: 34,
      },
    ],
    collections: ["Armadylean II", "Museum - Armadylean II"],
  },
  {
    name: "Talon-3 razor wing",
    level: 85,
    experience: 8944.4,
    mats: [
      {
        name: "Aetherium alloy",
        qty: 40,
      },
      {
        name: "Wings of War",
        qty: 34,
      },
    ],
    collections: ["Armadylean II", "Museum - Armadylean II"],
  },
  {
    name: "Necromantic focus",
    level: 86,
    experience: 9333.3,
    mats: [
      {
        name: "Imperial steel",
        qty: 20,
      },
      {
        name: "Blood of Orcus",
        qty: 26,
      },
      {
        name: "Ancient vis",
        qty: 30,
      },
    ],
    collections: [
      "Zarosian III",
      "Museum - Zarosian III",
      "Knowledge is Power",
      "Imperial Sorcery",
    ],
  },
  {
    name: "Exsanguinate spell scroll",
    level: 86,
    experience: 9333.3,
    mats: [
      {
        name: "Vellum",
        qty: 40,
      },
      {
        name: "Blood of Orcus",
        qty: 36,
      },
    ],
    collections: [
      "Zarosian III",
      "Museum - Zarosian III",
      "Magic Man",
      "Imperial Sorcery",
    ],
  },
  {
    name: "Spent summoning charm",
    level: 87,
    experience: 9722.2,
    mats: [
      {
        name: "Orgone",
        qty: 46,
      },
      {
        name: "Felt",
        qty: 30,
      },
    ],
    collections: ["Dragonkin VI", "Museum - Dragonkin VI"],
  },
  {
    name: "High priest crozier",
    level: 89,
    experience: 10500,
    mats: [
      {
        name: "Mark of the Kyzaj",
        qty: 26,
      },
      {
        name: "Malachite green",
        qty: 24,
      },
      {
        name: "Goldrune",
        qty: 28,
      },
    ],
    collections: [
      "Hitty Fings",
      "Green Gobbo Goodies II",
      "Museum - Bandosian I",
    ],
  },
  {
    name: "High priest mitre",
    level: 89,
    experience: 10500,
    mats: [
      {
        name: "Mark of the Kyzaj",
        qty: 26,
      },
      {
        name: "Malachite green",
        qty: 24,
      },
      {
        name: "Samite silk",
        qty: 28,
      },
    ],
    collections: [
      "Green Gobbo Goodies II",
      "Museum - Bandosian I",
      "Hat Problem",
      "Magic Man",
    ],
  },
  {
    name: "High priest orb",
    level: 89,
    experience: 10500,
    mats: [
      {
        name: "Mark of the Kyzaj",
        qty: 26,
      },
      {
        name: "Malachite green",
        qty: 24,
      },
      {
        name: "Goldrune",
        qty: 28,
      },
    ],
    collections: [
      "Hitty Fings",
      "Green Gobbo Goodies II",
      "Museum - Bandosian I",
    ],
  },
  {
    name: "Pandemonium tapestry",
    level: 89,
    experience: 10500,
    mats: [
      {
        name: "White oak",
        qty: 12,
      },
      {
        name: "Samite silk",
        qty: 12,
      },
      {
        name: "Vellum",
        qty: 12,
      },
      {
        name: "Cadmium red",
        qty: 42,
      },
    ],
    collections: [
      "Anarchic Abstraction",
      "Zamorakian III",
      "Museum - Zamorakian III",
    ],
  },
  {
    name: "Torment metal sculpture",
    level: 89,
    experience: 10500,
    mats: [
      {
        name: "Eye of Dagon",
        qty: 20,
      },
      {
        name: "Third Age iron",
        qty: 20,
      },
      {
        name: "Hellfire metal",
        qty: 38,
      },
    ],
    collections: ["Zamorakian III", "Museum - Zamorakian III"],
  },
  {
    name: "Ceremonial dragonkin tablet",
    level: 90,
    experience: 10888.9,
    mats: [
      {
        name: "Orthenglass",
        qty: 79,
      },
    ],
    collections: ["Desperate for Artefacts"],
  },
  {
    name: "Pasaha",
    level: 90,
    experience: 10888.9,
    mats: [
      {
        name: "Felt",
        qty: 40,
      },
      {
        name: "Goldrune",
        qty: 38,
      },
    ],
    collections: ["Dragonkin I", "Museum - Dragonkin I"],
  },
  {
    name: "Ritual bell",
    level: 90,
    experience: 10888.9,
    mats: [
      {
        name: "Goldrune",
        qty: 40,
      },
      {
        name: "Compass rose",
        qty: 38,
      },
    ],
    collections: ["Dragonkin I", "Museum - Dragonkin I"],
  },
  {
    name: "Prototype gravimeter",
    level: 91,
    experience: 11277.8,
    mats: [
      {
        name: "Quintessence",
        qty: 34,
      },
      {
        name: "Leather scraps",
        qty: 20,
      },
      {
        name: "Third Age iron",
        qty: 26,
      },
    ],
    collections: ["Armadylean II", "Museum - Armadylean II"],
  },
  {
    name: "Songbird recorder",
    level: 91,
    experience: 11277.8,
    mats: [
      {
        name: "Stormguard steel",
        qty: 44,
      },
      {
        name: "Orthenglass",
        qty: 36,
      },
    ],
    collections: [
      "Armadylean II",
      "Museum - Armadylean II",
      "Wise Am the Music Man",
    ],
  },
  {
    name: "Amphora",
    level: 92,
    experience: 11666.7,
    mats: [
      {
        name: "Everlight silvthril",
        qty: 34,
      },
      {
        name: "Keramos",
        qty: 46,
      },
    ],
    collections: ["Saradominist III", "Museum - Saradominist III"],
  },
  {
    name: "Rod of Asclepius",
    level: 92,
    experience: 11666.7,
    mats: [
      {
        name: "White marble",
        qty: 30,
      },
      {
        name: "Star of Saradomin",
        qty: 24,
      },
      {
        name: "Goldrune",
        qty: 26,
      },
    ],
    collections: [
      "Showy Fings",
      "Saradominist III",
      "Museum - Saradominist III",
    ],
  },
  {
    name: "Zarosian ewer",
    level: 93,
    experience: 12500,
    mats: [
      {
        name: "Third Age iron",
        qty: 52,
      },
      {
        name: "Zarosian insignia",
        qty: 30,
      },
    ],
    collections: ["Zarosian III", "Museum - Zarosian III"],
  },
  {
    name: "Zarosian stein",
    level: 93,
    experience: 12500,
    mats: [
      {
        name: "Third Age iron",
        qty: 16,
      },
      {
        name: "Imperial steel",
        qty: 36,
      },
      {
        name: "Zarosian insignia",
        qty: 30,
      },
    ],
    collections: ["Zarosian III", "Museum - Zarosian III"],
  },
  {
    name: "Beastkeeper helm",
    level: 94,
    experience: 13333.3,
    mats: [
      {
        name: "Warforged bronze",
        qty: 16,
      },
      {
        name: "Vulcanised rubber",
        qty: 24,
      },
      {
        name: "Animal furs",
        qty: 20,
      },
      {
        name: "Fossilised bone",
        qty: 24,
      },
    ],
    collections: ["Red Rum Relics I", "Museum - Bandosian II", "Hat Problem"],
  },
  {
    name: "Idithuun horn ring",
    level: 94,
    experience: 13333.3,
    mats: [
      {
        name: "Yu'biusk clay",
        qty: 40,
      },
      {
        name: "Vulcanised rubber",
        qty: 44,
      },
    ],
    collections: ["Green Gobbo Goodies II", "Museum - Bandosian II"],
  },
  {
    name: "Nosorog! sculpture",
    level: 94,
    experience: 13333.3,
    mats: [
      {
        name: "Yu'biusk clay",
        qty: 30,
      },
      {
        name: "Malachite green",
        qty: 24,
      },
      {
        name: "Warforged bronze",
        qty: 30,
      },
    ],
    collections: ["Red Rum Relics I", "Museum - Bandosian II"],
  },
  {
    name: "Stormguard gerege",
    level: 95,
    experience: 14166.7,
    mats: [
      {
        name: "Stormguard steel",
        qty: 36,
      },
      {
        name: "Wings of War",
        qty: 28,
      },
      {
        name: "Goldrune",
        qty: 20,
      },
    ],
    collections: ["Armadylean II", "Museum - Armadylean II"],
  },
  {
    name: "Dayguard shield",
    level: 95,
    experience: 14166.7,
    mats: [
      {
        name: "Stormguard steel",
        qty: 36,
      },
      {
        name: "Wings of War",
        qty: 28,
      },
      {
        name: "White oak",
        qty: 20,
      },
    ],
    collections: ["Armadylean II", "Museum - Armadylean II"],
  },
  {
    name: "Kilaya",
    level: 96,
    experience: 15000,
    mats: [
      {
        name: "Dragon metal",
        qty: 46,
      },
      {
        name: "Compass rose",
        qty: 40,
      },
    ],
    collections: ["Dragonkin I", "Museum - Dragonkin I"],
  },
  {
    name: "Vazara",
    level: 96,
    experience: 15000,
    mats: [
      {
        name: "Dragon metal",
        qty: 30,
      },
      {
        name: "Compass rose",
        qty: 28,
      },
      {
        name: "Goldrune",
        qty: 28,
      },
    ],
    collections: ["Dragonkin I", "Museum - Dragonkin I"],
  },
  {
    name: "Garagorshuun anchor",
    level: 97,
    experience: 15833.3,
    mats: [
      {
        name: "Warforged bronze",
        qty: 32,
      },
      {
        name: "Mark of the Kyzaj",
        qty: 26,
      },
      {
        name: "Third Age iron",
        qty: 30,
      },
    ],
    collections: ["Green Gobbo Goodies II", "Museum - Bandosian II"],
  },
  {
    name: "Ourg megahitter",
    level: 97,
    experience: 15833.3,
    mats: [
      {
        name: "White oak",
        qty: 20,
      },
      {
        name: "Leather scraps",
        qty: 20,
      },
      {
        name: "Orthenglass",
        qty: 26,
      },
      {
        name: "Malachite green",
        qty: 22,
      },
    ],
    collections: ["Red Rum Relics II", "Museum - Bandosian II"],
  },
  {
    name: "Ourg tower/goblin cower shield",
    level: 97,
    experience: 15833.3,
    mats: [
      {
        name: "Mark of the Kyzaj",
        qty: 20,
      },
      {
        name: "Third Age iron",
        qty: 26,
      },
      {
        name: "Leather scraps",
        qty: 22,
      },
      {
        name: "White oak",
        qty: 20,
      },
    ],
    collections: ["Museum - Bandosian II", "Red Rum Relics II"],
  },
  {
    name: "Golem heart",
    level: 98,
    experience: 16666.7,
    mats: [
      {
        name: "Aetherium alloy",
        qty: 34,
      },
      {
        name: "Quintessence",
        qty: 24,
      },
      {
        name: "Orthenglass",
        qty: 16,
      },
      {
        name: "Soapstone",
        qty: 16,
      },
    ],
    collections: ["Armadylean II", "Museum - Armadylean II"],
  },
  {
    name: "Golem instruction",
    level: 98,
    experience: 16666.7,
    mats: [
      {
        name: "Quintessence",
        qty: 46,
      },
      {
        name: "Vellum",
        qty: 44,
      },
    ],
    collections: [
      "Armadylean II",
      "Knowledge is Power",
      "Museum - Armadylean II",
    ],
  },
  {
    name: "Hellfire haladie",
    level: 98,
    experience: 16666.7,
    mats: [
      {
        name: "Hellfire metal",
        qty: 44,
      },
      {
        name: "Third Age iron",
        qty: 26,
      },
      {
        name: "Leather scraps",
        qty: 20,
      },
    ],
    collections: ["Museum - Zamorakian III", "Zamorakian III"],
  },
  {
    name: "Hellfire katar",
    level: 98,
    experience: 16666.7,
    mats: [
      {
        name: "Hellfire metal",
        qty: 50,
      },
      {
        name: "Leather scraps",
        qty: 40,
      },
    ],
    collections: ["Museum - Zamorakian III", "Zamorakian III"],
  },
  {
    name: "Hellfire zaghnal",
    level: 98,
    experience: 16666.7,
    mats: [
      {
        name: "Hellfire metal",
        qty: 38,
      },
      {
        name: "White oak",
        qty: 26,
      },
      {
        name: "Orthenglass",
        qty: 26,
      },
    ],
    collections: ["Museum - Zamorakian III", "Zamorakian III"],
  },
  {
    name: "Death mask",
    level: 99,
    experience: 17500,
    mats: [
      {
        name: "Orgone",
        qty: 56,
      },
      {
        name: "Soapstone",
        qty: 34,
      },
    ],
    collections: ["Dragonkin I", "Museum - Dragonkin I"],
  },
  {
    name: "Dragonkin calendar",
    level: 99,
    experience: 17500,
    mats: [
      {
        name: "Orgone",
        qty: 34,
      },
      {
        name: "Carbon black",
        qty: 28,
      },
      {
        name: "Compass rose",
        qty: 28,
      },
    ],
    collections: ["Dragonkin I", "Museum - Dragonkin I"],
  },
  {
    name: "Dragonkin staff",
    level: 99,
    experience: 17500,
    mats: [
      {
        name: "Orgone",
        qty: 56,
      },
      {
        name: "Compass rose",
        qty: 34,
      },
    ],
    collections: ["Dragonkin I", "Museum - Dragonkin I"],
  },
  {
    name: "Dorgeshuun spear",
    level: 100,
    experience: 18666.7,
    mats: [
      {
        name: "Warforged bronze",
        qty: 50,
      },
      {
        name: "White oak",
        qty: 42,
      },
    ],
    collections: ["Museum - Bandosian II", "Green Gobbo Goodies III"],
  },
  {
    name: "Forged in War sculpture",
    level: 100,
    experience: 18666.7,
    mats: [
      {
        name: "Warforged bronze",
        qty: 50,
      },
      {
        name: "Yu'biusk clay",
        qty: 42,
      },
    ],
    collections: ["Museum - Bandosian II", "Red Rum Relics II"],
  },
  {
    name: "Kopis dagger",
    level: 100,
    experience: 18666.7,
    mats: [
      {
        name: "Everlight silvthril",
        qty: 50,
      },
      {
        name: "Leather scraps",
        qty: 42,
      },
    ],
    collections: ["Museum - Saradominist III", "Saradominist III"],
  },
  {
    name: "Xiphos short sword",
    level: 100,
    experience: 18666.7,
    mats: [
      {
        name: "Everlight silvthril",
        qty: 46,
      },
      {
        name: "Leather scraps",
        qty: 46,
      },
    ],
    collections: ["Museum - Saradominist III", "Saradominist III"],
  },
  {
    name: "Smoke Cloud spell scroll",
    level: 100,
    experience: 18666.7,
    mats: [
      {
        name: "Vellum",
        qty: 40,
      },
      {
        name: "Ancient vis",
        qty: 20,
      },
      {
        name: "Blood of Orcus",
        qty: 32,
      },
    ],
    collections: [
      "Magic Man",
      "Museum - Zarosian III",
      "Zarosian III",
      "Imperial Sorcery",
    ],
  },
  {
    name: "Vigorem vial",
    level: 100,
    experience: 18666.7,
    mats: [
      {
        name: "Imperial steel",
        qty: 54,
      },
      {
        name: "Ancient vis",
        qty: 38,
      },
    ],
    collections: ["Museum - Zarosian III", "Zarosian III"],
  },
  {
    name: "Dragon scalpel",
    level: 101,
    experience: 19833.3,
    mats: [
      {
        name: "Dragon metal",
        qty: 52,
      },
      {
        name: "Felt",
        qty: 42,
      },
    ],
    collections: ["Dragonkin II", "Museum - Dragonkin II"],
  },
  {
    name: "Protective goggles",
    level: 101,
    experience: 19833.3,
    mats: [
      {
        name: "Felt",
        qty: 42,
      },
      {
        name: "Orthenglass",
        qty: 52,
      },
    ],
    collections: ["Dragonkin II", "Museum - Dragonkin II"],
  },
  {
    name: "Dragon burner",
    level: 102,
    experience: 21000,
    mats: [
      {
        name: "Dragon metal",
        qty: 52,
      },
      {
        name: "Orgone",
        qty: 42,
      },
    ],
    collections: ["Dragonkin II", "Museum - Dragonkin II"],
  },
  {
    name: "Orthenglass flask",
    level: 102,
    experience: 21000,
    mats: [
      {
        name: "Dragon metal",
        qty: 34,
      },
      {
        name: "Orthenglass",
        qty: 60,
      },
    ],
    collections: ["Dragonkin II", "Museum - Dragonkin II"],
  },
  {
    name: "Blackfire lance",
    level: 103,
    experience: 22166.7,
    mats: [
      {
        name: "Aetherium alloy",
        qty: 50,
      },
      {
        name: "Quintessence",
        qty: 46,
      },
    ],
    collections: ["Armadylean III", "Museum - Armadylean III"],
  },
  {
    name: "Nightguard shield",
    level: 103,
    experience: 22166.7,
    mats: [
      {
        name: "Stormguard steel",
        qty: 30,
      },
      {
        name: "Wings of War",
        qty: 36,
      },
      {
        name: "White oak",
        qty: 30,
      },
    ],
    collections: ["Armadylean III", "Museum - Armadylean III"],
  },
  {
    name: "Huzamogaarb chaos crown",
    level: 104,
    experience: 23333.3,
    mats: [
      {
        name: "Warforged bronze",
        qty: 44,
      },
      {
        name: "Third Age iron",
        qty: 34,
      },
      {
        name: "Eye of Dagon",
        qty: 20,
      },
    ],
    collections: [
      "Green Gobbo Goodies III",
      "Hat Problem",
      "Museum - Bandosian III",
    ],
  },
  {
    name: "Saragorgak star crown",
    level: 104,
    experience: 23333.3,
    mats: [
      {
        name: "Warforged bronze",
        qty: 44,
      },
      {
        name: "Third Age iron",
        qty: 34,
      },
      {
        name: "Star of Saradomin",
        qty: 20,
      },
    ],
    collections: [
      "Green Gobbo Goodies III",
      "Hat Hoarder",
      "Museum - Bandosian III",
    ],
  },
  {
    name: "Possession metal sculpture",
    level: 104,
    experience: 23333.3,
    mats: [
      {
        name: "Eye of Dagon",
        qty: 24,
      },
      {
        name: "Chaotic brimstone",
        qty: 30,
      },
      {
        name: "Third Age iron",
        qty: 44,
      },
    ],
    collections: ["Museum - Zamorakian III", "Zamorakian III"],
  },
  {
    name: "Trishula",
    level: 104,
    experience: 23333.3,
    mats: [
      {
        name: "Hellfire metal",
        qty: 48,
      },
      {
        name: "Eye of Dagon",
        qty: 30,
      },
      {
        name: "Third Age iron",
        qty: 20,
      },
    ],
    collections: ["Museum - Zamorakian III", "Zamorakian III"],
  },
  {
    name: "Tsutsaroth piercing",
    level: 104,
    experience: 23333.3,
    mats: [
      {
        name: "Hellfire metal",
        qty: 44,
      },
      {
        name: "Chaotic brimstone",
        qty: 30,
      },
      {
        name: "Cadmium red",
        qty: 24,
      },
    ],
    collections: ["Museum - Zamorakian III", "Zamorakian III"],
  },
  {
    name: "The Pride of Padosan painting",
    level: 105,
    experience: 24500,
    mats: [
      {
        name: "Cobalt blue",
        qty: 52,
      },
      {
        name: "White oak",
        qty: 16,
      },
      {
        name: "Samite silk",
        qty: 16,
      },
      {
        name: "Vellum",
        qty: 16,
      },
    ],
    collections: [
      "Museum - Saradominist IV",
      "Radiant Renaissance",
      "Saradominist IV",
    ],
  },
  {
    name: "Hallowed Be the Everlight painting",
    level: 105,
    experience: 24500,
    mats: [
      {
        name: "Cobalt blue",
        qty: 52,
      },
      {
        name: "White oak",
        qty: 16,
      },
      {
        name: "Samite silk",
        qty: 16,
      },
      {
        name: "Vellum",
        qty: 16,
      },
    ],
    collections: [
      "Museum - Saradominist IV",
      "Radiant Renaissance",
      "Saradominist IV",
    ],
  },
  {
    name: "The Lord of Light painting",
    level: 105,
    experience: 24500,
    mats: [
      {
        name: "Cobalt blue",
        qty: 52,
      },
      {
        name: "White oak",
        qty: 16,
      },
      {
        name: "Samite silk",
        qty: 16,
      },
      {
        name: "Vellum",
        qty: 16,
      },
    ],
    collections: [
      "Museum - Saradominist IV",
      "Radiant Renaissance",
      "Saradominist IV",
    ],
  },
  {
    name: "Meditation pipe",
    level: 106,
    experience: 25666.7,
    mats: [
      {
        name: "Orgone",
        qty: 60,
      },
      {
        name: "Dragon metal",
        qty: 40,
      },
    ],
    collections: ["Dragonkin III", "Museum - Dragonkin III"],
  },
  {
    name: "Personal totem",
    level: 106,
    experience: 25666.7,
    mats: [
      {
        name: "Orgone",
        qty: 48,
      },
      {
        name: "Carbon black",
        qty: 26,
      },
      {
        name: "Compass rose",
        qty: 26,
      },
    ],
    collections: ["Dragonkin III", "Museum - Dragonkin III"],
  },
  {
    name: "Singing bowl",
    level: 106,
    experience: 25666.7,
    mats: [
      {
        name: "Orgone",
        qty: 60,
      },
      {
        name: "Dragon metal",
        qty: 40,
      },
    ],
    collections: ["Dragonkin III", "Museum - Dragonkin III"],
  },
  {
    name: "Ancient magic tablet",
    level: 107,
    experience: 27000,
    mats: [
      {
        name: "Ancient vis",
        qty: 40,
      },
      {
        name: "Blood of Orcus",
        qty: 64,
      },
    ],
    collections: ["Museum - Zarosian III", "Zarosian III", "Imperial Sorcery"],
  },
  {
    name: "Portable phylactery",
    level: 107,
    experience: 27000,
    mats: [
      {
        name: "Imperial steel",
        qty: 48,
      },
      {
        name: "Blood of Orcus",
        qty: 36,
      },
      {
        name: "Ancient vis",
        qty: 20,
      },
    ],
    collections: ["Magic Man", "Museum - Zarosian III", "Zarosian III"],
  },
  {
    name: "Animate Dead spell scroll",
    level: 107,
    experience: 27000,
    mats: [
      {
        name: "Vellum",
        qty: 40,
      },
      {
        name: "Ancient vis",
        qty: 24,
      },
      {
        name: "Blood of Orcus",
        qty: 40,
      },
    ],
    collections: [
      "Magic Man",
      "Museum - Zarosian III",
      "Zarosian III",
      "Imperial Sorcery",
    ],
  },
  {
    name: "Lingam stone",
    level: 108,
    experience: 28333.3,
    mats: [
      {
        name: "Orgone",
        qty: 44,
      },
      {
        name: "Carbon black",
        qty: 30,
      },
      {
        name: "Compass rose",
        qty: 32,
      },
    ],
    collections: ["Dragonkin III", "Museum - Dragonkin III"],
  },
  {
    name: "Master control",
    level: 108,
    experience: 28333.3,
    mats: [
      {
        name: "Orgone",
        qty: 30,
      },
      {
        name: "Carbon black",
        qty: 32,
      },
      {
        name: "Compass rose",
        qty: 44,
      },
    ],
    collections: ["Dragonkin III", "Museum - Dragonkin III"],
  },
  {
    name: "The Enlightened Soul scroll",
    level: 109,
    experience: 29666.7,
    mats: [
      {
        name: "Star of Saradomin",
        qty: 50,
      },
      {
        name: "Vellum",
        qty: 60,
      },
    ],
    collections: [
      "Knowledge is Power",
      "Museum - Saradominist IV",
      "Saradominist IV",
    ],
  },
  {
    name: "The Eudoxian Elements tablet",
    level: 109,
    experience: 29666.7,
    mats: [
      {
        name: "White marble",
        qty: 60,
      },
      {
        name: "Goldrune",
        qty: 50,
      },
    ],
    collections: [
      "Knowledge is Power",
      "Museum - Saradominist IV",
      "Saradominist IV",
    ],
  },
  {
    name: "Drogokishuun hook sword",
    level: 110,
    experience: 31000,
    mats: [
      {
        name: "Warforged bronze",
        qty: 44,
      },
      {
        name: "Malachite green",
        qty: 36,
      },
      {
        name: "Fossilised bone",
        qty: 32,
      },
    ],
    collections: ["Green Gobbo Goodies III", "Museum - Bandosian III"],
  },
  {
    name: "Hobgoblin mansticker",
    level: 110,
    experience: 31000,
    mats: [
      {
        name: "Warforged bronze",
        qty: 66,
      },
      {
        name: "Fossilised bone",
        qty: 46,
      },
    ],
    collections: ["Museum - Bandosian III", "Red Rum Relics II"],
  },
  {
    name: "Chaos Elemental trophy",
    level: 110,
    experience: 31000,
    mats: [
      {
        name: "Chaotic brimstone",
        qty: 52,
      },
      {
        name: "White oak",
        qty: 30,
      },
      {
        name: "Hellfire metal",
        qty: 30,
      },
    ],
    collections: ["Museum - Zamorakian IV", "Zamorakian IV"],
  },
  {
    name: "Virius trophy",
    level: 110,
    experience: 31000,
    mats: [
      {
        name: "Demonhide",
        qty: 44,
      },
      {
        name: "White oak",
        qty: 34,
      },
      {
        name: "Orthenglass",
        qty: 34,
      },
    ],
    collections: ["Museum - Zamorakian IV", "Zamorakian IV"],
  },
  {
    name: "Flat cap",
    level: 111,
    experience: 32333.3,
    mats: [
      {
        name: "Armadylean yellow",
        qty: 60,
      },
      {
        name: "Samite silk",
        qty: 54,
      },
    ],
    collections: ["Armadylean III", "Hat Problem", "Museum - Armadylean III"],
  },
  {
    name: "Night owl flight goggles",
    level: 111,
    experience: 32333.3,
    mats: [
      {
        name: "Armadylean yellow",
        qty: 44,
      },
      {
        name: "Leather scraps",
        qty: 40,
      },
      {
        name: "Orthenglass",
        qty: 30,
      },
    ],
    collections: ["Armadylean III", "Museum - Armadylean III"],
  },
  {
    name: "Prototype godbow",
    level: 112,
    experience: 33666.7,
    mats: [
      {
        name: "Aetherium alloy",
        qty: 50,
      },
      {
        name: "Quintessence",
        qty: 34,
      },
      {
        name: "Wings of War",
        qty: 34,
      },
    ],
    collections: ["Armadylean III", "Museum - Armadylean III"],
  },
  {
    name: "Prototype godstaff",
    level: 112,
    experience: 33666.7,
    mats: [
      {
        name: "Aetherium alloy",
        qty: 50,
      },
      {
        name: "Quintessence",
        qty: 34,
      },
      {
        name: "Wings of War",
        qty: 34,
      },
    ],
    collections: ["Armadylean III", "Museum - Armadylean III"],
  },
  {
    name: "Prototype godsword",
    level: 112,
    experience: 33666.7,
    mats: [
      {
        name: "Aetherium alloy",
        qty: 50,
      },
      {
        name: "Wings of War",
        qty: 34,
      },
      {
        name: "Goldrune",
        qty: 34,
      },
    ],
    collections: ["Armadylean III", "Museum - Armadylean III"],
  },
  {
    name: "Xolo hard hat",
    level: 113,
    experience: 35000,
    mats: [
      {
        name: "Goldrune",
        qty: 54,
      },
      {
        name: "Dragon metal",
        qty: 66,
      },
    ],
    collections: ["Dragonkin IV", "Museum - Dragonkin IV"],
  },
  {
    name: "Xolo pickaxe",
    level: 113,
    experience: 35000,
    mats: [
      {
        name: "Goldrune",
        qty: 36,
      },
      {
        name: "Dragon metal",
        qty: 50,
      },
      {
        name: "Orgone",
        qty: 34,
      },
    ],
    collections: ["Dragonkin IV", "Museum - Dragonkin IV"],
  },
  {
    name: "Praetorian hood",
    level: 114,
    experience: 36666.7,
    mats: [
      {
        name: "Ancient vis",
        qty: 36,
      },
      {
        name: "Samite silk",
        qty: 48,
      },
      {
        name: "Zarosian insignia",
        qty: 40,
      },
      {
        name: "Death rune",
        qty: 30,
      },
    ],
    collections: ["Hat Problem", "Museum - Zarosian IV", "Zarosian IV"],
  },
  {
    name: "Praetorian robes",
    level: 114,
    experience: 36666.7,
    mats: [
      {
        name: "Ancient vis",
        qty: 30,
      },
      {
        name: "Samite silk",
        qty: 54,
      },
      {
        name: "Zarosian insignia",
        qty: 40,
      },
      {
        name: "Death rune",
        qty: 50,
      },
    ],
    collections: ["Museum - Zarosian IV", "Zarosian IV"],
  },
  {
    name: "Praetorian staff",
    level: 114,
    experience: 36666.7,
    mats: [
      {
        name: "Imperial steel",
        qty: 36,
      },
      {
        name: "Ancient vis",
        qty: 58,
      },
      {
        name: "Zarosian insignia",
        qty: 30,
      },
      {
        name: "Death rune",
        qty: 100,
      },
    ],
    collections: ["Museum - Zarosian IV", "Zarosian IV"],
  },
  {
    name: "Kal-i-kra chieftain crown",
    level: 115,
    experience: 38333.3,
    mats: [
      {
        name: "Yu'biusk clay",
        qty: 66,
      },
      {
        name: "Animal furs",
        qty: 60,
      },
    ],
    collections: [
      "Hat Hoarder",
      "Museum - Bandosian III",
      "Red Rum Relics III",
    ],
  },
  {
    name: "Kal-i-kra mace",
    level: 115,
    experience: 38333.3,
    mats: [
      {
        name: "Vulcanised rubber",
        qty: 42,
      },
      {
        name: "Third Age iron",
        qty: 44,
      },
      {
        name: "Fossilised bone",
        qty: 40,
      },
    ],
    collections: ["Museum - Bandosian III", "Red Rum Relics III"],
  },
  {
    name: "Kal-i-kra warhorn",
    level: 115,
    experience: 38333.3,
    mats: [
      {
        name: "Vulcanised rubber",
        qty: 44,
      },
      {
        name: "Fossilised bone",
        qty: 42,
      },
      {
        name: "Animal furs",
        qty: 40,
      },
    ],
    collections: ["Museum - Bandosian III", "Red Rum Relics III"],
  },
  {
    name: "Spear of Annihilation",
    level: 115,
    experience: 38333.3,
    mats: [
      {
        name: "Vulcanised rubber",
        qty: 500,
      },
      {
        name: "Malachite green",
        qty: 500,
      },
      {
        name: "Goldrune",
        qty: 500,
      },
    ],
    collections: ["Other"],
  },
  {
    name: "Tsutsaroth helm",
    level: 116,
    experience: 40000,
    mats: [
      {
        name: "Hellfire metal",
        qty: 50,
      },
      {
        name: "Eye of Dagon",
        qty: 40,
      },
      {
        name: "Goldrune",
        qty: 40,
      },
    ],
    collections: ["Hat Hoarder", "Museum - Zamorakian IV", "Zamorakian IV"],
  },
  {
    name: "Tsutsaroth pauldron",
    level: 116,
    experience: 40000,
    mats: [
      {
        name: "Hellfire metal",
        qty: 40,
      },
      {
        name: "Goldrune",
        qty: 50,
      },
      {
        name: "Eye of Dagon",
        qty: 40,
      },
    ],
    collections: ["Museum - Zamorakian IV", "Zamorakian IV"],
  },
  {
    name: "Tsutsaroth urumi",
    level: 116,
    experience: 40000,
    mats: [
      {
        name: "Hellfire metal",
        qty: 50,
      },
      {
        name: "Eye of Dagon",
        qty: 40,
      },
      {
        name: "Third Age iron",
        qty: 40,
      },
    ],
    collections: ["Museum - Zamorakian IV", "Zamorakian IV"],
  },
  {
    name: "Kontos lance",
    level: 117,
    experience: 41666.7,
    mats: [
      {
        name: "Everlight silvthril",
        qty: 70,
      },
      {
        name: "Samite silk",
        qty: 62,
      },
    ],
    collections: ["Museum - Saradominist IV", "Saradominist IV"],
  },
  {
    name: "Doru spear",
    level: 117,
    experience: 41666.7,
    mats: [
      {
        name: "Everlight silvthril",
        qty: 70,
      },
      {
        name: "White oak",
        qty: 62,
      },
    ],
    collections: ["Museum - Saradominist IV", "Saradominist IV"],
  },
  {
    name: "Chuluu stone",
    level: 118,
    experience: 43333.3,
    mats: [
      {
        name: "Aetherium alloy",
        qty: 40,
      },
      {
        name: "Quintessence",
        qty: 30,
      },
      {
        name: "Soapstone",
        qty: 40,
      },
      {
        name: "Goldrune",
        qty: 24,
      },
    ],
    collections: ["Armadylean III", "Magic Man", "Museum - Armadylean III"],
  },
  {
    name: "Quintessence counter",
    level: 118,
    experience: 43333.3,
    mats: [
      {
        name: "Quintessence",
        qty: 54,
      },
      {
        name: "Stormguard steel",
        qty: 40,
      },
      {
        name: "White oak",
        qty: 40,
      },
    ],
    collections: ["Armadylean III", "Museum - Armadylean III"],
  },
  {
    name: "Spherical astrolabe",
    level: 118,
    experience: 43333.3,
    mats: [
      {
        name: "Aetherium alloy",
        qty: 46,
      },
      {
        name: "Armadylean yellow",
        qty: 40,
      },
      {
        name: "Orthenglass",
        qty: 48,
      },
    ],
    collections: ["Armadylean III", "Museum - Armadylean III"],
  },
  {
    name: "Ancient globe",
    level: 118,
    experience: 43333.3,
    mats: [
      {
        name: "White oak",
        qty: 20,
      },
      {
        name: "Tyrian purple",
        qty: 54,
      },
      {
        name: "Ancient vis",
        qty: 60,
      },
    ],
    collections: ["Museum - Zarosian IV", "Zarosian IV"],
  },
  {
    name: "Battle plans",
    level: 118,
    experience: 43333.3,
    mats: [
      {
        name: "Vellum",
        qty: 40,
      },
      {
        name: "Tyrian purple",
        qty: 60,
      },
      {
        name: "Ancient vis",
        qty: 34,
      },
    ],
    collections: ["Museum - Zarosian IV", "Zarosian IV"],
  },
  {
    name: "Prima Legio painting",
    level: 118,
    experience: 43333.3,
    mats: [
      {
        name: "White oak",
        qty: 20,
      },
      {
        name: "Samite silk",
        qty: 20,
      },
      {
        name: "Tyrian purple",
        qty: 74,
      },
      {
        name: "Zarosian insignia",
        qty: 20,
      },
    ],
    collections: [
      "Imperial Impressionism",
      "Museum - Zarosian IV",
      "Zarosian IV",
    ],
  },
  {
    name: "Horogothgar cooking pot",
    level: 119,
    experience: 45000,
    mats: [
      {
        name: "Yu'biusk clay",
        qty: 60,
      },
      {
        name: "Malachite green",
        qty: 38,
      },
      {
        name: "Soapstone",
        qty: 40,
      },
    ],
    collections: ["Green Gobbo Goodies III", "Museum - Bandosian III"],
  },
  {
    name: "Da Boss Man sculpture",
    level: 119,
    experience: 45000,
    mats: [
      {
        name: "Yu'biusk clay",
        qty: 50,
      },
      {
        name: "Malachite green",
        qty: 44,
      },
      {
        name: "Soapstone",
        qty: 44,
      },
    ],
    collections: [
      "Green Gobbo Goodies III",
      "Knowledge is Power",
      "Museum - Bandosian III",
      "Red Rum Relics III",
    ],
  },
  {
    name: "Xolo shield",
    level: 119,
    experience: 45000,
    mats: [
      {
        name: "Goldrune",
        qty: 52,
      },
      {
        name: "Orgone",
        qty: 44,
      },
      {
        name: "Felt",
        qty: 42,
      },
    ],
    collections: ["Dragonkin IV", "Museum - Dragonkin IV"],
  },
  {
    name: "Xolo spear",
    level: 119,
    experience: 45000,
    mats: [
      {
        name: "Dragon metal",
        qty: 74,
      },
      {
        name: "Orgone",
        qty: 64,
      },
    ],
    collections: ["Dragonkin IV", "Museum - Dragonkin IV"],
  },
  {
    name: "Gold dish",
    level: 120,
    experience: 46666.7,
    mats: [
      {
        name: "Goldrune",
        qty: 86,
      },
      {
        name: "Dragon metal",
        qty: 54,
      },
    ],
    collections: ["Dragonkin IV", "Museum - Dragonkin IV"],
  },
  {
    name: "Raksha idol",
    level: 120,
    experience: 46666.7,
    mats: [
      {
        name: "Orgone",
        qty: 56,
      },
      {
        name: "Dragon metal",
        qty: 44,
      },
      {
        name: "Goldrune",
        qty: 40,
      },
    ],
    collections: ["Dragonkin IV", "Museum - Dragonkin IV"],
  },
];
