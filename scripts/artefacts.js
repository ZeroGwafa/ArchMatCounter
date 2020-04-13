let artefactsList = [
    { name: "Venator Dagger", mats: [{ name: "Third Age iron", qty: 16 }, { name: "Zarosian insignia", qty: 12 }] },
    { name: "Venator Light Crossbow", mats: [{ name: "Third Age iron", qty: 12 }, { name: "Zarosian insignia", qty: 16 }] },
    { name: "Legionary Gladius", mats: [{ name: "Third Age iron", qty: 10 }, { name: "Zarosian insignia", qty: 6 }, { name: "Imperial steel", qty: 12 }] },
    { name: "Legionary Square Shield", mats: [{ name: "Third Age iron", qty: 8 }, { name: "Zarosian insignia", qty: 8 }, { name: "Imperial steel", qty: 12 }] },
    { name: "Primis Elementis Standard", mats: [{ name: "Samite silk", qty: 16 }, { name: "Third Age iron", qty: 12 }] },
    { name: "Zaros Effigy", mats: [{ name: "Samite silk", qty: 8 }, { name: "White oak", qty: 10 }, { name: "Zarosian insignia", qty: 12 }] },
    { name: "Zarosian Training Dummy", mats: [{ name: "Third Age iron", qty: 16 }, { name: "White oak", qty: 14 }] },
    { name: "Hookah Pipe", mats: [{ name: "Third Age iron", qty: 10 }, { name: "Goldrune", qty: 12 }, { name: "Orthenglass", qty: 8 }] },
    { name: "Opulent Wine Goblet", mats: [{ name: "Third Age iron", qty: 14 }, { name: "Goldrune", qty: 16 }] },
    { name: "Crest of Dagon", mats: [{ name: "Goldrune", qty: 14 }, { name: "Orthenglass", qty: 18 }] },
    { name: "Disorder Painting", mats: [{ name: "Samite silk", qty: 6 }, { name: "White oak", qty: 6 }, { name: "Vellum", qty: 6 }, { name: "Cadmium red", qty: 14 }] },
    { name: "Legatus Maximus Figurine", mats: [{ name: "Goldrune", qty: 8 }, { name: "Zarosian insignia", qty: 14 }, { name: "Ancient vis", qty: 10 }] },
    { name: "Solem in Umbra Painting", mats: [{ name: "Samite silk", qty: 8 }, { name: "White oak", qty: 10 }, { name: "Tyrian purple", qty: 14 }] },
    { name: "Lesser Demon Mask", mats: [{ name: "Leather scraps", qty: 6 }, { name: "Chaotic brimstone", qty: 8 }, { name: "Demonhide", qty: 12 }, { name: "Cadmium red", qty: 6 }] },
    { name: "Imp Mask", mats: [{ name: "Leather scraps", qty: 10 }, { name: "Chaotic brimstone", qty: 10 }, { name: "Demonhide", qty: 12 }] },
    { name: "Greater Demon Mask", mats: [{ name: "Third Age iron", qty: 6 }, { name: "Leather scraps", qty: 6 }, { name: "Chaotic brimstone", qty: 8 }, { name: "Demonhide", qty: 12 }] },
    { name: "Order of Dis Robes", mats: [{ name: "Samite silk", qty: 16 }, { name: "Cadmium red", qty: 10 }, { name: "Eye of Dagon", qty: 14 }] },
    { name: "Ritual Dagger", mats: [{ name: "Goldrune", qty: 16 }, { name: "Hellfire metal", qty: 24 }] },
    { name: "Frying Pan", mats: [{ name: "Third Age iron", qty: 20 }, { name: "White marble", qty: 24 }] },
    { name: "Hallowed Lantern", mats: [{ name: "Third Age iron", qty: 20 }, { name: "Keramos", qty: 24 }] },
    { name: "Branding Iron", mats: [{ name: "Third Age iron", qty: 14 }, { name: "Eye of Dagon", qty: 12 }, { name: "Hellfire metal", qty: 20 }] },
    { name: "Manacles", mats: [{ name: "Third Age iron", qty: 14 }, { name: "Chaotic brimstone", qty: 18 }, { name: "Eye of Dagon", qty: 14 }] },
    { name: "Ancient Timepiece", mats: [{ name: "Goldrune", qty: 12 }, { name: "Imperial steel", qty: 16 }, { name: "Ancient vis", qty: 18 }] },
    { name: "Legatus Pendant", mats: [{ name: "Third Age iron", qty: 16 }, { name: "Goldrune", qty: 18 }, { name: "Ancient vis", qty: 12 }] },
    { name: "Ceremonial Unicorn Ornament", mats: [{ name: "Keramos", qty: 26 }, { name: "Cobalt blue", qty: 20 }] },
    { name: "Ceremonial Unicorn Saddle", mats: [{ name: "Leather scraps", qty: 24 }, { name: "Cobalt blue", qty: 22 }] },
    { name: "Tertacompass", mats: [{ name: "Malachite green", qty: 30 }, { name: "Cadmium red", qty: 30 }, { name: "Cobalt blue", qty: 30 }, { name: "Armadylean yellow", qty: 30 }, { name: "Tyrian purple", qty: 30 }] },
    { name: "Everlight Harp", mats: [{ name: "Everlight silvthril", qty: 30 }, { name: "White oak", qty: 22 }] },
    { name: "Everlight Trumpet", mats: [{ name: "Everlight silvthril", qty: 28 }, { name: "Goldrune", qty: 24 }] },
    { name: "Everlight Violin", mats: [{ name: "Star of Saradomin", qty: 16 }, { name: "White oak", qty: 20 }, { name: "Samite silk", qty: 16 }] },
    { name: "Folded-arm Figurine (female)", mats: [{ name: "White marble", qty: 30 }, { name: "Goldrune", qty: 24 }] },
    { name: "Folded-arm Figurine (male)", mats: [{ name: "White marble", qty: 30 }, { name: "Goldrune", qty: 24 }] },
    { name: "Pontifex Signet Ring", mats: [{ name: "Third Age iron", qty: 16 }, { name: "Goldrune", qty: 18 }, { name: "Ancient vis", qty: 22 }] },
    { name: "Incite Fear Spell Scroll", mats: [{ name: "Vellum", qty: 20 }, { name: "Ancient vis", qty: 18 }, { name: "Blood of Orcus", qty: 18 }] },
    { name: "Dominion Discus", mats: [{ name: "Keramos", qty: 34 }, { name: "Star of Saradomin", qty: 28 }] },
    { name: "Dominion Javelin", mats: [{ name: "Keramos", qty: 32 }, { name: "Third Age iron", qty: 30 }] },
    { name: "Dominion Pelte Shield", mats: [{ name: "Star of Saradomin", qty: 34 }, { name: "Samite silk", qty: 28 }] },
    { name: "The Lake of Fire Painting", mats: [{ name: "Samite silk", qty: 10 }, { name: "White oak", qty: 10 }, { name: "Vellum", qty: 10 }, { name: "Cadmium red", qty: 34 }] },
    { name: "Lust Metal Sculpture", mats: [{ name: "Third Age iron", qty: 16 }, { name: "Eye of Dagon", qty: 24 }, { name: "Goldrune", qty: 24 }] },
    { name: "Chaos Star", mats: [{ name: "Chaotic brimstone", qty: 28 }, { name: "Hellfire metal", qty: 36 }] },
    { name: "Spiked Dog Collar", mats: [{ name: "Third Age iron", qty: 24 }, { name: "Leather scraps", qty: 24 }, { name: "Chaotic brimstone", qty: 16 }] },
    { name: "Bronze Dominion Medal", mats: [{ name: "Everlight silvthril", qty: 36 }, { name: "Star of Saradomin", qty: 26 }] },
    { name: "Silver Dominion Medal", mats: [{ name: "Everlight silvthril", qty: 36 }, { name: "Star of Saradomin", qty: 26 }] },
    { name: "Dominion Torch", mats: [{ name: "Goldrune", qty: 12 }, { name: "Orthenglass", qty: 12 }, { name: "Everlight silvthril", qty: 20 }, { name: "Star of Saradomin", qty: 18 }] },
    { name: "Ivokian Gerege", mats: [{ name: "Third Age iron", qty: 36 }, { name: "Wings of War", qty: 30 }] },
    { name: "Toy Glider", mats: [{ name: "Stormguard steel", qty: 36 }, { name: "White oak", qty: 30 }] },
    { name: "Toy War Golem", mats: [{ name: "Third Age iron", qty: 36 }, { name: "White oak", qty: 30 }] },
    { name: "Decorative Vase", mats: [{ name: "White marble", qty: 36 }, { name: "Cobalt blue", qty: 30 }] },
    { name: "Patera Bowl", mats: [{ name: "Keramos", qty: 36 }, { name: "Goldrune", qty: 30 }] },
    { name: "Kantharos Cup", mats: [{ name: "Everlight silvthril", qty: 30 }, { name: "Orthenglass", qty: 36 }] },
    { name: "Ceremonial Mace", mats: [{ name: "Imperial steel", qty: 20 }, { name: "Third Age iron", qty: 20 }, { name: "Goldrune", qty: 28 }] },
    { name: "Consenus ad Idem Painting", mats: [{ name: "White oak", qty: 10 }, { name: "Samite silk", qty: 10 }, { name: "Tyrian purple", qty: 50 }] },
    { name: "Pontifex Maximus Figurine", mats: [{ name: "Zarosian insignia", qty: 24 }, { name: "Ancient vis", qty: 16 }, { name: "Goldrune", qty: 28 }] },
    { name: "Avian Song-egg Player", mats: [{ name: "Stormguard steel", qty: 36 }, { name: "Armadylean yellow", qty: 32 }] },
    { name: "Keshik Drum", mats: [{ name: "Wings of War", qty: 16 }, { name: "Animal furs", qty: 16 }, { name: "White oak", qty: 20 }, { name: "Leather scraps", qty: 16 }] },
    { name: "Morin Khuur", mats: [{ name: "Armadylean yellow", qty: 36 }, { name: "White oak", qty: 32 }] },
    { name: "Ekeleshuun Blinder Mask", mats: [{ name: "Vulcanised rubber", qty: 24 }, { name: "Malachite green", qty: 20 }, { name: "Vellum", qty: 24 }] },
    { name: "Narogoshuun Hob-da-Gob Ball", mats: [{ name: "Vulcanised rubber", qty: 36 }, { name: "Mark of the Kyzaj", qty: 32 }] },
    { name: "Rekeshuun War Tether", mats: [{ name: "Warforged bronze", qty: 20 }, { name: "Vulcanised rubber", qty: 22 }, { name: "Leather scraps", qty: 26 }] },
    { name: "Aviansie Dreamcoat", mats: [{ name: "Armadylean yellow", qty: 20 }, { name: "Samite silk", qty: 30 }, { name: "Animal furs", qty: 22 }] },
    { name: "Ceremonial Plume", mats: [{ name: "Armadylean yellow", qty: 38 }, { name: "Goldrune", qty: 34 }] },
    { name: "Peacocking Parasol", mats: [{ name: "Armadylean yellow", qty: 22 }, { name: "Samite silk", qty: 30 }, { name: "White oak", qty: 20 }] },
    { name: "Ogre Kyzaj Axe", mats: [{ name: "Warforged bronze", qty: 28 }, { name: "Mark of the Kyzaj", qty: 20 }, { name: "Fossilised bone", qty: 24 }] },
    { name: "Ork Cleaver Sword", mats: [{ name: "Warforged bronze", qty: 36 }, { name: "Fossilised bone", qty: 36 }] },
    { name: "Larupia Trophy", mats: [{ name: "Cadmium red", qty: 18 }, { name: "Animal furs", qty: 28 }, { name: "Orthenglass", qty: 26 }] },
    { name: "Lion Trophy", mats: [{ name: "Cadmium red", qty: 18 }, { name: "Animal furs", qty: 28 }, { name: "White oak", qty: 26 }] },
    { name: "She-wolf Trophy", mats: [{ name: "Chaotic brimstone", qty: 26 }, { name: "Cadmium red", qty: 18 }, { name: "Animal furs", qty: 28 }] },
    { name: "Pontifex Censer", mats: [{ name: "Third Age iron", qty: 20 }, { name: "Ancient vis", qty: 20 }, { name: "Goldrune", qty: 32 }] },
    { name: "Pontifex Crozier", mats: [{ name: "Imperial steel", qty: 20 }, { name: "Zarosian insignia", qty: 20 }, { name: "Goldrune", qty: 32 }] },
    { name: "Pontifex Mitre", mats: [{ name: "Samite silk", qty: 32 }, { name: "Ancient vis", qty: 20 }, { name: "Zarosian insignia", qty: 20 }] },
    { name: "Thorobshuun Battle Standard", mats: [{ name: "Mark of the Kyzaj", qty: 16 }, { name: "Malachite green", qty: 22 }, { name: "White oak", qty: 16 }, { name: "Samite silk", qty: 20 }] },
    { name: "Yurkolgokh Stink Grenade", mats: [{ name: "Yu'biusk clay", qty: 38 }, { name: "Vulcanised rubber", qty: 36 }] },
    { name: "Dominarian Device", mats: [{ name: "Everlight silvthril", qty: 30 }, { name: "Keramos", qty: 22 }, { name: "Third Age iron", qty: 22 }] },
    { name: "Fishing Trident", mats: [{ name: "Star of Saradomin", qty: 22 }, { name: "Third Age iron", qty: 30 }, { name: "Goldrune", qty: 22 }] },
    { name: "Hawkeye Lens Multi-vision Scope", mats: [{ name: "Stormguard steel", qty: 40 }, { name: "Orthenglass", qty: 34 }] },
    { name: "Talon-3 Razor Wing", mats: [{ name: "Aetherium alloy", qty: 40 }, { name: "Wings of War", qty: 34 }] },
    { name: "Necromantic Focus", mats: [{ name: "Imperial steel", qty: 20 }, { name: "Blood of Orcus", qty: 26 }, { name: "Ancient vis", qty: 30 }] },
    { name: "Exsanguinate Spell Scroll", mats: [{ name: "Vellum", qty: 40 }, { name: "Blood of Orcus", qty: 36 }] },
    { name: "High Priest Crozier", mats: [{ name: "Mark of the Kyzaj", qty: 26 }, { name: "Malachite green", qty: 24 }, { name: "Goldrune", qty: 28 }] },
    { name: "High Priest Mitre", mats: [{ name: "Mark of the Kyzaj", qty: 26 }, { name: "Malachite green", qty: 24 }, { name: "Samite silk", qty: 28 }] },
    { name: "High Priest Orb", mats: [{ name: "Mark of the Kyzaj", qty: 26 }, { name: "Malachite green", qty: 24 }, { name: "Goldrune", qty: 28 }] },
    { name: "Pandemonium Tapestry", mats: [{ name: "White oak", qty: 12 }, { name: "Samite silk", qty: 12 }, { name: "Vellum", qty: 12 }, { name: "Cadmium red", qty: 42 }] },
    { name: "Torment Metal Sculpture", mats: [{ name: "Eye of Dagon", qty: 20 }, { name: "Third Age iron", qty: 20 }, { name: "Hellfire metal", qty: 38 }] },
    { name: "Prototype Gravimeter", mats: [{ name: "Quintessence", qty: 34 }, { name: "Leather scraps", qty: 20 }, { name: "Third Age iron", qty: 26 }] },
    { name: "Songbird Recorder", mats: [{ name: "Stormguard steel", qty: 44 }, { name: "Orthenglass", qty: 36 }] },
    { name: "Amphora", mats: [{ name: "Everlight silvthril", qty: 34 }, { name: "Keramos", qty: 46 }] },
    { name: "Rod of Asclepius", mats: [{ name: "White marble", qty: 30 }, { name: "Star of Saradomin", qty: 24 }, { name: "Goldrune", qty: 26 }] },
    { name: "Zarosian Ewer", mats: [{ name: "Third Age iron", qty: 52 }, { name: "Zarosian insignia", qty: 30 }] },
    { name: "Zarosian Stein", mats: [{ name: "Third Age iron", qty: 16 }, { name: "Imperial steel", qty: 36 }, { name: "Zarosian insignia", qty: 30 }] },
    { name: "Beastkeeper Helm", mats: [{ name: "Warforged bronze", qty: 16 }, { name: "Vulcanised rubber", qty: 24 }, { name: "Animal furs", qty: 20 }, { name: "Fossilised bone", qty: 24 }] },
    { name: "Idithuun Horn Ring", mats: [{ name: "Yu'biusk clay", qty: 40 }, { name: "Vulcanised rubber", qty: 44 }] },
    { name: "Nosorog! Sculpture", mats: [{ name: "Yu'biusk clay", qty: 30 }, { name: "Malachite green", qty: 24 }, { name: "Soapstone", qty: 30 }] },
    { name: "Stormguard Gerege", mats: [{ name: "Stormguard steel", qty: 36 }, { name: "Wings of War", qty: 28 }, { name: "Goldrune", qty: 20 }] },
    { name: "Dayguard Shield", mats: [{ name: "Stormguard steel", qty: 36 }, { name: "Wings of War", qty: 28 }, { name: "White oak", qty: 20 }] },
    { name: "Garagorshuun Anchor", mats: [{ name: "Warforged bronze", qty: 32 }, { name: "Mark of the Kyzaj", qty: 26 }, { name: "Third Age iron", qty: 30 }] },
    { name: "Ourg Megahitter", mats: [{ name: "White oak", qty: 20 }, { name: "Leather scraps", qty: 20 }, { name: "Orthenglass", qty: 26 }, { name: "Malachite green", qty: 22 }] },
    { name: "Ourg Tower/Goblin Cower Shield", mats: [{ name: "Mark of the Kyzaj", qty: 20 }, { name: "Third Age iron", qty: 26 }, { name: "Leather scraps", qty: 22 }, { name: "White oak", qty: 20 }] },
    { name: "Golem Heart", mats: [{ name: "Aetherium alloy", qty: 34 }, { name: "Quintessence", qty: 24 }, { name: "Orthenglass", qty: 16 }, { name: "Soapstone", qty: 16 }] },
    { name: "Golem Instruction", mats: [{ name: "Quintessence", qty: 46 }, { name: "Vellum", qty: 44 }] },
    { name: "Hellfire Haladie", mats: [{ name: "Hellfire metal", qty: 44 }, { name: "Third Age iron", qty: 26 }, { name: "Leather scraps", qty: 20 }] },
    { name: "Hellfire Katar", mats: [{ name: "Hellfire metal", qty: 50 }, { name: "Leather scraps", qty: 40 }] },
    { name: "Hellfire Zaghnal", mats: [{ name: "Hellfire metal", qty: 38 }, { name: "White oak", qty: 26 }, { name: "Orthenglass", qty: 26 }] },
    { name: "Dorgeshuun Spear", mats: [{ name: "Warforged bronze", qty: 50 }, { name: "White oak", qty: 42 }] },
    { name: "Forged in War Sculpture", mats: [{ name: "Warforged bronze", qty: 50 }, { name: "Yu'biusk clay", qty: 42 }] },
    { name: "Kopis Dagger", mats: [{ name: "Everlight silvthril", qty: 50 }, { name: "Leather scraps", qty: 42 }] },
    { name: "Xiphos Short Sword", mats: [{ name: "Everlight silvthril", qty: 46 }, { name: "Leather scraps", qty: 46 }] },
    { name: "Smoke Cloud Spell Scroll", mats: [{ name: "Vellum", qty: 40 }, { name: "Ancient vis", qty: 20 }, { name: "Blood of Orcus", qty: 32 }] },
    { name: "Vigorem Vial", mats: [{ name: "Imperial steel", qty: 54 }, { name: "Ancient vis", qty: 38 }] },
    { name: "Blackfire Lance", mats: [{ name: "Aetherium alloy", qty: 50 }, { name: "Quintessence", qty: 46 }] },
    { name: "Nightguard Shield", mats: [{ name: "Stormguard steel", qty: 30 }, { name: "Wings of War", qty: 36 }, { name: "White oak", qty: 30 }] },
    { name: "Huzamogaarb Chaos Crown", mats: [{ name: "Warforged bronze", qty: 44 }, { name: "Third Age iron", qty: 34 }, { name: "Eye of Dagon", qty: 20 }] },
    { name: "Saragorgak Star Crown", mats: [{ name: "Warforged bronze", qty: 44 }, { name: "Third Age iron", qty: 34 }, { name: "Star of Saradomin", qty: 20 }] },
    { name: "Possession Metal Sculpture", mats: [{ name: "Eye of Dagon", qty: 24 }, { name: "Chaotic brimstone", qty: 30 }, { name: "Third Age iron", qty: 44 }] },
    { name: "Trishula", mats: [{ name: "Hellfire metal", qty: 48 }, { name: "Eye of Dagon", qty: 30 }, { name: "Third Age iron", qty: 20 }] },
    { name: "Tsutsaroth Piercing", mats: [{ name: "Hellfire metal", qty: 44 }, { name: "Chaotic brimstone", qty: 30 }, { name: "Cadmium red", qty: 24 }] },
    { name: "The Pride of Padosan Painting", mats: [{ name: "Cobalt blue", qty: 52 }, { name: "White oak", qty: 16 }, { name: "Samite silk", qty: 16 }, { name: "Vellum", qty: 16 }] },
    { name: "Hallowed Be the Everlight Painting", mats: [{ name: "Cobalt blue", qty: 52 }, { name: "White oak", qty: 16 }, { name: "Samite silk", qty: 16 }, { name: "Vellum", qty: 16 }] },
    { name: "The Lord of Light Painting", mats: [{ name: "Cobalt blue", qty: 52 }, { name: "White oak", qty: 16 }, { name: "Samite silk", qty: 16 }, { name: "Vellum", qty: 16 }] },
    { name: "Ancient Magic Tablet", mats: [{ name: "Ancient vis", qty: 40 }, { name: "Blood of Orcus", qty: 64 }] },
    { name: "Portable Phylactery", mats: [{ name: "Imperial steel", qty: 48 }, { name: "Blood of Orcus", qty: 36 }, { name: "Ancient vis", qty: 20 }] },
    { name: "Animate Dead Spell Scroll", mats: [{ name: "Vellum", qty: 40 }, { name: "Ancient vis", qty: 24 }, { name: "Blood of Orcus", qty: 40 }] },
    { name: "The Enlightened Soul Scroll", mats: [{ name: "Star of Saradomin", qty: 50 }, { name: "Vellum", qty: 60 }] },
    { name: "The Eudoxian Elements Tablet", mats: [{ name: "White marble", qty: 60 }, { name: "Goldrune", qty: 50 }] },
    { name: "Drogokishuun Hook Sword", mats: [{ name: "Warforged bronze", qty: 44 }, { name: "Malachite green", qty: 36 }, { name: "Fossilised bone", qty: 32 }] },
    { name: "Hobgoblin Mansticker", mats: [{ name: "Warforged bronze", qty: 66 }, { name: "Fossilised bone", qty: 46 }] },
    { name: "Chaos Elemental Trophy", mats: [{ name: "Chaotic brimstone", qty: 52 }, { name: "White oak", qty: 30 }, { name: "Hellfire metal", qty: 30 }] },
    { name: "Virius Trophy", mats: [{ name: "Demonhide", qty: 44 }, { name: "White oak", qty: 34 }, { name: "Orthenglass", qty: 34 }] },
    { name: "Flat Cap", mats: [{ name: "Armadylean yellow", qty: 60 }, { name: "Samite silk", qty: 54 }] },
    { name: "Night Owl Flight Goggles", mats: [{ name: "Armadylean yellow", qty: 44 }, { name: "Leather scraps", qty: 40 }, { name: "Orthenglass", qty: 30 }] },
    { name: "Prototype Godbow", mats: [{ name: "Aetherium alloy", qty: 50 }, { name: "Quintessence", qty: 34 }, { name: "Wings of War", qty: 34 }] },
    { name: "Prototype Godstaff", mats: [{ name: "Aetherium alloy", qty: 50 }, { name: "Quintessence", qty: 34 }, { name: "Wings of War", qty: 34 }] },
    { name: "Prototype Godsword", mats: [{ name: "Aetherium alloy", qty: 50 }, { name: "Wings of War", qty: 34 }, { name: "Goldrune", qty: 34 }] },
    { name: "Praetorian Hood", mats: [{ name: "Ancient vis", qty: 36 }, { name: "Samite silk", qty: 48 }, { name: "Zarosian insignia", qty: 40 }] },
    { name: "Praetorian Robes", mats: [{ name: "Ancient vis", qty: 30 }, { name: "Samite silk", qty: 54 }, { name: "Zarosian insignia", qty: 40 }] },
    { name: "Praetorian Staff", mats: [{ name: "Imperial steel", qty: 36 }, { name: "Ancient vis", qty: 58 }, { name: "Zarosian insignia", qty: 30 }] },
    { name: "Kal-i-kran Chieftain Crown", mats: [{ name: "Yu'biusk clay", qty: 66 }, { name: "Animal furs", qty: 60 }] },
    { name: "Kal-i-kran Mace", mats: [{ name: "Vulcanised rubber", qty: 42 }, { name: "Third Age iron", qty: 44 }, { name: "Fossilised bone", qty: 40 }] },
    { name: "Kal-i-kran Warhorn", mats: [{ name: "Vulcanised rubber", qty: 44 }, { name: "Fossilised bone", qty: 42 }, { name: "Animal furs", qty: 40 }] },
    { name: "Tsutsaroth Helm", mats: [{ name: "Hellfire metal", qty: 50 }, { name: "Eye of Dagon", qty: 40 }, { name: "Goldrune", qty: 40 }] },
    { name: "Tsutsaroth Pauldron", mats: [{ name: "Hellfire metal", qty: 40 }, { name: "Goldrune", qty: 50 }, { name: "Eye of Dagon", qty: 40 }] },
    { name: "Tsutsaroth Urumi", mats: [{ name: "Hellfire metal", qty: 50 }, { name: "Eye of Dagon", qty: 40 }, { name: "Third Age iron", qty: 40 }] },
    { name: "Kontos Lance", mats: [{ name: "Everlight silvthril", qty: 70 }, { name: "Samite silk", qty: 62 }] },
    { name: "Doru Spear", mats: [{ name: "Everlight silvthril", qty: 70 }, { name: "White oak", qty: 62 }] },
    { name: "Chuluu Stone", mats: [{ name: "Aetherium alloy", qty: 40 }, { name: "Quintessence", qty: 30 }, { name: "Soapstone", qty: 40 }, { name: "Goldrune", qty: 24 }] },
    { name: "Quintessence Counter", mats: [{ name: "Quintessence", qty: 54 }, { name: "Stormguard steel", qty: 40 }, { name: "White oak", qty: 40 }] },
    { name: "Spherical Astrolabe", mats: [{ name: "Aetherium alloy", qty: 46 }, { name: "Armadylean yellow", qty: 40 }, { name: "Orthenglass", qty: 48 }] },
    { name: "Ancient Globe", mats: [{ name: "White oak", qty: 20 }, { name: "Tyrian purple", qty: 54 }, { name: "Ancient vis", qty: 60 }] },
    { name: "Battle Plans", mats: [{ name: "Vellum", qty: 40 }, { name: "Tyrian purple", qty: 54 }, { name: "Ancient vis", qty: 34 }] },
    { name: "Prima Legio Painting", mats: [{ name: "White oak", qty: 20 }, { name: "Samite silk", qty: 20 }, { name: "Tyrian purple", qty: 74 }, { name: "Zarosian insignia", qty: 20 }] },
    { name: "Horogothgar Cooking Pot", mats: [{ name: "Yu'biusk clay", qty: 60 }, { name: "Malachite green", qty: 38 }, { name: "Soapstone", qty: 40 }] },
    { name: "Da Boss Man Sculpture", mats: [{ name: "Yu'biusk clay", qty: 50 }, { name: "Malachite green", qty: 44 }, { name: "Soapstone", qty: 44 }] }
]

