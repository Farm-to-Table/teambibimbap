import sweetPotato1 from "../assets/product/vege/9.Green Thumb Gardens-sweet potato1.png";
import sweetPotato1_2 from "../assets/product/vege/9.Green Thumb Gardens-sweet potato2.png";
import lettuce1 from "../assets/product/salad/5.Riverhead Fresh Farms-lettuce1.png";
import lettuce2 from "../assets/product/salad/5.Riverhead Fresh Farms-lettuce2.png";
import lettuce3 from "../assets/product/salad/5.Riverhead Fresh Farms-lettuce3.png";
import Apple1 from "../assets/product/fruit/3.Windmill Orchards Ltd-apple1.png";
import Apple2 from "../assets/product/fruit/3.Windmill Orchards Ltd-apple2.png";
import Apple3 from "../assets/product/fruit/3.Windmill Orchards Ltd-apple3.png";

const RecommandData = [
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
    onStock: false,
    wonkey: false,
    score: 4.5,
    price: {
      "500g": 6.0,
      "1kg": 11.0,
      "2kg": 20.0,
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
];
export default RecommandData;
