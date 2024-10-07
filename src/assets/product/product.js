import Strawberry1 from "../product/fruit/1.Phil Greig Strawberry Gardens-strawberry1.png";
import Strawberry2 from "../product/fruit/1.Phil Greig Strawberry Gardens-strawberry2.png";
import Apple1 from "../product/fruit/3.Windmill Orchards Ltd-apple1.png";
import Apple2 from "../product/fruit/3.Windmill Orchards Ltd-apple2.png";
import Apple3 from "../product/fruit/3.Windmill Orchards Ltd-apple3.png";
import lettuce1 from "../product/salad/5.Riverhead Fresh Farms-lettuce1.png";
import lettuce2 from "../product/salad/5.Riverhead Fresh Farms-lettuce2.png";
import lettuce3 from "../product/salad/5.Riverhead Fresh Farms-lettuce3.png";
import potato1 from "../product/vege/2.Te Puea Orchard-potato1.png";
import potato2 from "../product/vege/2.Te Puea Orchard-potato2.png";
import carrot1 from "../product/vege/5.Riverhead Fresh Farms-carrot1.png";
import carrot2 from "../product/vege/5.Riverhead Fresh Farms-carrot2.png";
import onion1 from "../product/vege/4.Westgate Green Farms-onion1.png";
import onion2 from "../product/vege/4.Westgate Green Farms-onion2.png";
import carrot1_1 from "../product/vege/7.Golden Roots Ltd-carrot1.png";
import carrot2_1 from "../product/vege/6.Orange Grove Farm Ltd-carrot1.png";
import carrot3_1 from "../product/vege/8.Pure Soil Farms Ltd-carrot1.png";
import carrot4_1 from "../product/vege/9.Green Thumb Gardens-carrot1.png";
import sweetPotato1 from "../product/vege/9.Green Thumb Gardens-sweet potato1.png";
import sweetPotato1_2 from "../product/vege/9.Green Thumb Gardens-sweet potato2.png";
import carrot5_1 from "../product/vege/10.Sunshine Acres-carrot1.png";
import burger_lettuce from "../product/salad/Beyond Organics-Burger lettuce.jpg";
import garlic from "../product/vege/Beyond Organics-Elephant garlic.jpg";
import watercress from "../product/salad/Beyond Organics-Watercress.jpg";
import oakley_potato from "../product/vege/Oakley’s-potato.png";
import oakley_pumpkin from "../product/vege/Oakley’s-pumpkin.png";
import Apata_kiwi from "../product/fruit/Apata-kiwi fruits.png";
import Apata_avocado from "../product/fruit/Apata-Avocado.png";
import wilcox_carrot from "../product/vege/Wilcox-Carrot-Beta Bites.jpg";
const product = [
  {
    id: 1,
    category: "fruit",
    name: "strawberry",
    farm: "Phil Greig Strawberry Gardens",
    image1: Strawberry1,
    image2: Strawberry2,
    image3: "",
    description:
      "All our strawberries are harvested in the morning and delivered on the same day. Grown using eco-friendly methods, they are safe and healthy for you to enjoy.",
    organic: true,
    onStock: true,
    wonkey: true,
    score: 4,
    price: {
      "750g": 2.0,
      "1.5kg": 4.0,
      "3kg": 7.0,
    },
  },
  {
    id: 3,
    name: "Apple",
    category: "fruit",
    farm: "Windmill Orchards Ltd",
    image1: Apple1,
    image2: Apple2,
    image3: Apple3,
    description:
      "We minimize the use of pesticides and chemical fertilizers in our apple production. Our farm is powered by wind energy, reducing our environmental impact. Through these sustainable practices, we offer apples that consumers can trust, from our farm to their table.",
    organic: true,
    onStock: true,
    wonkey: true,
    score: 5,
    price: {
      "750g": 2.0,
      "1.5kg": 4.0,
      "3kg": 7.0,
    },
  },
  {
    id: 5,
    category: "salad",
    name: "Lettuce",
    farm: "Riverhead Fresh Farms",
    image1: lettuce1,
    image2: lettuce2,
    image3: lettuce3,
    description:
      "At Riverhead Fresh Farms, we minimize the use of pesticides and chemical fertilizers to grow healthy vegetables in their natural state. We are committed to sustainable farming, considering the environment throughout the cultivation process.",
    organic: false,
    onStock: true,
    wonkey: false,
    score: 4.5,
    price: {
      "500g": 6.0,
      "1kg": 11.0,
      "2kg": 20.0,
    },
  },
  {
    id: 2,
    category: "vege",
    name: "Potato",
    farm: "Te Puea Orchard",
    image1: potato1,
    image2: potato2,
    image3: "",
    description:
      "All potatoes are freshly harvested and delivered the same day. We minimize the use of chemical fertilizers and pesticides, offering naturally healthy potatoes.",
    organic: false,
    onStock: false,
    wonkey: true,
    score: 5,
    price: {
      "1kg": 1,
      "2kg": 2,
    },
  },
  {
    id: 4,
    category: "vege",
    name: "Oninon",
    farm: "Westgate Green Farms",
    image1: onion1,
    image2: onion2,
    image3: "",
    description:
      "At Westgate Green Farms, we use the latest farming technologies and strict quality control measures to grow our produce. From cultivation to harvest and packaging, we prioritize safety and quality to provide reliable onions.",
    organic: false,
    onStock: true,
    wonkey: true,
    score: 4.7,
    price: {
      "1kg": 2,
      "2kg": 3,
      "5kg": 8,
    },
  },
  {
    id: 5,
    category: "vege",
    name: "Carrot",
    farm: "Riverhead Fresh Farms",
    image1: carrot1,
    image2: carrot2,
    image3: "",
    description:
      "At Riverhead Fresh Farms, we minimize the use of pesticides and chemical fertilizers to grow healthy vegetables in their natural state. We are committed to sustainable farming, considering the environment throughout the cultivation process.",
    organic: false,
    onStock: false,
    wonkey: false,
    score: 4.5,
    price: {
      "500g": 1,
      "1kg": 1.5,
      "2kg": 3,
    },
  },
  {
    id: 6,
    category: "vege",
    name: "Carrot",
    farm: "Orange Grove Farm Ltd",
    image1: carrot2_1,
    image2: "",
    image3: "",
    description:
      "we harness solar energy to reduce our carbon footprint while maintaining high standards in carrot production.",
    organic: false,
    onStock: false,
    wonkey: false,
    score: 4.6,
    price: {
      "500g": 2,
      "1kg": 4,
      "2kg": 8,
    },
  },
  {
    id: 7,
    category: "vege",
    name: "Carrot",
    farm: "Golden Roots Ltd",
    image1: carrot1_1,
    image2: "",
    image3: "",
    description: "Get your eco-friendly carrots from Golden Roots Ltd today!",
    organic: false,
    onStock: true,
    wonkey: true,
    score: 5,
    price: {
      "500g": 1.5,
      "1kg": 3,
      "2kg": 6,
    },
  },
  {
    id: 8,
    category: "vege",
    name: "Carrot",
    farm: "Pure Soil Farms Ltd",
    image1: carrot3_1,
    image2: "",
    image3: "",
    description:
      "Our farm runs on renewable energy and uses regenerative farming techniques to ensure that every carrot you enjoy is both healthy and sustainable.",
    organic: true,
    onStock: true,
    wonkey: false,
    score: 4,
    price: {
      "500g": 2.5,
      "1kg": 4,
      "2kg": 8,
    },
  },
  {
    id: 9,
    category: "vege",
    name: "Carrot",
    farm: "Green Thumb Gardens",
    image1: carrot4_1,
    image2: "",
    image3: "",
    description:
      "Our farm runs on renewable energy and uses regenerative farming techniques to ensure that every carrot you enjoy is both healthy and sustainable.",
    organic: false,
    onStock: true,
    wonkey: true,
    score: 4.8,
    price: {
      "500g": 1,
      "1kg": 2,
      "2kg": 3.5,
    },
  },
  {
    id: 9,
    category: "vege",
    name: "Sweet Potato",
    farm: "Green Thumb Gardens",
    image1: sweetPotato1,
    image2: sweetPotato1_2,
    image3: "",
    description:
      "Our farm runs on renewable energy and uses regenerative farming techniques to ensure that every carrot you enjoy is both healthy and sustainable.",
    organic: false,
    onStock: false,
    wonkey: true,
    score: 4.8,
    price: {
      "1kg": 4,
      "2kg": 8,
    },
  },
  {
    id: 10,
    category: "vege",
    name: "Carrot",
    farm: "Sunshine Acres",
    image1: carrot5_1,
    image2: "",
    image3: "",
    description: "Enjoy fresh, organic carrots from Sunshine Acres today!",
    organic: false,
    onStock: false,
    wonkey: true,
    score: 4.8,
    price: {
      "500g": 2,
      "1kg": 3,
      "2kg": 6,
    },
  },

  {
    id: 11,
    category: "salad",
    name: "Burger Lettuce",
    farm: "Beyond Organics",
    image1: burger_lettuce,
    image2: "",
    image3: "",
    description:
      "Organic Burger Lettuce is a premium variety of lettuce grown using sustainable, pesticide-free methods.",
    organic: true,
    onStock: true,
    wonkey: false,
    score: 5,
    price: {
      "150g": 5,
    },
  },
  {
    id: 11,
    category: "vege",
    name: "Elephant garlic ",
    farm: "Beyond Organics",
    image1: garlic,
    image2: "",
    image3: "",
    description:
      "Organic Elephant Garlic is a unique and mild-flavored garlic variety, known for its large bulb size and delicate taste. ",
    organic: true,
    onStock: true,
    wonkey: false,
    score: 4,
    price: {
      "180g": 10.99,
    },
  },
  {
    id: 11,
    category: "salad",
    name: "Watercress",
    farm: "Beyond Organics",
    image1: watercress,
    image2: "",
    image3: "",
    description:
      "One bunch of watercress grown in Masterton in water without any sprays.",
    organic: true,
    onStock: true,
    wonkey: false,
    score: 4,
    price: {
      "1 bunch": 10.99,
    },
  },
  {
    id: 12,
    category: "vege",
    name: "Potato-Baby Golden Gourmets",
    farm: "Oakley’s",
    image1: oakley_potato,
    image2: "",
    image3: "",
    description:
      "Tasty & innovative: our most popular spud yet. The Baby Golden Gourmet is perfect for the modern family who want a high quality, versatile and delicious potato",
    organic: false,
    onStock: true,
    wonkey: true,
    score: 5,
    price: {
      "1.5kg": 2.99,
    },
  },
  {
    id: 12,
    category: "vege",
    name: "Pumpkin",
    farm: "Oakley’s",
    image1: oakley_pumpkin,
    image2: "",
    image3: "",
    description:
      "Naturally gluten-free, these spuds are a nutritional goldmine, bursting with vitamins and minerals. Vitamin C strengthens your immune system and folate boosts energy. ",
    organic: false,
    onStock: true,
    wonkey: true,
    score: 4,
    price: {
      "1 EA": 4.99,
    },
  },
  {
    id: 13,
    category: "fruit",
    name: "Kiwi fruits",
    farm: "Apata",
    image1: Apata_kiwi,
    image2: "",
    image3: "",
    description:
      "As the compliance regime in place for conventional kiwifruit production has continually evolved, Apata’s vigilance has ensured we continue to generate and maintain premiums for organic kiwifruit.",
    organic: true,
    onStock: true,
    wonkey: true,
    score: 5,
    price: {
      "1kg": 3.99,
    },
  },
  {
    id: 13,
    category: "fruit",
    name: "Avocado",
    farm: "Apata",
    image1: Apata_avocado,
    image2: "",
    image3: "",
    description:
      "For avocado crops, our fruit washing and phytosanitary regimes are second to none and, when coupled with our hi-tech grading and packing equipment, give us the capability to run the most comprehensive harvest and packing programme in the industry.",
    organic: false,
    onStock: true,
    wonkey: true,
    score: 4,
    price: {
      "1kg": 1.99,
    },
  },
  {
    id: 14,
    category: "vege",
    name: "Carrot-Beta Bites",
    farm: "Wilcox",
    image1: wilcox_carrot,
    image2: "",
    image3: "",
    description:
      "Beta Bites have been specially grown as perfectly sized, deliciously sweet, snackable carrots, ready to crunch on any time.",
    organic: false,
    onStock: true,
    wonkey: true,
    score: 5,
    price: {
      "250g": 2.5,
    },
  },
];
export default product;