let artefactCollections = [
    { name: "Other", artefacts: ["Tertacompass"]},
    { name: "Blingy Fings", artefacts: ["Ancient Timepiece", "Legatus Pendant", "Pontifex Signet Ring", "Bronze Dominion Medal", "Silver Dominion Medal"] },
    { name: "Smoky Fings", artefacts: ["Hookah Pipe", "Opulent Wine Goblet", "Everlight Trumpet", "Dominion Torch", "Pontifex Censer"] },
    { name: "Saradominist II", artefacts: ["Dominion Discus", "Dominion Javelin", "Dominion Pelte Shield", "Bronze Dominion Medal", "Silver Dominion Medal", "Dominion Torch", "Decorative Vase", "Kantharos Cup", "Patera Bowl"] },
    { name: "Zamorakian II", artefacts: ["Branding Iron", "Manacles", "The Lake of Fire Painting", "Lust Metal Sculpture", "Chaos Star", "Spiked Dog Collar", "Larupia Trophy", "Lion Trophy", "She-Wolf Trophy"] },
    { name: "Zarosian II", artefacts: ["Ancient Timepiece", "Legatus Pendant", "Incite Fear Spell Scroll", "Pontifex Signet Ring", "Ceremonial Mace", "Pontifex Maximus Figurine", "Consensus Ad Idem Painting", "Pontifex Censer", "Pontifex Crozier", "Pontifex Mitre"] },
    { name: "Green Gobbo Goodies I", artefacts: ["Ekeleshuun Blinder Mask", "Narogoshuun Hob Da Gob", "Rekeshuun War Tether", "Thorobshuun Battle Standard", "Yurkolgokh Stink Grenade"] },
    { name: "Armadylean I", artefacts: ["Ikovian Gerege", "Toy Glider", "Toy War Golem", "Avian Song Egg Player", "Keshik Drum", "Morin Khuur", "Aviansie Dreamcoat", "Ceremonial Plume", "Peacocking Parasol"] },
    { name: "Hitty Fings", artefacts: ["Ceremonial Mace", "Pontifex Crozier", "Fishing Trident", "High Priest Crozier", "High Priest Orb"] },
    { name: "Bandosian I", artefacts: ["Ekeleshuun Blinder Mask", "Narogoshuun Hob Da Gob", "Rekeshuun War Tether", "Ogre Kyzaj Axe", "Ork Cleaver Sword", "Thorobshuun Battle Standard", "Yurkolgokh Stink Grenade", "High Priest Crozier", "High Priest Mitre", "High Priest Orb"] },
    { name: "Anarchic Abstraction", artefacts: ["Disorder Painting", "The Lake of Fire Painting", "Pandemonium Tapestry"] },
    { name: "Wise Am the Music Man", artefacts: ["Avian Song Egg Player", "Everlight Harp", "Everlight Trumpet", "Everlight Violin", "Keshik Drum", "Morin Khuur", "Songbird Recorder"] },
    { name: "Showy Fings", artefacts: ["Crest of Dagon", "Legatus Maximus Figurine", "Lust Metal Sculpture", "Pontifex Maximus Figurine", "Ceremonial Plume", "Rod of Asclepius"] },
    { name: "Red Rum Relics I", artefacts: ["Ork Cleaver Sword", "Ogre Kyzaj Axe", "Beastkeeper Helm", "Nosorog Sculpture"] },
    { name: "Green Gobbo Goodies II", artefacts: ["High Priest Crozier", "High Priest Mitre", "High Priest Orb", "Idithuun Horn Ring", "Garagorshuun Anchor"] },
    { name: "Armadylean II", artefacts: ["Hawkeye Lens Multi Vision Scope", "Talon 3 Razor Wing", "Prototype Gravimeter", "Songbird Recorder", "Dayguard Shield", "Stormguard Gerege", "Golem Heart", "Golem Instruction"] },
    { name: "Saradominist III", artefacts: ["Amphora", "Rod of Asclepius", "Dominarian Device", "Fishing Trident", "Kopis Dagger", "Xiphos Short Sword"] },
    { name: "Radiant Renaissance", artefacts: ["Hallowed Be the Everlight Painting", "The Lord of Light Painting", "The Pride of Padosan Painting"] },
    { name: "Zarosian III", artefacts: ["Exsanguinate Spell Scroll", "Necromantic Focus", "Zarosian Ewer", "Zarosian Stein", "Smoke Cloud Spell Scroll", "Vigorem Vial", "Ancient Magic Tablet", "Animate Dead Spell Scroll", "Portable Phylactery"] },
    { name: "Zamorakian III", artefacts: ["Torment Metal Sculpture", "Pandemonium Tapestry", "Hellfire Haladie", "Hellfire Katar", "Hellfire Zaghnal", "Chaos Elemental Trophy", "Virius Trophy"] },
    { name: "Red Rum Relics II", artefacts: ["Hobgoblin Mansticker", "Ourg Megahitter", "Ourg Tower Goblin Cower Shield", "Forged in War Sculpture"] },
    { name: "Bandosian II", artefacts: ["Beastkeeper Helm", "Dorgeshuun Spear", "Hobgoblin Mansticker", "Idithuun Horn Ring", "Ourg Megahitter", "Forged in War Sculpture", "Nosorog Sculpture", "Ourg Tower Goblin Cower Shield"] },
    { name: "Hat Problem", artefacts: ["Beastkeeper Helm", "Imp Mask", "Ekeleshuun Blinder Mask", "Flat Cap", "High Priest Mitre", "Huzamogaarb Chaos Crown", "Praetorian Hood"] },
    { name: "Hat Hoarder", artefacts: ["Ceremonial Unicorn Ornament", "Lesser Demon Mask", "Greater Demon Mask", "Kal I Kran Chieftain Crown", "Pontifex Mitre", "Saragorgak Star Crown", "Tsutsaroth Helm"] },
    { name: "Zamorakian IV", artefacts: ["Possession Metal Sculpture", "Trishula", "Tsutsaroth Piercing", "Tsutsaroth Helm", "Tsutsaroth Pauldron", "Tsutsaroth Urumi"] },
    { name: "Saradominist IV", artefacts: ["The Pride of Padosan Painting", "Hallowed Be the Everlight Painting", "The Lord of Light Painting", "The Enlightened Soul Scroll", "The Eudoxian Elements Tablet", "Doru Spear", "Kontos Lance"] },
    { name: "Imperial Impressionism", artefacts: ["Hallowed Be the Everlight Painting", "The Lord of Light Painting", "The Pride of Padosan Painting"] },
    { name: "Magic Man", artefacts: ["Ancient Timepiece", "Chuluu Stone", "High Priest Mitre", "Legatus Maximus Figurine", "Portable Phylactery", "Ritual Dagger", "Animate Dead Spell Scroll", "Exsanguinate Spell Scroll", "Incite Fear Spell Scroll", "Smoke Cloud Spell Scroll"] },
    { name: "Armadylean III", artefacts: ["Blackfire Lance", "Nightguard Shield", "Flat Cap", "Night Owl Flight Goggles", "Prototype Godbow", "Prototype Godstaff", "Prototype Godsword", "Chuluu Stone", "Quintessence Counter", "Spherical Astrolabe"] },
    { name: "Zarosian IV", artefacts: ["Praetorian Hood", "Praetorian Robes", "Praetorian Staff", "Ancient Globe", "Battle Plans", "Prima Legio Painting"] },
    { name: "Red Rum Relics III", artefacts: ["Kal I Kran Chieftain Crown", "Kal I Kran Mace", "Kal I Kran Warhorn", "Da Boss Man Sculpture"] },
    { name: "Knowledge is Power", artefacts: ["Crest of Dagon", "Golem Instruction", "Necromantic Focus", "Ikovian Gerege", "The Enlightened Soul Scroll", "Da Boss Man Sculpture", "The Eudoxian Elements Tablet"] },
    { name: "Green Gobbo Goodies III", artefacts: ["Huzamogaarb Chaos Crown", "Saragorgak Star Crown", "Drogokishuun Hook Sword", "Dorgeshuun Spear", "Horogothgar Cooking Pot", "Da Boss Man Sculpture"] },
    { name: "Bandosian III", artefacts: ["Drogokishuun Hook Sword", "Garagorshuun Anchor", "Horogothgar Cooking Pot", "Huzamogaarb Chaos Crown", "Kal I Kran Chieftain Crown", "Kal I Kran Mace", "Kal I Kran Warhorn", "Saragorgak Star Crown", "Da Boss man Sculpture"] },
];

