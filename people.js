const peopleCultureCharacters = [ "Altruistic", "Artistic", "Curious", "Devious", "Enlightened", "Hardy", "Harmonious", "Inventive", "Mercantile", "Nomadic", "Reclusive", "Religious", "Resilient", "Scholarly", "Stoic", "Struggling", "Traditional", "War-like", "Wealthy", "Xenophobic" ];
const peopleCultureAmbitions = [ "Bounty", "Conquest", "Control", "Conversion", "Division", "Dominance", "Exploration", "Fealty", "Independence", "Knowledge", "Natural Harmony", "Peace", "Power", "Purity", "Recognition", "Return", "Security", "Stability", "Unification", "Wealth"];
const peopleResources = [ "Food", "Fuel", "Gemstones", "Herbs", "Horses", "Knowledge", "Land", "Livestock", "Medicine", "Ore", "Skilled Labor", "Spices", "Stone", "Textiles", "Tools", "Trade Goods", "Vessels", "Water", "Weapons", "Wood" ];

const factionsTypes = [ "Artisans", "Commoners", "Criminals", "Cultists", "Exiles", "Explorers", "Industrialists", "Merchants", "Military", "Nobles", "Nomads", "Pilgrims", "Protectors", "Religious", "Revolutionaries", "Rulers", "Scholars", "Settlers", "Spies", "Tribe" ];
const factionsAgents = [ "Academic", "Assassin", "Blacksmith", "Farmer", "General", "Gravedigger", "Guard", "Healer", "Jailer", "Laborer", "Lord", "Merchant", "Monk", "Mystic", "Outlander", "Peddler", "Politician", "Spy", "Thief", "Thug" ];
const factionTraits1 = [ "Cautious", "Connected", "Decadent", "Disciplined", "Discreet", "Dogmatic", "Enigmatic", "Fierce", "Incorruptible", "Intellectual", "Judicious", "Keen", "Loyal", "Meticulous", "Popular", "Pragmatic", "Resourceful", "Secretive", "Shrewd", "Tenacious" ];
const factionTraits2 = [ "Adaptable", "Bankrupt", "Brutal", "Collaborative", "Corrupt", "Craven", "Cruel", "Cunning", "Cynical", "Deceptive", "Generous", "Incompetent", "Manipulative", "Mercurial", "Repressed", "Ruthless", "Selfish", "Stealthy", "Threatened", "Xenophobic" ];
const factionNumberOfAdvantages = [1,1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4];
const factionAdvantages = [ "Alliances","Anonymity","Apparatus","Beliefs","Charisma","Conviction","Fealty","Force","Information","Lineage","Magic","Members","Popularity","Position","Renown","Resources","Ruthlessness","Specialization","Subterfuge","Wealth"];
const factionAgendas = [ "Ascend to a Higher Plane", "Collect Artifacts", "Cultivate a Rare Resource", "Defend Something", "Destroy Something", "Dominate Others", "Enrich Themselves", "Establish a Colony", "Establish a New Order", "Explore Uncharted Lands", "Forge an Alliance", "Infiltrate Another Faction", "Preserve the Status Quo", "Protect a Secret", "Purge the Land", "Reveal a Secret", "Revenge", "Revive a Former Power", "Seek New Leadership", "Spread a Belief" ];
const factionObstacles = [ "A geographic barrier or impassable terrain.", "A key piece of information must first be discovered. ", "A particular object or Relic is required.", "A powerful figure or foe must be eliminated.", "A rare but necessary resource must first be acquired. ", "A serious debt forces the faction to make dire choices.", "A well-known prophecy predicts imminent failure.", "An alliance with an enemy must first be brokered.", "An internal schism threatens to tear the faction apart.", "Another faction has the same goal.", "Another faction stands in opposition.", "Commoners stand openly in opposition.", "Considerable capital is required.", "Contravenes an established code, with a heavy penalty.", "Hindered by cultural taboos.", "Many must die, either as a necessity or consequence.", "Must be carried out at a rare or exact moment.", "Must be carried out in absolute secrecy.", "Requires a specialist of an uncommon sort.", "The outcome would lead to unavoidable war."];
const factionActionOutcome = [
  "Failure -  A new Obstacle is introduced, and an Advantage is lost.",
  "Setback - An Advantage is lost.",
  "Status Quo - Nothing is gained, but nothing is lost.",
  "Mixed Success - A goal is achieved, but an Advantage is lost.",
  "Success - A goal is achieved, and no Advantages are lost.",
  "Major Success - A goal is achieved, and a new Advantage is found."
];

// check the die rolls. Might be wrong.
const terrainDifficulty = [
    {
        roll: 3,
        difficulty: "Easy",
        terrains: [ "Bluffs", "Dells", "Farmlands", "Fells", "Foothills", "Glens", "Grasslands", "Gulleys", "Heaths", "Lowlands", "Meadows", "Moors", "Pampas", "Pastures", "Plains", "Plateaus", "Prairies", "Savannas", "Steppes", "Valleys" ],
        landmarks: [ "Broken Sundial", "Circle of Menhirs", "Circular Maze", "Cloud Stairway", "Dead Aqueduct", "Enormous Footprint", "Fallen Column", "False Oasis", "Giant’s Throne", "Glittering Cascade", "Golden Bridge", "Great Stone Face", "Great Waterwheel", "Heart Tree", "Opaque Lake", "Petrified Forest", "Pit of Cold Fire", "Silver Face", "Sinkhole", "Titanic Gate" ]
    },
    {
        roll: 5,
        difficulty: "Tough",
        terrains: [ "Barrens", "Canyons", "Chaparral", "Coral Reefs", "Deserts", "Dunes", "Estuaries", "Fens", "Forests", "Heathlands", "Hills", "Mangroves", "Marshlands", "Moorlands", "Rainforests", "Scrublands", "Taiga", "Thickets", "Tundra", "Woodlands" ],
        landmarks: [ "Algae Falls", "Basalt Columns", "Behemoth Graveyard", "Canyon Bridge", "Cinder Cones", "Flame Pits", "Forest of Arrows", "Frozen Waterfall", "Fungal Forest", "Half-Buried Ark", "Hanging Valley", "Inverted Lighthouse", "Leviathan Bones", "Massive Crater", "Massive Dung Ball", "Salt Flat Mirrors", "Shrouded Ziggurat", "Stalagmite Forest", "Sunken Colossus", "Titan’s Table" ]
    },
    {
        roll: 6,
        difficult: "Perilous",
        terrains: [ "Alpine Meadows", "Bogs", "Boulders", "Caverns", "Cliffs", "Craters", "Crevasses", "Geysers", "Glaciers", "Gorges", "Hollows", "Ice Fields", "Jungles", "Lava Fields", "Mountains", "Peatlands", "Quagmires", "Ravine", "Swamps", "Wastelands" ],
        landmarks: [ "Active Volcano", "Ammonia Caves", "Bone Mountain", "Crystalline Forest", "Dome of Darkness", "Enormous Hive", "Floating Object", "Inactive Automaton", "Land Scar", "Large Vents", "Magma Sculptures", "Man on the Mountain", "Meteor Garden", "Obsidian Needle", "Reverse Waterfall", "River of Sulfur", "Siren Stones", "Sky-Root", "Titanic Ribcage", "Weeping Bubble" ]
    }
]