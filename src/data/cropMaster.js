// src/data/cropMaster.js
// Master data of crops with pests, fertilizers, and tips

export const CROPS = [
  // 🌾 Cereals
  {
    id: "paddy",
    name: "Paddy",
    category: "cereal",
    soil: ["alluvial", "clay"],
    water: "high",
    investmentPerAcre: 20000,
    avgYieldKgPerAcre: 2500,
    avgProfitPerAcre: 15000,
    growingDuration: 4,
    seasons: ["kharif"],
    plantingMonths: [6, 7, 8],
    harvestMonths: [10, 11],
    recommendedVarieties: ["Swarna", "IR64", "MTU 1010"],
    commonPests: [
      {
        name: "Brown Planthopper",
        impact: "Causes hopper burn and reduces yield drastically.",
        control: [
          "Avoid overuse of nitrogen fertilizers",
          "Maintain proper spacing to improve airflow",
          "Use resistant varieties if available",
        ],
        recommendedPesticides: ["Imidacloprid", "Buprofezin"],
      },
      {
        name: "Stem Borer",
        impact: "Damages stem, leading to dead hearts/white ears.",
        control: [
          "Remove and destroy affected tillers",
          "Encourage natural predators (Trichogramma)",
        ],
        recommendedPesticides: ["Carbofuran", "Chlorantraniliprole"],
      },
    ],
    fertilizers: {
      basal: ["Urea – 50 kg/acre", "DAP – 40 kg/acre", "MOP – 20 kg/acre"],
      topDressing: [
        "Urea – 25 kg/acre at tillering",
        "Urea – 25 kg/acre at panicle initiation",
      ],
    },
    tips: [
      "Maintain proper water level (2–3 cm) during tillering stage",
      "Adopt crop rotation to reduce pest build-up",
      "Use certified seeds to avoid disease incidence",
    ],
  },

  {
    id: "rice",
    name: "Rice",
    category: "cereal",
    soil: ["not_applicable"], // grown from paddy
    water: "not_applicable",
    investmentPerAcre: null, // processed crop, not direct field crop
    avgYieldKgPerAcre: null,
    avgProfitPerAcre: null,
    growingDuration: null,
    seasons: ["post-harvest"],
    plantingMonths: [],
    harvestMonths: [],
    recommendedVarieties: ["Basmati", "Sona Masoori", "Ponni", "Gobindobhog"],
    commonPests: [
      {
        name: "Rice Weevil",
        impact: "Infests stored rice grains causing weight and quality loss.",
        control: [
          "Keep storage area dry and clean",
          "Airtight containers for storage",
          "Regular fumigation if needed",
        ],
        recommendedPesticides: ["Aluminium phosphide (fumigation)"],
      },
      {
        name: "Grain Moth",
        impact: "Larvae feed on rice grains reducing quality.",
        control: [
          "Use neem leaves in storage bags",
          "Ensure proper drying before storage",
        ],
        recommendedPesticides: ["Phosphine tablets"],
      },
    ],
    fertilizers: {
      basal: ["Not applicable (post-harvest)"],
      topDressing: ["Not applicable"],
    },
    tips: [
      "Dry rice properly before storage to avoid fungal growth",
      "Store in jute or HDPE bags with neem leaves",
      "Maintain hygiene in godowns to prevent infestation",
    ],
  },

  {
    id: "wheat",
    name: "Wheat",
    category: "cereal",
    soil: ["loamy", "clay_loam"],
    water: "medium",
    investmentPerAcre: 15000,
    avgYieldKgPerAcre: 3000,
    avgProfitPerAcre: 12000,
    growingDuration: 5,
    seasons: ["rabi"],
    plantingMonths: [11, 12],
    harvestMonths: [3, 4],
    recommendedVarieties: ["HD 2967", "PBW 343", "Lok-1"],
    commonPests: [
      {
        name: "Aphids",
        impact: "Suck plant sap and reduce grain filling.",
        control: ["Use yellow sticky traps", "Encourage ladybird beetles"],
        recommendedPesticides: ["Imidacloprid", "Thiamethoxam"],
      },
      {
        name: "Armyworm",
        impact: "Chews foliage causing yield loss.",
        control: ["Handpick larvae", "Flood the field"],
        recommendedPesticides: ["Chlorpyrifos", "Lambda-cyhalothrin"],
      },
    ],
    fertilizers: {
      basal: ["DAP – 50 kg/acre", "MOP – 20 kg/acre"],
      topDressing: [
        "Urea – 40 kg/acre at CRI stage",
        "Urea – 40 kg/acre at booting",
      ],
    },
    tips: [
      "Ensure timely sowing in November for best results",
      "Maintain proper seed rate to avoid lodging",
      "Irrigate at CRI, booting, and grain filling stages",
    ],
  },

  
  //cereals
    {
    id: "maize",
    name: "Maize",
    category: "cereal",
    soil: ["sandy_loam", "alluvial"],
    water: "medium",
    investmentPerAcre: 12000,
    avgYieldKgPerAcre: 2000,
    avgProfitPerAcre: 10000,
    growingDuration: 4,
    seasons: ["kharif", "rabi"],
    plantingMonths: [6, 7, 10],
    harvestMonths: [9, 2],
    recommendedVarieties: ["HQPM-1", "Ganga-5", "Vivek 9"],
    commonPests: [
      {
        name: "Stem Borer",
        impact: "Bores into maize stems reducing grain filling.",
        control: ["Use pheromone traps", "Destroy affected plants"],
        recommendedPesticides: ["Chlorantraniliprole", "Carbaryl"],
      },
      {
        name: "Fall Armyworm",
        impact: "Feeds on leaves, whorl, and tassel of maize.",
        control: ["Intercrop with legumes", "Apply neem extracts"],
        recommendedPesticides: ["Spinosad", "Emamectin benzoate"],
      },
    ],
    fertilizers: {
      basal: ["DAP – 40 kg/acre", "MOP – 20 kg/acre"],
      topDressing: [
        "Urea – 30 kg/acre at knee-high stage",
        "Urea – 30 kg/acre at tasseling",
      ],
    },
    tips: [
      "Avoid waterlogging for better root growth",
      "Rotate crops to break pest cycles",
      "Harvest at physiological maturity for higher yields",
    ],
  },

  {
    id: "millets",
    name: "Millets",
    category: "cereal",
    soil: ["sandy", "loamy"],
    water: "low",
    investmentPerAcre: 9000,
    avgYieldKgPerAcre: 1000,
    avgProfitPerAcre: 8000,
    growingDuration: 3,
    seasons: ["kharif"],
    plantingMonths: [6, 7],
    harvestMonths: [9, 10],
    recommendedVarieties: ["HHB 67", "ICTP 8203", "Raj 171"],
    commonPests: [
      {
        name: "Shoot Fly",
        impact: "Causes dead hearts in young plants.",
        control: ["Early sowing", "Use resistant varieties"],
        recommendedPesticides: ["Imidacloprid", "Chlorpyrifos"],
      },
      {
        name: "Downy Mildew",
        impact: "Fungal disease causing stunted growth.",
        control: ["Use disease-free seeds", "Crop rotation"],
        recommendedPesticides: ["Metalaxyl", "Mancozeb"],
      },
    ],
    fertilizers: {
      basal: ["DAP – 30 kg/acre"],
      topDressing: ["Urea – 20 kg/acre at 25 DAS"],
    },
    tips: [
      "Sow with onset of monsoon for good germination",
      "Intercrop with legumes to improve soil fertility",
    ],
  },

  // 🌱 Pulses
  {
    id: "pulses",
    name: "Pulses (Gram/Arhar/Moong)",
    category: "pulse",
    soil: ["loamy", "sandy_loam"],
    water: "low",
    investmentPerAcre: 8000,
    avgYieldKgPerAcre: 1000,
    avgProfitPerAcre: 7000,
    growingDuration: 3,
    seasons: ["rabi", "kharif"],
    plantingMonths: [7, 10],
    harvestMonths: [10, 3],
    recommendedVarieties: ["Pusa 256", "Pusa 372", "Pusa Arhar-16"],
    commonPests: [
      {
        name: "Pod Borer",
        impact: "Feeds on flowers and pods, reduces yield.",
        control: ["Install pheromone traps", "Neem oil spray"],
        recommendedPesticides: ["Spinosad", "Chlorantraniliprole"],
      },
      {
        name: "Wilt",
        impact: "Fungal wilt causes yellowing and death.",
        control: ["Rotate crops", "Seed treatment with Trichoderma"],
        recommendedPesticides: ["Carbendazim", "Captan"],
      },
    ],
    fertilizers: {
      basal: ["DAP – 20 kg/acre"],
      topDressing: ["Urea – 15 kg/acre at flowering"],
    },
    tips: [
      "Avoid excess irrigation as pulses are drought-tolerant",
      "Use Rhizobium culture for better nitrogen fixation",
      "Harvest when pods turn brown and hard",
    ],
  },

  {
    id: "gram",
    name: "Gram (Chickpea)",
    category: "pulse",
    soil: ["black", "sandy_loam"],
    water: "low",
    investmentPerAcre: 9000,
    avgYieldKgPerAcre: 1100,
    avgProfitPerAcre: 8000,
    growingDuration: 4,
    seasons: ["rabi"],
    plantingMonths: [10, 11],
    harvestMonths: [2, 3],
    recommendedVarieties: ["JG 11", "Pusa 362", "JG 130"],
    commonPests: [
      {
        name: "Helicoverpa (Pod Borer)",
        impact: "Damages pods and reduces seed yield.",
        control: ["Neem spray", "Use NPV bio-control"],
        recommendedPesticides: ["Spinosad", "Chlorpyrifos"],
      },
      {
        name: "Fusarium Wilt",
        impact: "Soil-borne fungus causes sudden plant death.",
        control: ["Use resistant varieties", "Crop rotation"],
        recommendedPesticides: ["Carbendazim"],
      },
    ],
    fertilizers: {
      basal: ["DAP – 20 kg/acre"],
      topDressing: ["Urea – 10 kg/acre at flowering"],
    },
    tips: [
      "Sow early in rabi to escape wilt incidence",
      "Avoid waterlogging",
      "Use Rhizobium inoculation for higher yield",
    ],
  },
  // 🌻 Oilseeds
  {
    id: "groundnut",
    name: "Groundnut",
    category: "oilseed",
    soil: ["sandy_loam", "light_soil"],
    water: "medium",
    investmentPerAcre: 15000,
    avgYieldKgPerAcre: 800,
    avgProfitPerAcre: 12000,
    growingDuration: 4,
    seasons: ["kharif", "rabi"],
    plantingMonths: [6, 10],
    harvestMonths: [10, 2],
    recommendedVarieties: ["JL 24", "GG 20", "ICGV 91114"],
    commonPests: [
      {
        name: "Leaf Miner",
        impact: "Larvae mine leaves, reducing photosynthesis.",
        control: ["Use light traps", "Encourage natural predators"],
        recommendedPesticides: ["Chlorpyrifos", "Quinalphos"],
      },
      {
        name: "Tikka Disease",
        impact: "Causes leaf spots and defoliation.",
        control: ["Use disease-free seeds", "Crop rotation"],
        recommendedPesticides: ["Mancozeb", "Chlorothalonil"],
      },
    ],
    fertilizers: {
      basal: ["Gypsum – 200 kg/acre", "SSP – 60 kg/acre"],
      topDressing: ["Urea – 20 kg/acre at flowering"],
    },
    tips: [
      "Maintain optimum plant population",
      "Avoid excess irrigation during flowering",
      "Harvest when most pods are mature and hardened",
    ],
  },

  {
    id: "sunflower",
    name: "Sunflower",
    category: "oilseed",
    soil: ["loamy", "alluvial"],
    water: "medium",
    investmentPerAcre: 14000,
    avgYieldKgPerAcre: 900,
    avgProfitPerAcre: 11000,
    growingDuration: 3,
    seasons: ["kharif", "rabi"],
    plantingMonths: [6, 10],
    harvestMonths: [9, 1],
    recommendedVarieties: ["Morden", "TNAU Sunflower Hybrid-2", "DRSH-1"],
    commonPests: [
      {
        name: "Head Borer",
        impact: "Feeds on sunflower heads, reduces seed set.",
        control: ["Install pheromone traps", "Encourage Trichogramma"],
        recommendedPesticides: ["Spinosad", "Chlorpyrifos"],
      },
      {
        name: "Downy Mildew",
        impact: "Affects leaves and slows plant growth.",
        control: ["Use resistant hybrids", "Fungicide seed treatment"],
        recommendedPesticides: ["Metalaxyl", "Mancozeb"],
      },
    ],
    fertilizers: {
      basal: ["DAP – 30 kg/acre"],
      topDressing: [
        "Urea – 25 kg/acre at 30 DAS",
        "Urea – 20 kg/acre at flowering",
      ],
    },
    tips: [
      "Maintain spacing of 60x30 cm",
      "Avoid waterlogging to reduce disease",
      "Harvest when back of the head turns yellow-brown",
    ],
  },

  // 💰 Cash Crops
  {
    id: "cotton",
    name: "Cotton",
    category: "cash crop",
    soil: ["black", "alluvial"],
    water: "medium",
    investmentPerAcre: 25000,
    avgYieldKgPerAcre: 1500,
    avgProfitPerAcre: 20000,
    growingDuration: 6,
    seasons: ["kharif"],
    plantingMonths: [6, 7],
    harvestMonths: [11, 12],
    recommendedVarieties: ["Bunny Bt", "RCH 2 Bt", "Suraj"],
    commonPests: [
      {
        name: "Bollworm",
        impact: "Feeds on cotton bolls, reducing lint quality.",
        control: ["Use Bt cotton hybrids", "Install pheromone traps"],
        recommendedPesticides: ["Chlorantraniliprole", "Emamectin benzoate"],
      },
      {
        name: "Whitefly",
        impact: "Transmits leaf curl virus, reduces yield.",
        control: ["Avoid excessive nitrogen", "Encourage natural predators"],
        recommendedPesticides: ["Imidacloprid", "Acetamiprid"],
      },
    ],
    fertilizers: {
      basal: ["DAP – 40 kg/acre", "MOP – 20 kg/acre"],
      topDressing: [
        "Urea – 25 kg/acre at square formation",
        "Urea – 25 kg/acre at boll formation",
      ],
    },
    tips: [
      "Follow crop rotation with cereals/pulses",
      "Avoid continuous cotton cultivation",
      "Maintain field sanitation to reduce pest build-up",
    ],
  },

  {
    id: "sugarcane",
    name: "Sugarcane",
    category: "cash crop",
    soil: ["loamy", "alluvial", "black"],
    water: "high",
    investmentPerAcre: 40000,
    avgYieldKgPerAcre: 40000,
    avgProfitPerAcre: 30000,
    growingDuration: 12,
    seasons: ["annual"],
    plantingMonths: [2, 3, 10],
    harvestMonths: [1, 12],
    recommendedVarieties: ["Co 86032", "Co 94012", "Co 0238"],
    commonPests: [
      {
        name: "Early Shoot Borer",
        impact: "Causes dead hearts in young canes.",
        control: ["Use resistant varieties", "Destroy infested clumps"],
        recommendedPesticides: ["Chlorpyrifos", "Carbofuran"],
      },
      {
        name: "Red Rot",
        impact: "Fungal disease causing cane drying.",
        control: ["Use resistant varieties", "Crop rotation"],
        recommendedPesticides: ["Carbendazim"],
      },
    ],
    fertilizers: {
      basal: ["FYM – 10 tons/acre", "DAP – 50 kg/acre"],
      topDressing: [
        "Urea – 40 kg/acre at 45 DAS",
        "Urea – 40 kg/acre at 90 DAS",
      ],
    },
    tips: [
      "Maintain wide row spacing for better growth",
      "Apply trash mulching to conserve soil moisture",
      "Harvest at 10–12 months for better sugar recovery",
    ],
  },

  {
    id: "tobacco",
    name: "Tobacco",
    category: "cash crop",
    soil: ["sandy_loam", "light_soil"],
    water: "low",
    investmentPerAcre: 18000,
    avgYieldKgPerAcre: 1000,
    avgProfitPerAcre: 15000,
    growingDuration: 5,
    seasons: ["rabi"],
    plantingMonths: [10, 11],
    harvestMonths: [3, 4],
    recommendedVarieties: ["Virginia Gold", "FCV Special", "HDBRG"],
    commonPests: [
      {
        name: "Aphids",
        impact: "Suck sap and transmit viral diseases.",
        control: ["Use yellow sticky traps", "Neem spray"],
        recommendedPesticides: ["Imidacloprid", "Dimethoate"],
      },
      {
        name: "Root-Knot Nematode",
        impact: "Affects root system, stunts plant growth.",
        control: ["Crop rotation", "Soil solarization"],
        recommendedPesticides: ["Carbofuran"],
      },
    ],
    fertilizers: {
      basal: ["DAP – 25 kg/acre"],
      topDressing: [
        "Urea – 20 kg/acre at 30 DAS",
        "Urea – 15 kg/acre at flowering",
      ],
    },
    tips: [
      "Maintain light irrigation, avoid waterlogging",
      "Top the plants (remove flower heads) for better leaf quality",
      "Harvest leaves at maturity stage for higher market value",
    ],
  },
  // 🍌 Fruits
  {
    id: "banana",
    name: "Banana",
    category: "fruit",
    soil: ["alluvial", "loamy"],
    water: "high",
    investmentPerAcre: 35000,
    avgYieldKgPerAcre: 25000,
    avgProfitPerAcre: 40000,
    growingDuration: 10,
    seasons: ["annual"],
    plantingMonths: [2, 3, 8, 9],
    harvestMonths: [10, 11, 12],
    recommendedVarieties: ["Grand Naine", "Robusta", "Rasthali"],
    commonPests: [
      {
        name: "Banana Weevil",
        impact: "Damages corm and roots, weakens plant.",
        control: ["Remove crop residues", "Trap and destroy adults"],
        recommendedPesticides: ["Chlorpyrifos", "Fipronil"],
      },
      {
        name: "Panama Wilt",
        impact: "Fungal disease causing yellowing and wilting.",
        control: ["Use resistant varieties", "Soil treatment with Trichoderma"],
        recommendedPesticides: ["Carbendazim"],
      },
    ],
    fertilizers: {
      basal: ["FYM – 10 tons/acre", "Urea – 50 kg/acre"],
      topDressing: [
        "Urea – 25 kg/acre at 3rd month",
        "MOP – 20 kg/acre at 6th month",
      ],
    },
    tips: [
      "Provide staking to prevent lodging",
      "Mulch with crop residues to conserve moisture",
      "Harvest when fingers are plump and angles disappear",
    ],
  },

  {
    id: "apple",
    name: "Apple",
    category: "fruit",
    soil: ["loamy", "well_drained"],
    water: "medium",
    investmentPerAcre: 50000,
    avgYieldKgPerAcre: 8000,
    avgProfitPerAcre: 60000,
    growingDuration: 12,
    seasons: ["annual"],
    plantingMonths: [1, 2, 12],
    harvestMonths: [8, 9, 10],
    recommendedVarieties: ["Red Delicious", "Golden Delicious", "Fuji"],
    commonPests: [
      {
        name: "Codling Moth",
        impact: "Larvae bore into fruits, making them unmarketable.",
        control: ["Use pheromone traps", "Encourage natural predators"],
        recommendedPesticides: ["Carbaryl", "Spinosad"],
      },
      {
        name: "Apple Scab",
        impact: "Fungal disease causing leaf and fruit spots.",
        control: ["Prune for good airflow", "Use resistant varieties"],
        recommendedPesticides: ["Mancozeb", "Captan"],
      },
    ],
    fertilizers: {
      basal: ["FYM – 20 kg/tree", "DAP – 200 g/tree"],
      topDressing: ["Urea – 200 g/tree in 2 splits"],
    },
    tips: [
      "Plant in frost-free areas above 1500m altitude",
      "Thin fruits to improve size and quality",
      "Store apples in cool conditions to extend shelf life",
    ],
  },

  {
    id: "grape",
    name: "Grape",
    category: "fruit",
    soil: ["black", "alluvial", "sandy_loam"],
    water: "medium",
    investmentPerAcre: 60000,
    avgYieldKgPerAcre: 10000,
    avgProfitPerAcre: 70000,
    growingDuration: 12,
    seasons: ["annual"],
    plantingMonths: [1, 12],
    harvestMonths: [3, 4, 8, 9],
    recommendedVarieties: ["Thompson Seedless", "Bangalore Blue", "Anab-e-Shahi"],
    commonPests: [
      {
        name: "Mealybugs",
        impact: "Excrete honeydew, leading to sooty mold.",
        control: ["Remove weeds", "Encourage predators like ladybirds"],
        recommendedPesticides: ["Chlorpyrifos", "Imidacloprid"],
      },
      {
        name: "Downy Mildew",
        impact: "Causes leaf spots and fruit rotting.",
        control: ["Ensure good drainage", "Spray preventive fungicides"],
        recommendedPesticides: ["Metalaxyl", "Mancozeb"],
      },
    ],
    fertilizers: {
      basal: ["FYM – 5 tons/acre", "SSP – 50 kg/acre"],
      topDressing: [
        "Urea – 25 kg/acre after pruning",
        "MOP – 20 kg/acre during fruit set",
      ],
    },
    tips: [
      "Provide proper trellising and pruning",
      "Avoid waterlogging to prevent root rot",
      "Harvest bunches carefully to prevent bruising",
    ],
  },

  {
    id: "orange",
    name: "Orange",
    category: "fruit",
    soil: ["loamy", "sandy_loam"],
    water: "medium",
    investmentPerAcre: 45000,
    avgYieldKgPerAcre: 8000,
    avgProfitPerAcre: 55000,
    growingDuration: 12,
    seasons: ["annual"],
    plantingMonths: [6, 7, 8],
    harvestMonths: [12, 1, 2],
    recommendedVarieties: ["Nagpur Orange", "Coorg Orange", "Kinnow"],
    commonPests: [
      {
        name: "Citrus Psylla",
        impact: "Transmits greening disease (HLB).",
        control: ["Remove infected plants", "Use resistant rootstocks"],
        recommendedPesticides: ["Imidacloprid", "Dimethoate"],
      },
      {
        name: "Citrus Canker",
        impact: "Fungal disease causing fruit blemishes.",
        control: ["Copper sprays", "Prune infected branches"],
        recommendedPesticides: ["Copper oxychloride"],
      },
    ],
    fertilizers: {
      basal: ["FYM – 10 kg/tree", "SSP – 250 g/tree"],
      topDressing: [
        "Urea – 200 g/tree in 2 splits",
        "MOP – 100 g/tree during fruiting",
      ],
    },
    tips: [
      "Irrigate at regular intervals during fruiting stage",
      "Provide windbreaks for young orchards",
      "Harvest carefully to avoid rind damage",
    ],
  },

  // 🌶️ Spices
  {
    id: "chili",
    name: "Chili",
    category: "spice",
    soil: ["sandy_loam", "black"],
    water: "medium",
    investmentPerAcre: 20000,
    avgYieldKgPerAcre: 1500,
    avgProfitPerAcre: 18000,
    growingDuration: 4,
    seasons: ["kharif", "rabi"],
    plantingMonths: [6, 10],
    harvestMonths: [9, 2],
    recommendedVarieties: ["Byadgi", "Guntur Chili", "Pusa Jwala"],
    commonPests: [
      {
        name: "Thrips",
        impact: "Cause leaf curling and reduced fruit set.",
        control: ["Spray neem oil", "Install blue sticky traps"],
        recommendedPesticides: ["Fipronil", "Imidacloprid"],
      },
      {
        name: "Fruit Rot",
        impact: "Fungal disease causing rotting of pods.",
        control: ["Improve field drainage", "Fungicide sprays"],
        recommendedPesticides: ["Carbendazim", "Mancozeb"],
      },
    ],
    fertilizers: {
      basal: ["Urea – 20 kg/acre", "SSP – 25 kg/acre"],
      topDressing: [
        "Urea – 15 kg/acre at flowering",
        "MOP – 10 kg/acre during fruit set",
      ],
    },
    tips: [
      "Avoid overhead irrigation during flowering",
      "Dry harvested chilies in shade to retain color",
      "Rotate with cereals/pulses to reduce pest buildup",
    ],
  },

  {
    id: "cardamom",
    name: "Cardamom",
    category: "spice",
    soil: ["loamy", "forest_soil"],
    water: "high",
    investmentPerAcre: 60000,
    avgYieldKgPerAcre: 400,
    avgProfitPerAcre: 70000,
    growingDuration: 24,
    seasons: ["perennial"],
    plantingMonths: [6, 7],
    harvestMonths: [10, 11, 12],
    recommendedVarieties: ["Malabar", "Mysore", "Vazhukka"],
    commonPests: [
      {
        name: "Shoot Borer",
        impact: "Damages pseudostems, reduces productivity.",
        control: ["Remove infected tillers", "Maintain shade regulation"],
        recommendedPesticides: ["Quinalphos", "Lambda-cyhalothrin"],
      },
      {
        name: "Capsule Rot",
        impact: "Fungal disease affecting capsules.",
        control: ["Improve drainage", "Apply Trichoderma"],
        recommendedPesticides: ["Copper oxychloride", "Metalaxyl"],
      },
    ],
    fertilizers: {
      basal: ["FYM – 10 kg/plant", "SSP – 100 g/plant"],
      topDressing: ["Urea – 100 g/plant in 2 splits"],
    },
    tips: [
      "Maintain 50% overhead shade",
      "Regular mulching to conserve moisture",
      "Harvest capsules when they just start turning yellow",
    ],
  },

  // 🌴 Plantation crops
  {
    id: "coconut",
    name: "Coconut",
    category: "plantation",
    soil: ["sandy", "loamy"],
    water: "high",
    investmentPerAcre: 50000,
    avgYieldKgPerAcre: 10000,
    avgProfitPerAcre: 70000,
    growingDuration: 60,
    seasons: ["perennial"],
    plantingMonths: [6, 7],
    harvestMonths: [12, 1, 2, 3],
    recommendedVarieties: ["West Coast Tall", "Dwarf Orange", "Hybrid (Kera Sankara)"],
    commonPests: [
      {
        name: "Rhinoceros Beetle",
        impact: "Bores into crown and damages fronds.",
        control: ["Apply neem cake", "Use pheromone traps"],
        recommendedPesticides: ["Chlorpyrifos"],
      },
      {
        name: "Root Wilt",
        impact: "Causes leaf flaccidity and reduced yield.",
        control: ["Use resistant varieties", "Nutrient management"],
        recommendedPesticides: [],
      },
    ],
    fertilizers: {
      basal: ["FYM – 30 kg/tree", "DAP – 500 g/tree"],
      topDressing: [
        "Urea – 500 g/tree in 2 splits",
        "MOP – 500 g/tree annually",
      ],
    },
    tips: [
      "Maintain proper spacing (7.5x7.5 m)",
      "Mulch basins to conserve moisture",
      "Harvest nuts at 11–12 months for copra",
    ],
  },

  {
    id: "rubber",
    name: "Rubber",
    category: "plantation",
    soil: ["lateritic", "loamy"],
    water: "high",
    investmentPerAcre: 80000,
    avgYieldKgPerAcre: 2000,
    avgProfitPerAcre: 100000,
    growingDuration: 84,
    seasons: ["perennial"],
    plantingMonths: [6, 7],
    harvestMonths: [12, 1, 2, 3],
    recommendedVarieties: ["RRII 105", "RRII 430", "PB 260"],
    commonPests: [
      {
        name: "Leaf Fall Disease",
        impact: "Causes premature leaf fall reducing latex yield.",
        control: ["Spray preventive fungicides", "Maintain hygiene"],
        recommendedPesticides: ["Copper oxychloride"],
      },
      {
        name: "Root Rot",
        impact: "Fungal disease affecting roots.",
        control: ["Soil drenching with Trichoderma"],
        recommendedPesticides: ["Hexaconazole"],
      },
    ],
    fertilizers: {
      basal: ["FYM – 10 kg/plant", "DAP – 200 g/plant"],
      topDressing: ["Urea – 200 g/plant annually"],
    },
    tips: [
      "Maintain contour planting in hilly areas",
      "Tapping starts after 6–7 years of planting",
      "Harvest latex early morning for better yield",
    ],
  },
];