let artefactInput = {}
//TODO: should probably clear the local storage of old layout
if (localStorage.artefactInput)
    artefactInput = JSON.parse(localStorage.artefactInput);
console.log(artefactInput);

let currentPage = window.location.pathname.split("/").pop();

artefactCollections.forEach(collection => {
    if(currentPage === 'artefacts.html'){
        $(".main").append(`
        <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-3">
                ${item.name}    
            </div>
            <div class="col-sm-1">
                <input class="artefactInput" type='number' data-name='${item.name}' value=${artefactInput[item.name] || 0}>
            </div>
            <div class="col-sm-4"></div>
        </div>`)
    }
    else if(currentPage === 'collections.html'){
        let html = [];
        html.push(`<div class="row"><div class="col-sm-4"></div><div class="col-sm-4"><h3>Collection: ${collection.name}</h3></div>`);
    
        collection.artefacts.forEach(artefact => {
            html.push(`
            <div class="col-sm-4"></div>
            <div class="col-sm-4">${artefact}</div>
            <div class="col-sm-1">
                <input class="artefactInput" type='number' data-collection='${collection.name}' data-artefact='${artefact}' value=${artefactInput[collection.name + "_" + artefact] || 0}>
            </div>
            <div class="col-sm-4"></div>`);
        });
        html.push(`</div>`);
        $(".main").append(html.join(`\n`));
    }
});

$(".import").click(() => {
    let mats = {};
    let artefactInput = {};
    document.querySelectorAll("input").forEach(item => {
        let artefactName;
        if(currentPage === 'artefacts.html') {
            artefactName = item.dataset.name;
            artefactInput[name] = parseInt(item.value);
        }
        else if(currentPage === 'collections.html') {
            let collectionName = item.dataset.collection;
            artefactName = item.dataset.artefact;
            artefactInput[collectionName + "_" + artefactName] = parseInt(item.value);
        }
        artefactsList.forEach(art => {
            if (art.name === artefactName) {
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
    window.close()
})
