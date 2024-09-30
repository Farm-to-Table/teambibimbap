import Strawberry1 from "../../product/fruit/1.Phil Greig Strawberry Gardens-strawberry1.png";
import Strawberry2 from "../../product/fruit/1.Phil Greig Strawberry Gardens-strawberry2.png";
import Apple1 from "../../product/fruit/3.Windmill Orchards Ltd-apple1.png";
import Apple2 from "../../product/fruit/3.Windmill Orchards Ltd-apple2.png";
import Apple3 from "../../product/fruit/3.Windmill Orchards Ltd-apple3.png";
const fruit = [
  {
    id: 1,
    catergory: "fruit",
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
    catergory: "fruit",
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
export default fruit;
