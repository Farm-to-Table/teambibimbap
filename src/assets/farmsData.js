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
import lettuce1 from "../assets/product/salad/5.Riverhead Fresh Farms-lettuce1.png";
import lettuce2 from "../assets/product/salad/5.Riverhead Fresh Farms-lettuce2.png";
import lettuce3 from "../assets/product/salad/5.Riverhead Fresh Farms-lettuce3.png";
import carrot1 from "../assets/product/vege/5.Riverhead Fresh Farms-carrot1.png";
import carrot2 from "../assets/product/vege/5.Riverhead Fresh Farms-carrot2.png";
import potato1 from "../assets/product/vege/2.Te Puea Orchard-potato1.png";
import potato2 from "../assets/product/vege/2.Te Puea Orchard-potato2.png";
import apple1 from "../assets/product/fruit/3.Windmill Orchards Ltd-apple1.png";
import apple2 from "../assets/product/fruit/3.Windmill Orchards Ltd-apple2.png";
import onion1 from "../assets/product/vege/4.Westgate Green Farms-onion1.png";
import onion2 from "../assets/product/vege/4.Westgate Green Farms-onion2.png";
import carrot1_1 from "../assets/product/vege/7.Golden Roots Ltd-carrot1.png";
import carrot2_1 from "../assets/product/vege/6.Orange Grove Farm Ltd-carrot1.png";
import carrot3_1 from "../assets/product/vege/8.Pure Soil Farms Ltd-carrot1.png";
import carrot4_1 from "../assets/product/vege/9.Green Thumb Gardens-carrot1.png";
import sweetPotato1 from "../assets/product/vege/9.Green Thumb Gardens-sweet potato1.png";
import sweetPotato1_2 from "../assets/product/vege/9.Green Thumb Gardens-sweet potato2.png";
import carrot5_1 from "../assets/product/vege/10.Sunshine Acres-carrot1.png";
import Beyond_proile from "../assets/farmImage/Beyond Organics-profile.jpg";
import Beyond_main from "../assets/farmImage/Beyond Organics-main.jpg";
import burger_lettuce from "../assets/product/salad/Beyond Organics-Burger lettuce.jpg";
import garlic from "../assets/product/vege/Beyond Organics-Elephant garlic.jpg";
import watercress from "../assets/product/salad/Beyond Organics-Watercress.jpg";
import oakley_main from "../assets/farmImage/Oakley’s-main.png";
import oakley_profile from "../assets/farmImage/Oakley’s-profile.png";
import oakley_potato from "../assets/product/vege/Oakley’s-potato.png";
import oakley_pumpkin from "../assets/product/vege/Oakley’s-pumpkin.png";
import Apata_main from "../assets/farmImage/Apata-main.png";
import Apata_profile from "../assets/farmImage/Apata-profile.png";
import Apata_kiwi from "../assets/product/fruit/Apata-kiwi fruits.png";
import Apata_avocado from "../assets/product/fruit/Apata-Avocado.png";
import wilcox_main from "../assets/farmImage/Wilcox-profile.png";
import wilcox_profile from "../assets/farmImage/Wilcox-profile.png";
import wilcox_carrot from "../assets/product/vege/Wilcox-Carrot-Beta Bites.jpg";
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
        product_image1: potato1,
        product_image2: potato2,
        product: "Potato",
        varieties: {
          King_Edward:
            "Soft and creamy in texture, perfect for mashing or roasting.",
          Rua: "Firm and moist, ideal for frying or steaming.",
        },
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
        product_image1: apple1,
        product_image2: apple2,
        product: "Apple",
        varieties: {
          Royal_Gala: "Juicy and sweet, perfect as a snack for children.",
          Braeburn:
            "Known for its tangy flavor, ideal for salads or as a cooking ingredient.",
        },
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
        product_image1: onion1,
        product_image2: onion2,
        product: "Onion",
        varieties: {
          Brown_Onions:
            "A staple ingredient for cooking, offering a sweet and rich flavor.",
        },
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
        product_image1: lettuce1,
        product_image2: lettuce2,
        product: "Lettuce",
        varieties: {
          Lettuce: "Crisp and fresh, perfect for salads and various dishes.",
        },
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
        product_image1: carrot1,
        product_image2: carrot2,
        product: "Carrot",
        varieties: {
          Carrots:
            "Sweet and rich in nutrients, great as a snack and pairs well with many recipes.",
        },
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
        product_image1: carrot2_1,
        product_image2: "",
        product: "Carrot",
        varieties: {
          Imperator:
            "Known for its sweet, tender taste, perfect for salads or snacking.",
          Chantenay: "A stubby, flavorful carrot, ideal for roasting.",
        },
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
        product_image1: carrot1_1,
        product_image2: "",
        product: "Carrot",
        varieties: {
          Nantes: "A crisp, juicy variety, perfect for juicing or snacking.",
          Atomic_Red: "A vibrant red carrot, loaded with antioxidants.",
        },
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
        product_image1: carrot3_1,
        product_image2: "",
        product: "Carrot",
        varieties: {
          Danvers: "A versatile, classic carrot, perfect for soups and stews.",
          Yellowstone: "A unique yellow carrot with a mild, sweet flavor.",
        },
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
        product_image1: carrot4_1,
        product_image2: "",
        product: "Carrot",
        varieties: {
          Standard:
            "A deeply orange, flavorful variety, ideal for raw snacking.",
        },
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
        product_image1: sweetPotato1,
        product_image2: sweetPotato1_2,
        product: "Sweet Potato",
        varieties: {
          Orange:
            "A popular orange-fleshed variety, known for its sweetness and versatility in cooking.",
        },
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
        product_image1: carrot5_1,
        product_image2: "",
        product: "Carrot",
        varieties: {
          Berlicum:
            "A smooth, tender carrot with a delicate sweetness, ideal for juicing.",
          Kuroda:
            "A deep orange variety, perfect for roasting or adding to savory dishes.",
        },
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
  {
    id: 11,
    name: "Beyond Organics",
    address:
      "Hudson Bay Road Extension, Hobsonville, Auckland 0616 New Zealand",
    position: [-36.78625899360846, 174.67008385965698],
    introduction:
      "We are Beyond Organics. A family business growing food as nature intended. Seed, sun, soil & water. Taste the difference.",
    main_image: Beyond_main,
    profile_image: Beyond_proile,
    score: 5,
    products: [
      {
        product_image1: burger_lettuce,
        product_image2: "",
        product: "lettuce",
        varieties: {
          Burgerlettuce:
            "Organic Burger Lettuce is a premium variety of lettuce grown using sustainable, pesticide-free methods. Known for its crisp texture and slightly sweet flavor, this lettuce is ideal for creating the perfect burger or sandwich topping. Each leaf provides a sturdy base while maintaining tenderness, ensuring your burger stays fresh and delicious without becoming soggy. Rich in vitamins A and C, as well as dietary fiber, Organic Burger Lettuce not only enhances the taste of your meals but also contributes to a healthier diet. Its vibrant green leaves are harvested at peak freshness, delivering high quality and taste directly from farm to table.",
        },
        weight: [500, 1000, 2000],
        quality: "",
        price: {
          "150g": 5.0,
        },
        contact: "+64 9 876 5432",
      },

      {
        product_image1: watercress,
        product_image2: "",
        product: "Watercress",
        varieties: {
          Watercress:
            "Watercress is an ancient green. It is a member of the cruciferous family, alongsidekale, broccoli, arugula, and Brussels sprouts.",
        },
        weight: [500, 1000, 2000],
        quality:
          "One bunch of watercress grown in Masterton in water without any sprays.",
        price: {
          bunch: 3.2,
        },
        contact: "Instagram. @beyondorganicsnz",
      },
      {
        product_image1: garlic,
        product_image2: "",
        product: "garlic",
        varieties: {
          Elephant_garlic:
            "Organic Elephant Garlic is a unique and mild-flavored garlic variety, known for its large bulb size and delicate taste. Despite its name, it is more closely related to leeks than to traditional garlic, giving it a subtler, less pungent flavor. Elephant garlic bulbs can grow up to five times the size of regular garlic, making them perfect for roasting, grilling, or adding a gentle garlic essence to dishes without overpowering them. Rich in vitamins B6, C, and minerals like manganese and selenium, organic elephant garlic is not only a flavorful addition to meals but also a nutritious one. Grown without the use of chemical fertilizers or pesticides, it offers a cleaner, healthier option for conscious consumers.",
        },
        weight: [500, 1000, 2000],
        quality:
          "Organic Burger Lettuce is a premium variety of lettuce grown using sustainable, pesticide-free methods. Known for its crisp texture and slightly sweet flavor, this lettuce is ideal for creating the perfect burger or sandwich topping. Each leaf provides a sturdy base while maintaining tenderness, ensuring your burger stays fresh and delicious without becoming soggy. Rich in vitamins A and C, as well as dietary fiber, Organic Burger Lettuce not only enhances the taste of your meals but also contributes to a healthier diet. Its vibrant green leaves are harvested at peak freshness, delivering high quality and taste directly from farm to table.",
        price: {
          "180g": 10.99,
        },
        contact: "+64 9 876 5432",
      },
    ],
  },

  {
    id: 12,
    name: "Oakley’s",
    address: "422 Cryers Road, Southbridge 7683",
    position: [-43.84697547367785, 172.22348399999998],
    introduction:
      "There are five generations of growers in the Oakley family! We believe what we grow is the best fuel for people and supports their wellbeing. We inform customers how their vegetables are grown with packaging to reflect the quality product inside. Our premium products respect the land and bring families together. ",
    main_image: oakley_main,
    profile_image: oakley_profile,
    score: 5,
    products: [
      {
        product_image1: oakley_potato,
        product_image2: "",
        product: "potato",
        varieties: {
          Potato_Baby_Golden_Gourmets:
            "Tasty & innovative: our most popular spud yet. The Baby Golden Gourmet is perfect for the modern family who want a high quality, versatile and delicious potato. These buttery spuds are bursting with goodness from the fertile soils of Canterbury. These superstars are a multipurpose potato, so go ahead! Bake them, boil them, mash them or even throw them in a salad – The Baby Golden Gourmets have got you covered.",
        },
        weight: [1500],
        quality:
          "Naturally gluten-free, these spuds are a nutritional goldmine, bursting with vitamins and minerals. Vitamin C strengthens your immune system and folate boosts energy. Packed with fibre, these spuds will improve your digestive health. Niacin and potassium provide the perfect nutrition for growing kids.",
        price: {
          "1.5kg": 2.99,
        },
        contact: "Phone: 64 3 3242902 Email: office@oakleys.co.nz",
      },

      {
        product_image1: oakley_pumpkin,
        product_image2: "",
        product: "pumkin",
        varieties: {
          Pumpkin: "",
        },
        weight: ["UNDEFINED"],
        quality:
          "Naturally gluten-free, these spuds are a nutritional goldmine, bursting with vitamins and minerals. Vitamin C strengthens your immune system and folate boosts energy. Packed with fibre, these spuds will improve your digestive health. Niacin and potassium provide the perfect nutrition for growing kids.",

        price: {
          "1ea": 4.99,
        },
        contact: "+64 3 3242902, office@oakleys.co.nz",
      },
    ],
  },
  {
    id: 13,
    name: "Apata",
    address: "15 Mends Lane, RD6, Te Puke 3186",
    position: [-37.80548149757007, 176.43758055767125],
    introduction:
      "At the core of Apata’s business is the harvest and processing of kiwifruit from strategically located Te Puke and Katikati packhouses and cool-storage facilities. Alongside our kiwifruit operations, we’re also the country’s largest and most respected avocado harvester and processor.",
    main_image: Apata_main,
    profile_image: Apata_profile,
    score: 5,
    products: [
      {
        product_image1: Apata_kiwi,
        product_image2: "",
        product: "kiwifruit",
        varieties: {
          Kiwi_fruits:
            "As the compliance regime in place for conventional kiwifruit production has continually evolved, Apata’s vigilance has ensured we continue to generate and maintain premiums for organic kiwifruit. We have specific Organic harvest and packing protocols, with dedicated, certified Organic post-harvest facilities.",
        },
        weight: [1000],
        quality:
          "This enables us to work alongside our Organic growers to produce a crop grown and packed in a format that will enable maximum exposure to the higher paying global market segments.",
        price: {
          "1.0kg": 3.99,
        },
        contact: "+64 7 533 6212",
      },

      {
        product_image1: Apata_avocado,
        product_image2: "",
        product: "avocado",
        varieties: {
          Avocado:
            "For avocado crops, our fruit washing and phytosanitary regimes are second to none and, when coupled with our hi-tech grading and packing equipment, give us the capability to run the most comprehensive harvest and packing programme in the industry.",
        },
        weight: ["1000"],
        quality:
          "This is a significant factor in managing the optimal flow of fruit and quality through to our important domestic and international retail markets.",
        price: {
          "1.0kg": 1.99,
        },
        contact: "+64 7 533 6212",
      },
    ],
  },
  {
    id: 14,
    name: "Wilcox",
    address: "58 Union Road, Pukekohe 2678 New Zealand",
    position: [-37.212910052601664, 174.8506962194306],
    introduction:
      "A. S. Wilcox and Sons Ltd was established in 1954 and has continued to grow and market potatoes, onions and carrots ever since, becoming an integral part of New Zealand’s agricultural industry.",
    main_image: wilcox_main,
    profile_image: wilcox_profile,
    score: 5,
    products: [
      {
        product_image1: wilcox_carrot,
        product_image2: "",
        product: "carrot",
        varieties: {
          Carrot_Beta_Bites:
            "Beta Bites have been specially grown as perfectly sized, deliciously sweet, snackable carrots, ready to crunch on any time.",
        },
        weight: [250],
        quality:
          "they’re a guilt free treat, packed with Beta-Carotene, which your body converts to vitamin A to support healthy skin, eyes and growth development",
        price: {
          "250g": 2.5,
        },
        contact: "+64 9 237 0740, customers@aswilcox.co.nz ",
      },
    ],
  },
];

export default farms;
