import PhilGreig_main from "../assets/farmImage/Phil Greig Strawberry Gardens-main.png";
import PhilGreig_profile from "../assets/farmImage/Phil Greig Strawberry Gardens-profile.png";
import Tepuea_profile from "../assets/farmImage/Te Puea Orchard-profile.png";
import Tepuea_main from "../assets/farmImage/Te Puea Orchard-main.png";
import Windmill_main from "../assets/farmImage/Windmill Orchards Ltd-main.png";
import Windmill_profile from "../assets/farmImage/Windmill Orchards Ltd-profile.png";
import Sunshine_main from "../assets/farmImage/Sunshine Acres-main.png";
import Sunshine_profile from "../assets/farmImage/Sunshine Acres-profile.png";
import Riverhead_main from "../assets/farmImage/Riverhead Fresh Farms-main.png";
import Riverhead_profile from "../assets/farmImage/Riverhead Fresh Farms-profile.png";
import PureOil_main from "../assets/farmImage/Pure Soil Farms Ltd-main.jpg";
import PureOil_profile from "../assets/farmImage/Pure Soil Farms Ltd-profile.png";
import OrangeGrove_main from "../assets/farmImage/Orange Grove Farm Ltd-main.png";
import OrangeGrove_profile from "../assets/farmImage/Orange Grove Farm Ltd-profile.png";
import GreenThumb_main from "../assets/farmImage/Green Thumb Gardens-main.png";
import GreenThumb_profile from "../assets/farmImage/Golden Roots Ltd-profle.png";
import GoldenRoots_main from "../assets/farmImage/Golden Roots Ltd-main.png";
import Riverbank_main from "../assets/farmImage/Golden Roots Ltd-profle.png";
import WestGate_main from "../assets/farmImage/Westgate Green Farms-main.png";
import WestGate_profile from "../assets/farmImage/Windmill Orchards Ltd-profile.png";
import Strawberry1 from "../assets/product/fruit/1.Phil Greig Strawberry Gardens-strawberry1.png";
import Strawberry2 from "../assets/product/fruit/1.Phil Greig Strawberry Gardens-strawberry2.png";
const farms = [
  {
    id: 1,
    name: "Phil Greig Strawberry Gardens",
    address: "464 State Highway 16, Kumeū 0892 New Zealand",
    position: [-36.78297199153514, 174.57092580444115],
    introduction:
      "Phil Greig Strawberry Gardens is a family-owned farm dedicated to growing strawberries in the beautiful natural surroundings of New Zealand. We take pride in using sustainable and eco-friendly methods to ensure the highest quality and freshness. Our strawberries are handpicked and delivered directly to our customers, bringing the best of our fields to your table.",
    main_image: PhilGreig_main,
    profile_image: PhilGreig_profile,
    score: 4,
    products: [
      {
        product_image1: Strawberry1,
        product_image2: Strawberry2,
        product: "Strawberry",
        varieties: {
          Albion:
            "A popular variety known for its sweet flavor and juicy texture.",
          Gaviota:
            "A variety characterized by its rich taste and fragrant aroma.",
          Queen_Elizabeth:
            "A harmonious blend of strong fragrance and sweetness.",
        },
        size: "Med, Large",
        weight: ["250g", "500g", "1kg"],

        quality:
          "All our strawberries are harvested in the morning and delivered on the same day. Grown using eco-friendly methods, they are safe and healthy for you to enjoy.",
        contact: "+64 9 412 7329",
      },
    ],
  },
  {
    id: 2,
    name: "Te Puea Orchard",
    address: "69 Te Puea Road, Tikitere, Rotorua 3074, New Zealand",
    position: [-38.060341030557225, 176.34872980240374],
    introduction:
      "We grow fresh potatoes nurtured by the pristine natural environment. Our farm is committed to sustainable farming practices, minimizing the use of chemical fertilizers and pesticides to provide safe and healthy potatoes. We take pride in delivering the freshness of nature to our customers through produce grown with the care and dedication of our family.",
    main_image: Tepuea_main,
    profile_image: Tepuea_profile,
    score: 5,
    products: [
      {
        product_image1: "",
        product_image2: "",
        product: "Potato",
        varieties: {
          King_Edward:
            "Soft and creamy in texture, perfect for mashing or roasting.",
          Rua: "Firm and moist, ideal for frying or steaming.",
        },
        size: "",
        weight: [500, 1000, 2000],
        quality:
          "All potatoes are freshly harvested and delivered the same day. We minimize the use of chemical fertilizers and pesticides, offering naturally healthy potatoes.",
        price: {
          "1kg": 1.0,
          "2kg": 2.0,
        },
        contact: "+64 7 345 5111",
      },
    ],
  },
  {
    id: 3,
    name: "Windmill Orchards Ltd",
    address: "294 Coatesville Riverhead Highway, Coatesville 0793, New Zealand",
    position: [-36.71655316964964, 174.6403157413689],
    introduction:
      "Windmill Orchards Ltd is a specialized apple farm that practices eco-friendly agriculture in the green fields and fresh air of New Zealand. Our farm proudly carries on a long-standing tradition and achieves sustainable farming by harnessing wind energy for clean, renewable power. Each morning, with the gentle sound of windmills turning, our carefully cultivated apples offer the perfect choice for a healthy lifestyle.",
    main_image: Windmill_main,
    profile_image: Windmill_profile,
    score: 5,
    products: [
      {
        product_image1: "",
        product_image2: "",
        product: "Apple",
        varieties: {
          Royal_Gala: "Juicy and sweet, perfect as a snack for children.",
          Braeburn:
            "Known for its tangy flavor, ideal for salads or as a cooking ingredient.",
        },
        size: "",
        weight: [750, 1500, 3000],
        quality:
          "We minimize the use of pesticides and chemical fertilizers in our apple production. Our farm is powered by wind energy, reducing our environmental impact. Through these sustainable practices, we offer apples that consumers can trust, from our farm to their table.",
        price: {
          "750g": 2.0,
          "1.5kg": 4.0,
          "3kg": 7.0,
        },
        contact: "+64 9 415 9497",
      },
    ],
  },
  {
    id: 4,
    name: "Westgate Green Farms",
    address: "45 Fred Taylor Drive, Westgate, Auckland 0814, New Zealand",
    position: [-36.81710534995453, 174.6022593914032],
    introduction:
      "Westgate Green Farms is located in the rich agricultural region of West Auckland, specializing in growing fresh onions. We practice sustainable farming through collaboration with the local community and maintain the highest quality by incorporating modern farming techniques. Our fresh and flavorful onions will enhance the taste of any dish you prepare.",
    main_image: WestGate_main,
    profile_image: WestGate_profile,
    score: 4.7,
    products: [
      {
        product_image1: "",
        product_image2: "",
        product: "Onion",
        varieties: {
          Brown_Onions:
            "A staple ingredient for cooking, offering a sweet and rich flavor.",
        },
        size: "",
        weight: [1000, 2000, 5000],
        quality:
          "We use the latest farming technologies and strict quality control measures to ensure safety and reliability in our onions.",
        price: {
          "1kg": 2.0,
          "2kg": 3.0,
          "5kg": 8.0,
        },
        contact: "+64 9 416 6040",
      },
    ],
  },
  {
    id: 5,
    name: "Riverhead Fresh Farms",
    address: "340 Riverhead Road, Riverhead 0892, New Zealand",
    position: [-36.76172032355766, 174.5857262043191],
    introduction:
      "Riverhead Fresh Farms is an eco-friendly farm growing fresh lettuce and carrots in the natural environment of Riverhead. We respect the cycles of nature and produce healthy vegetables in an optimal growing environment, delivering healthy vegetables to our customers' tables.",
    main_image: Riverhead_main,
    profile_image: Riverhead_profile,
    score: 4.5,
    products: [
      {
        product_image1: "",
        product_image2: "",
        product: "Lettuce",
        varieties: {},
        size: "",
        weight: [500, 1000, 2000],
        quality:
          "We minimize the use of pesticides and chemical fertilizers to grow healthy vegetables in their natural state.",
        price: {
          "500g": 6.0,
          "1kg": 11.0,
          "2kg": 20.0,
        },
        contact: "+64 9 412 8933",
      },
      {
        product_image1: "",
        product_image2: "",
        product: "Carrot",
        varieties: {},
        size: "",
        weight: [500, 1000, 2000],
        quality:
          "We minimize the use of pesticides and chemical fertilizers to grow healthy vegetables in their natural state.",
        price: {
          "500g": 1.0,
          "1kg": 1.5,
          "2kg": 3.0,
        },
        contact: "+64 9 412 8933",
      },
    ],
  },
  {
    id: 6,
    name: "Orange Grove Farm Ltd",
    address: "102 Green Valley Road, Kumeu, Auckland 0891, New Zealand",
    position: [-36.771231, 174.542321],
    introduction:
      "Orange Grove Farm Ltd specializes in growing top-quality organic carrots in Kumeu. We harness solar energy to reduce our carbon footprint while maintaining high standards in carrot production.",
    main_image: OrangeGrove_main,
    profile_image: OrangeGrove_profile,
    score: 4.6,
    products: [
      {
        product_image1: "",
        product_image2: "",
        product: "Carrot",
        varieties: {
          Imperator:
            "Known for its sweet, tender taste, perfect for salads or snacking.",
          Chantenay: "A stubby, flavorful carrot, ideal for roasting.",
        },
        size: "",
        weight: [500, 1000, 2000],
        quality:
          "We use sustainable farming practices to grow high-quality organic carrots.",
        price: {
          "500g": 2.0,
          "1kg": 4.0,
          "2kg": 8.0,
        },
        contact: "+64 9 123 4567",
      },
    ],
  },
  {
    id: 7,
    name: "Golden Roots Ltd",
    address: "87 Harvest Lane, Albany, Auckland 0632, New Zealand",
    position: [-36.730125, 174.700512],
    introduction:
      "Golden Roots Ltd is dedicated to growing delicious, organic carrots using methods that are both sustainable and eco-friendly. Powered by wind energy, our farm in Albany minimizes environmental impact while maximizing quality.",
    main_image: GoldenRoots_main,
    profile_image: GreenThumb_profile, // Note: This might be a typo in the image import, using GreenThumb instead of GoldenRoots
    score: 5,
    products: [
      {
        product_image1: "",
        product_image2: "",
        product: "Carrot",
        varieties: {
          Nantes: "A crisp, juicy variety, perfect for juicing or snacking.",
          Atomic_Red: "A vibrant red carrot, loaded with antioxidants.",
        },
        size: "",
        weight: [500, 1000, 2000],
        quality:
          "We use wind energy and sustainable farming practices to grow high-quality organic carrots.",
        price: {
          "500g": 1.5,
          "1kg": 3.0,
          "2kg": 6.0,
        },
        contact: "+64 9 987 6543",
      },
    ],
  },
  {
    id: 8,
    name: "Pure Soil Farms Ltd",
    address: "250 Organic Lane, Riverhead, Auckland 0820, New Zealand",
    position: [-36.74485, 174.623927],
    introduction:
      "Pure Soil Farms Ltd is committed to growing premium-quality organic carrots. Our farm runs on renewable energy and uses regenerative farming techniques to ensure that every carrot you enjoy is both healthy and sustainable.",
    main_image: PureOil_main,
    profile_image: PureOil_profile,
    score: 4,
    products: [
      {
        product_image1: "",
        product_image2: "",
        product: "Carrot",
        varieties: {
          Danvers: "A versatile, classic carrot, perfect for soups and stews.",
          Yellowstone: "A unique yellow carrot with a mild, sweet flavor.",
        },
        size: "",
        weight: [500, 1000, 2000],
        quality:
          "We use renewable energy and regenerative farming techniques to grow premium organic carrots.",
        price: {
          "500g": 2.5,
          "1kg": 4.0,
          "2kg": 8.0,
        },
        contact: "+64 9 456 7890",
      },
    ],
  },
  {
    id: 9,
    name: "Green Thumb Gardens",
    address: "312 Eco Way, Huapai, Auckland 0891, New Zealand",
    position: [-36.7702, 174.530012],
    introduction:
      "At Green Thumb Gardens, we pride ourselves on growing fresh carrots and sweet potatoes using methods that preserve the environment. Our farm in Huapai runs on both wind and solar energy, ensuring sustainable, earth-friendly production.",
    main_image: GreenThumb_main,
    profile_image: Riverbank_main, // Note: This might be a typo in the image import, using Riverbank instead of GreenThumb
    score: 4.8,
    products: [
      {
        product_image1: "",
        product_image2: "",
        product: "Carrot",
        varieties: {
          Standard:
            "A deeply orange, flavorful variety, ideal for raw snacking.",
        },
        size: "",
        weight: [500, 1000, 2000],
        quality:
          "We use wind and solar energy for sustainable production of our carrots.",
        price: {
          "500g": 1.0,
          "1kg": 2.0,
          "2kg": 3.5,
        },
        contact: "+64 9 654 3210",
      },
      {
        product_image1: "",
        product_image2: "",
        product: "Sweet Potato",
        varieties: {
          Orange:
            "A popular orange-fleshed variety, known for its sweetness and versatility in cooking.",
        },
        size: "",
        weight: [1000, 2000],
        quality:
          "We use wind and solar energy for sustainable production of our sweet potatoes.",
        price: {
          "1kg": 4.0,
          "2kg": 8.0,
        },
        contact: "+64 9 654 3210",
      },
    ],
  },
  {
    id: 10,
    name: "Sunshine Acres",
    address: "5 Fresh Fields Drive, Waimauku, Auckland 0882, New Zealand",
    position: [-36.820212, 174.488924],
    introduction:
      "Sunshine Acres is a carrot farm in Waimauku, Auckland, where we use solar energy to power our operations. Our farm focuses on sustainable practices, offering high-quality carrots for the eco-conscious consumer.",
    main_image: Sunshine_main,
    profile_image: Sunshine_profile,
    score: 5,
    products: [
      {
        product_image1: "",
        product_image2: "",
        product: "Carrot",
        varieties: {
          Berlicum:
            "A smooth, tender carrot with a delicate sweetness, ideal for juicing.",
          Kuroda:
            "A deep orange variety, perfect for roasting or adding to savory dishes.",
        },
        size: "",
        weight: [500, 1000, 2000],
        quality:
          "We use solar energy and sustainable practices to grow high-quality carrots.",
        price: {
          "500g": 2.0,
          "1kg": 3.0,
          "2kg": 6.0,
        },
        contact: "+64 9 876 5432",
      },
    ],
  },
];

export default farms;
