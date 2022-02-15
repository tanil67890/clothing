import { useEffect } from "react";
import * as actionTypes from "./shop-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      type: "pant",
      category: "joggers",
      gender: "male",
      availableSizes: ["26", "28", "30", "32", "36"],
      color: "Green",
      brand: "Wrangler",
      name: "Camo Print Joggers Pants",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1866,
      img: "https://assets.ajio.com/medias/sys_master/root/20210818/Bf5Y/611c1ea3aeb269a268757e6f/dnmx_olive_camo_print_joggers_pants.jpg",
      offerPrice: 1278,
      selectedSize: 24,
      selectedQuantity: 1,
    },
    {
      id: 2,
      type: "pant",
      category: "joggers",
      gender: "male",
      availableSizes: ["24", "28", "30", "32", "34", "36"],
      color: "Green",
      brand: "US Polo Assn",
      name: "Camoflage Print Slim Fit Jogger Pants",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1999,
      img: "https://assets.ajio.com/medias/sys_master/root/20211217/j6N2/61bb8ca9f997ddf8f154a84c/ivoc_olive_camouflage_print_slim_fit_jogger_pants.jpg",
      offerPrice: 1678,
      selectedSize: 24,
      selectedQuantity: 1,
    },
    {
      id: 3,
      type: "pant",
      category: "joggers",
      gender: "male",
      availableSizes: ["26", "24", "28", "30", "32", "34", "36"],
      color: "White",
      brand: "AJIO",
      name: "Slim Fit Camo Print Cargo Jogger",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1799,
      img: "https://assets.ajio.com/medias/sys_master/root/20210810/buv7/61117ba6f997ddce8997e198/outryt_grey_women_camo_print_track_pants.jpg",
      offerPrice: 1678,
      selectedSize: 26,
      selectedQuantity: 1,
    },
    {
      id: 4,
      type: "pant",
      category: "joggers",
      gender: "male",
      availableSizes: ["26", "24", "28", "30", "32", "34", "36"],
      color: "Green",
      brand: "Nike",
      name: "Slim Fit Track Pant with Camo Print",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1899,
      img: "https://assets.ajio.com/medias/sys_master/root/20211202/LQhO/61a7e53daeb2690110ea9ca3/teamspirit_olive_green_slim_fit_track_pants_with_camo_panels.jpg",
      offerPrice: 1678,
      selectedSize: 26,
      selectedQuantity: 1,
    },
    {
      id: 5,
      type: "pant",
      category: "joggers",
      gender: "male",
      availableSizes: ["26", "28", "30", "32", "34", "36"],
      color: "Black",
      brand: "H & M",
      name: "Camo Print Jogger Pants",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 2310,
      img: "https://assets.ajio.com/medias/sys_master/root/20210316/80WU/604fb0eaf997dd5c4011586f/the_indian_garage_co_grey_slim_fit_camo_print_cargo_joggers.jpg",
      offerPrice: 1200,
      selectedSize: 26,
      selectedQuantity: 1,
    },
    {
      id: 6,
      type: "pant",
      category: "joggers",
      gender: "male",
      availableSizes: ["26", "28", "30", "32", "34", "36"],
      color: "Green",
      brand: "Jack & Jones",
      name: "Camo Print Jogger Pants",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1200,
      img: "https://assets.ajio.com/medias/sys_master/root/20210119/2BeY/6005d7397cdb8c1f142b5f92/john_players_jeans_khaki_camo_print_joggers_with_drawcord.jpg",
      offerPrice: 1089,
      selectedSize: 26,
      selectedQuantity: 1,
    },
    {
      id: 7,
      type: "pant",
      category: "joggers",
      gender: "male",
      availableSizes: ["26", "30", "32", "34", "36"],
      color: "Brown",
      brand: "The Roadster",
      name: "Camo Print Jogger Pants",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1999,
      img: "https://assets.ajio.com/medias/sys_master/root/20211202/CgXd/61a7ca86f997ddf8f12c749a/dnmx_olive_green_camo_print_joggers_with_elasticated_drawstring.jpg",
      offerPrice: 1120,
      selectedSize: 26,
      selectedQuantity: 1,
    },
    {
      id: 8,
      type: "pant",
      category: "joggers",
      gender: "male",
      availableSizes: ["26", "28", "32", "34", "36"],
      color: "Green",
      brand: "Levis",
      name: "Camo Print Jogger Pants",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1900,
      img: "https://assets.ajio.com/medias/sys_master/root/20211125/pyN5/619fb7b9aeb2690110d8847f/the_indian_garage_co_brown_camo_print_joggers_with_insert_pockets.jpg",
      offerPrice: 1099,
      selectedSize: 26,
      selectedQuantity: 1,
    },
    {
      id: 9,
      type: "pant",
      category: "joggers",
      gender: "male",
      availableSizes: ["28", "30", "32", "34", "36"],
      color: "Gray",
      brand: "Puma",
      name: "Camo Print Jogger Pants",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1830,
      img: "https://assets.ajio.com/medias/sys_master/root/20210525/2Zkl/60ac2ac7f997ddb312a83208/sports_52_wear_black_camo_print_fitted_track_pants_with_insert_pockets.jpg",
      offerPrice: 1309,
      selectedSize: 28,
      selectedQuantity: 1,
    },
    {
      id: 10,
      type: "pant",
      category: "joggers",
      gender: "male",
      availableSizes: ["26", "28", "30", "34", "36"],
      color: "Blue",
      brand: "HRX",
      name: "Camo Print Jogger Pants",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1899,
      img: "https://assets.ajio.com/medias/sys_master/root/20211004/zaMF/615b195af997ddce89f4c688/gas_blue_camo_print_slim_fit_cargos.jpg",
      offerPrice: 1290,
      selectedSize: 26,
      selectedQuantity: 1,
    },
    {
      id: 11,
      type: "pant",
      category: "joggers",
      gender: "male",
      availableSizes: ["26", "28", "30", "32", "34"],
      color: "Green",
      brand: "Vermo Moda",
      name: "Camo Print Jogger Pants",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1899,
      img: "https://assets.ajio.com/medias/sys_master/root/20211115/nuKF/61927f66f997ddf8f105d409/the_indian_garage_co_green_camo_print_joggers_with_insert_pockets.jpg",
      offerPrice: 1320,
      selectedSize: 26,
      selectedQuantity: 1,
    },

    {
      id: 12,
      type: "t-shirt",
      category: "t-shirt",
      gender: "male",
      availableSizes: ["L", "M", "S"],
      color: "Green",
      brand: "Levis",
      name: "Colourblock Crew- Round Neck T-shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1999,
      img: "https://assets.ajio.com/medias/sys_master/root/20211013/uqO3/616622b1f997ddf8f1cd31ca/dillinger_green_colourblock_crew-_neck_t-shirt.jpg",
      offerPrice: 1320,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 13,
      type: "t-shirt",
      category: "t-shirt",
      gender: "male",
      availableSizes: ["L", "M", "S"],
      color: "Green",
      brand: "US Polo Assn",
      name: "Striped Slmi Fit Crew-Neck T-shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1999,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13623926/2021/3/26/fe71e5c0-3647-4c8d-a71a-679812c31b641616742296274-US-Polo-Assn-Denim-Co-Men-Tshirts-2811616742295148-1.jpg",
      offerPrice: 1320,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 14,
      type: "t-shirt",
      category: "t-shirt",
      gender: "male",
      availableSizes: ["L", "M", "S"],
      color: "Green",
      brand: "HRX",
      name: "Printed Pure Cotton T-shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1199,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7231694/2019/2/8/6b595914-1c66-4d0a-a542-9a2134ae6f391549618643915-HRX-by-Hrithik-Roshan-Men-Fluorescent-Green-Solid-Round-Neck-1.jpg",
      offerPrice: 1020,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 15,
      type: "t-shirt",
      category: "t-shirt",
      gender: "female",
      availableSizes: ["L", "M", "S"],
      color: "Green",
      brand: "The Roadster",
      name: "Pure Cotton T-shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1099,
      img: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1753465/2017/4/24/11493035305623-Roadster-Women-Olive-Solid-Round-Neck-T-shirt-9341493035304978-3.jpg",
      offerPrice: 899,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 16,
      type: "t-shirt",
      category: "t-shirt",
      gender: "male",
      availableSizes: ["L", "M", "S"],
      color: "Green",
      brand: "H & M",
      name: "Pure cotton Regular Fit T-shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1299,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/6/1f5471ec-c783-4fa7-99f4-2b6f6fb251761580946317672-1.jpg",
      offerPrice: 999,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 17,
      type: "t-shirt",
      category: "t-shirt",
      gender: "female",
      availableSizes: ["L", "M", "S"],
      color: "Green",
      brand: "Wrangler",
      name: "Women Gathered Cotton T-shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1299,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8661651/2019/8/13/251d9b53-7360-442b-9e3f-5902b19dd2ce1565693537739-Roadster-Women-Red-Solid-T-Shirt-591565693537412-1.jpg",
      offerPrice: 1020,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 18,
      type: "t-shirt",
      category: "t-shirt",
      gender: "male",
      availableSizes: ["L", "M", "S"],
      color: "Green",
      brand: "Vermo Moda",
      name: "Colourblocked Cotton T-shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1099,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2221318/2017/12/6/11512544982740-Moda-Rapido-Men-Maroon-Colourblocked-Round-Neck-T-shirt-4391512544982619-1.jpg",
      offerPrice: 799,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 19,
      type: "t-shirt",
      category: "t-shirt",
      gender: "male",
      availableSizes: ["L", "M", "S"],
      color: "Green",
      brand: "Jack & Jones",
      name: "Solid Round Neck T-shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1299,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1703238/2018/3/30/11522394076063-HIGHLANDER-Men-Black-Solid-Round-Neck-T-shirt-4731522394075913-1.jpg",
      offerPrice: 999,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 20,
      type: "t-shirt",
      category: "t-shirt",
      gender: "male",
      availableSizes: ["L", "M", "S"],
      color: "Green",
      brand: "Nike",
      name: "Stripped Round Neck T-shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1299,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1761900/2019/4/5/b081633c-69b5-4f10-b46b-23d05fb5eca81554458645400-HIGHLANDER-Men-Navy--White-Slim-Fit-Striped-Round-Neck-T-shi-1.jpg",
      offerPrice: 1100,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 21,
      type: "t-shirt",
      category: "t-shirt",
      gender: "male",
      availableSizes: ["L", "M", "S"],
      color: "Green",
      brand: "Puma",
      name: "Men Polo Collar T-shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 2099,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15340006/2021/11/12/c177acd8-5c05-4e10-a3fd-9e242a18277b1636699585050RoadsterWomenBlackSolidBikerJacketShirtsTommyHilfigerMenJack1.jpg",
      offerPrice: 1899,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 22,
      type: "t-shirt",
      category: "t-shirt",
      gender: "female",
      availableSizes: ["L", "M", "S"],
      color: "Green",
      brand: "AJIO",
      name: "Printed Cotton T-shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 2000,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8813271/2019/4/10/d854e7d6-9c0c-4784-a3dd-14ab8ad08f4d1554888644435-Moda-Rapido-Women-Olive-Green-Printed-Round-Neck-T-shirt-993-2.jpg",
      offerPrice: 1320,
      selectedSize: "L",
      selectedQuantity: 1,
    },

    {
      id: 23,
      type: "shirt",
      category: "shirt",
      gender: "male",
      availableSizes: ["L", "M", "S"],
      color: "Black",
      brand: "Wrangler",
      name: "Cotton Checked Casual Shit",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 866,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2016/9/15/11473928353416-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-3.jpg",
      offerPrice: 578,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 24,
      type: "shirt",
      category: "shirt",
      gender: "male",
      availableSizes: ["L", "M", "S"],
      color: "Green",
      brand: "US Polo Assn",
      name: "Men Slim Fit Casual Shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 999,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488103/2019/8/22/7142624c-9184-47db-bf67-5610bd756c761566454100661-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-1.jpg",
      offerPrice: 678,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 25,
      type: "shirt",
      category: "shirt",
      gender: "male",
      availableSizes: ["L", "M", "S"],
      color: "Maroon",
      brand: "Vermo Moda",
      name: "Men Cotton Casual Shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 799,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7288105/2018/10/24/a059288c-512c-468a-87d4-ce36b52840441540360274049-HERENOW-Men-Shirts-5241540360273894-1.jpg",
      offerPrice: 678,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 26,
      type: "shirt",
      category: "shirt",
      gender: "male",
      availableSizes: ["L", "M", "S"],
      color: "Blue",
      brand: "Nike",
      name: "Slim Fit Floral Casual Shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 899,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7288105/2018/10/24/a059288c-512c-468a-87d4-ce36b52840441540360274049-HERENOW-Men-Shirts-5241540360273894-1.jpg",
      offerPrice: 678,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 27,
      type: "shirt",
      category: "shirt",
      gender: "male",
      availableSizes: ["L", "M", "S"],
      color: "Blue",
      brand: "H & M",
      name: "Men Overshirt Regular Fit",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 2310,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16570490/2021/12/21/5c82a197-d123-4cb9-bbc1-a8bab134f9c11640081716690RegularFitOvershirt4.jpg",
      offerPrice: 1200,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 28,
      type: "shirt",
      category: "shirt",
      gender: "male",
      availableSizes: ["L", "M", "S"],
      color: "Green",
      brand: "Jack & Jones",
      name: "Relaxed Fit Twill Shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1200,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16457750/2021/12/11/d49255d3-2680-41fb-a24e-76fff53d5f091639211318873RelaxedFitTwillshirt1.jpg",
      offerPrice: 1099,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 29,
      type: "shirt",
      category: "shirt",
      gender: "female",
      availableSizes: ["L", "M", "S"],
      color: "White",
      brand: "The Roadster",
      name: "Oversized Cotton Shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 2000,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15198496/2021/8/19/126b021c-9fe8-4924-9814-9bc06f8600811629368510776Oversizedcottonshirt1.jpg",
      offerPrice: 1120,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 30,
      type: "shirt",
      category: "shirt",
      gender: "male",
      availableSizes: ["L", "M", "S"],
      color: "Red",
      brand: "Levis",
      name: "Men Relaxed Fit Twill Shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1900,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16652142/2022/1/3/127776d4-bf18-42bc-a058-de2d2359e08c1641183111886RelaxedFitTwillshirt1.jpg",
      offerPrice: 1699,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 31,
      type: "shirt",
      category: "shirt",
      gender: "female",
      availableSizes: ["L", "M", "S"],
      color: "Blue",
      brand: "HRX",
      name: "Women Wide Shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1899,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16570494/2021/12/21/bfdfd1c8-cff5-409a-a868-7b1c0fd9cf471640081820926Wideshirt4.jpg",
      offerPrice: 1290,
      selectedSize: "L",
      selectedQuantity: 1,
    },
    {
      id: 32,
      type: "shirt",
      category: "shirt",
      gender: "male",
      availableSizes: ["L", "M", "S"],
      color: "Black",
      brand: "Puma",
      name: "Men Muscle Fit Grandad Shirt",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1599,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15630030/2021/9/29/ad1379e5-92e2-4cfe-8de5-5e9c02692b7d1632884217698HMMenBlackMuscleFitGrandadShirt1.jpg",
      offerPrice: 1320,
      selectedSize: "L",
      selectedQuantity: 1,
    },

    {
      id: 33,
      type: "pant",
      category: "jeans",
      gender: "male",
      availableSizes: ["26", "28", "30", "32", "36"],
      color: "Blue",
      brand: "Wrangler",
      name: "Blue Hybrid Tapered Jeans",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1866,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16519044/2021/12/15/62912650-35d8-470e-b4d7-e4bbcc2fa2ff1639541709458HybridRegularTaperedJoggers1.jpg",
      offerPrice: 1578,
      selectedSize: 26,
      selectedQuantity: 1,
    },
    {
      id: 34,
      type: "pant",
      category: "jeans",
      gender: "male",
      availableSizes: ["24", "28", "30", "32", "34", "36"],
      color: "Green",
      brand: "US Polo Assn",
      name: "Men Green Regular Jeans",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 2999,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15198724/2021/8/19/386c764e-bb53-4c1b-b42b-627f55df9aff1629366980044RegularJeans1.jpg",
      offerPrice: 1999,
      selectedSize: 24,
      selectedQuantity: 1,
    },
    {
      id: 35,
      type: "pant",
      category: "jeans",
      gender: "male",
      availableSizes: ["26", "24", "28", "30", "32", "34", "36"],
      color: "Blue",
      brand: "AJIO",
      name: "Hybrid Tegular Tapered Joggers",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1799,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16519064/2021/12/15/49c5a4f4-c1e3-4e05-90f3-0bf93e81c25a1639542585870HybridRegularTaperedJoggers1.jpg",
      offerPrice: 1678,
      selectedSize: 26,
      selectedQuantity: 1,
    },
    {
      id: 36,
      type: "pant",
      category: "jeans",
      gender: "male",
      availableSizes: ["26", "24", "28", "30", "32", "34", "36"],
      color: "Black",
      brand: "Nike",
      name: "Mid-Rise Fitter Jeans",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1899,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16519036/2021/12/15/44881785-1fed-4a78-ac3c-08d3e73456971639540471502HybridRegularTaperedJoggers1.jpg",
      offerPrice: 1678,
      selectedSize: 26,
      selectedQuantity: 1,
    },
    {
      id: 37,
      type: "pant",
      category: "jeans",
      gender: "male",
      availableSizes: ["26", "28", "30", "32", "34", "36"],
      color: "Blue",
      brand: "H & M",
      name: "Relaxed Jeans",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 2310,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16849050/2022/1/21/60a734e0-91c4-4d21-a984-0de074afe0d41642751669189RelaxedJeans1.jpg",
      offerPrice: 1200,
      selectedSize: 26,
      selectedQuantity: 1,
    },
    {
      id: 38,
      type: "pant",
      category: "jeans",
      gender: "male",
      availableSizes: ["26", "28", "30", "32", "34", "36"],
      color: "Blue",
      brand: "Jack & Jones",
      name: "Men Blue Skinny Jeans",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1200,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15193860/2021/8/19/b4b9bb4b-f5ec-4318-b86d-ea92295995c61629357454258SkinnyJeans1.jpg",
      offerPrice: 999,
      selectedSize: 26,
      selectedQuantity: 1,
    },
    {
      id: 39,
      type: "pant",
      category: "jeans",
      gender: "male",
      availableSizes: ["26", "30", "32", "34", "36"],
      color: "White",
      brand: "The Roadster",
      name: "Men Beige Regular Jeans",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 2000,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15198716/2021/8/19/75a71026-4900-4937-b361-5113555bd1ac1629366725850RegularJeans1.jpg",
      offerPrice: 1120,
      selectedSize: 26,
      selectedQuantity: 1,
    },
    {
      id: 40,
      type: "pant",
      category: "jeans",
      gender: "male",
      availableSizes: ["26", "28", "32", "34", "36"],
      color: "Black",
      brand: "Levis",
      name: "Men Slash Knee Jeans",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1900,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16849048/2022/1/21/40320d35-ceaf-4571-8e6e-cdfa635898ae1642753738602RelaxedJeans1.jpg",
      offerPrice: 1299,
      selectedSize: 26,
      selectedQuantity: 1,
    },
    {
      id: 41,
      type: "pant",
      category: "jeans",
      gender: "male",
      availableSizes: ["28", "30", "32", "34", "36"],
      color: "Blue",
      brand: "Puma",
      name: "Solid Jogger-Jeans",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1830,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15546148/2021/9/27/1f284ca0-dc35-44eb-9a18-eb4f4bcc96031632723598094SkinnyJeans1.jpg",
      offerPrice: 1699,
      selectedSize: 28,
      selectedQuantity: 1,
    },
    {
      id: 42,
      type: "pant",
      category: "jeans",
      gender: "male",
      availableSizes: ["26", "28", "30", "34", "36"],
      color: "Gray",
      brand: "HRX",
      name: "Men Gray Skinny Jeans",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1899,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15193850/2021/8/19/7fa4ce40-77af-43c0-b55b-edbd136f282f1629352628420SkinnyJeans1.jpg",
      offerPrice: 1290,
      selectedSize: 26,
      selectedQuantity: 1,
    },
    {
      id: 43,
      type: "pant",
      category: "jeans",
      gender: "male",
      availableSizes: ["26", "28", "30", "32", "34"],
      color: "Blue",
      brand: "Vermo Moda",
      name: "Slim Jean",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi voluptates quis aperiam voluptate, officiis voluptatibus nisi nam ipsum iure fuga iusto praesentium libero. Deserunt, consectetur voluptates officiis ratione id iusto unde repellendus laboriosam.",
      price: 1899,
      img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16519026/2021/12/15/a4694bbe-7edf-40dd-878f-6c21405d58cd1639542261217SlimJeans1.jpg",
      offerPrice: 1320,
      selectedSize: 26,
      selectedQuantity: 1,
    },
  ],

  topBrands: [
    {
      id: 44,
      brandId: 54,
      name: "US Polo Assn",
      value: "usPoloAssn",
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/6e0a9fa0-9e8d-4c29-9250-995c9f1ba9331605363273176-Home---U.S.-Polo-Assn..jpg",
    },
    {
      id: 45,
      brandId: 55,
      name: "Wrangler",
      value: "wrangler",
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/e72c82f2-cfd5-4f9a-b1b0-ba9e2b3e51251598892519506-W.jpg",
    },
    {
      id: 46,
      brandId: 56,
      name: "H & M",
      value: "h&m",
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f2fdda02-423c-4f11-8f1b-618ba807e5841598348260323-H_M.jpg",
    },
    {
      id: 47,
      brandId: 57,
      name: "Vermo Moda",
      value: "vermoModa",
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ecc170-58af-473f-8144-b1639895a8291598892519457-Veromodo.jpg",
    },
    {
      id: 48,
      brandId: 58,
      name: "Jack & Jones",
      value: "jack&jones",
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/085719b1-c71e-4f47-950c-9a6b7f291fac1598348260370-Jack-_-Jones.jpg",
    },
    {
      id: 49,
      brandId: 59,
      name: "HRX",
      value: "hrx",
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/774f42c4-f459-4514-9b90-cf8a60a5f68c1596644478087-hrx30.jpg",
    },
    {
      id: 50,
      brandId: 60,
      name: "Puma",
      value: "puma",
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/581e2bf6-6d47-4a4b-a11f-43200dc9c6791598892519362-Puma.jpg",
    },
    {
      id: 51,
      brandId: 61,
      name: "Levis",
      value: "levis",
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/0524cbd5-f034-4155-9e3b-336c4e530ee41605363272658-Home---Levis.jpg",
    },
    {
      id: 52,
      brandId: 62,
      name: "The Roadster",
      value: "theRoadster",
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/178c1e5d-69f2-402f-a2a5-ef44700a0f691596640983793-Roadster---.jpg",
    },
    {
      id: 53,
      brandId: 63,
      name: "Nike",
      value: "nike",
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/5544cd64-d95b-461d-802a-8025fdfeb3331605363272844-Home---Nike.jpg",
    },
  ],

  brands: [
    {
      id: 54,
      name: "US Polo Assn",
      value: "usPoloAssn",
      checked: false,
    },
    {
      id: 55,
      name: "Wrangler",
      value: "wrangler",
      checked: false,
    },
    {
      id: 56,
      name: "H & M",
      value: "h&m",
      checked: false,
    },
    {
      id: 57,
      name: "Vermo Moda",
      value: "vermoModa",
      checked: false,
    },
    {
      id: 58,
      name: "Jack & Jones",
      value: "jack&jones",
      checked: false,
    },
    {
      id: 59,
      name: "HRX",
      value: "hrx",
      checked: false,
    },
    {
      id: 60,
      name: "Puma",
      value: "puma",
      checked: false,
    },
    {
      id: 61,
      name: "Levis",
      value: "levis",
      checked: false,
    },
    {
      id: 62,
      name: "The Roadster",
      value: "theRoadster",
      checked: false,
    },
    {
      id: 63,
      name: "Nike",
      value: "nike",
      checked: false,
    },
    {
      id: 64,
      name: "AJIO",
      value: "ajio",
      checked: false,
    },
  ],

  colors: [
    {
      id: 65,
      name: "Green",
      value: "green",
      checked: false,
    },
    {
      id: 66,
      name: "White",
      value: "white",
      checked: false,
    },
    {
      id: 67,
      name: "Black",
      value: "black",
      checked: false,
    },
    {
      id: 68,
      name: "Brown",
      value: "brown",
      checked: false,
    },
    {
      id: 69,
      name: "Grey",
      value: "grey",
      checked: false,
    },
    {
      id: 70,
      name: "Blue",
      value: "blue",
      checked: false,
    },
    {
      id: 71,
      name: "Maroon",
      value: "maroon",
      checked: false,
    },
    {
      id: 72,
      name: "Red",
      value: "red",
      checked: false,
    },
  ],

  genders: [
    {
      id: 73,
      name: "Male",
      value: "male",
      checked: false,
    },
    {
      id: 74,
      name: "Female",
      value: "female",
      checked: false,
    },
  ],

  categories: [
    {
      id: 75,
      name: "Shirts",
      value: "shirt",
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg",
      checked: false,
    },
    {
      id: 76,
      name: "T-shirts",
      value: "t-shirt",
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg",
      checked: false,
    },
    {
      id: 77,
      name: "Jeans",
      value: "jeans",
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg",
      checked: false,
    },
    {
      id: 78,
      name: "Joggers",
      value: "joggers",
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg",
      checked: false,
    },
    {
      id: 79,
      name: "Shoes",
      value: "shoe",
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg",
      checked: false,
    },
    {
      id: 80,
      name: "Sarees",
      value: "saree",
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a048cca8-7b5d-417e-9645-ca98f4b6e52c1594222967506-Sarees.jpg",
      checked: false,
    },
  ],

  bag: [],

  bagTotal: 0,

  bagDiscount: 0,

  totalAmount: 0,

  searchProducts: null,

  currentProduct: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const applyFilters = () => {
    let updatedList = INITIAL_STATE.products;
    const gendersChecked = state.genders
      .filter((gender) => gender.checked === true)
      .map((gender) => gender.value);
    const brandsChecked = state.brands
      .filter((brand) => brand.checked === true)
      .map((brand) => brand.name);
    const colorsChecked = state.colors
      .filter((color) => color.checked === true)
      .map((color) => color.name);
    const categoriesChecked = state.categories
      .filter((category) => category.checked === true)
      .map((category) => category.value);
    if (gendersChecked.length > 0) {
      updatedList = updatedList.filter((item) =>
        gendersChecked.includes(item.gender)
      );
    }
    if (brandsChecked.length > 0) {
      updatedList = updatedList.filter((item) =>
        brandsChecked.includes(item.brand)
      );
    }
    if (colorsChecked.length > 0) {
      updatedList = updatedList.filter((item) =>
        colorsChecked.includes(item.color)
      );
    }
    if (categoriesChecked.length > 0) {
      updatedList = updatedList.filter((item) =>
        categoriesChecked.includes(item.category)
      );
    }
    return {
      ...state,
      products: updatedList,
    };
  };

  switch (action.type) {
    case actionTypes.REFINE_BY_GENDER:
      const genderStateList = state.genders;
      var checkedGenders = genderStateList.map((gender) =>
        gender.id === action.payload
          ? { ...gender, checked: !gender.checked }
          : gender
      );
      state.genders = checkedGenders;
      return applyFilters();

    case actionTypes.REFINE_BY_BRAND:
      const brandStateList = state.brands;
      var checkedBrands = brandStateList.map((brand) =>
        brand.id === action.payload
          ? { ...brand, checked: !brand.checked }
          : brand
      );
      state.brands = checkedBrands;
      return applyFilters();

    case actionTypes.REFINE_BY_COLOR:
      const colorsStateList = state.colors;
      var checkedColors = colorsStateList.map((color) =>
        color.id === action.payload
          ? { ...color, checked: !color.checked }
          : color
      );
      state.colors = checkedColors;
      return applyFilters();

    case actionTypes.REFINE_BY_CATEGORY:
      const categoryStateList = state.categories;
      var checkedCategories = categoryStateList.map((category) =>
        category.id === action.payload
          ? { ...category, checked: !category.checked }
          : category
      );
      state.categories = checkedCategories;
      return applyFilters();

    case actionTypes.LOAD_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload,
      };

    case actionTypes.INCREMENT_QUANITYT:
      let totalDiscount1 = INITIAL_STATE.bagDiscount;
      let finalBagTotal1 = INITIAL_STATE.bagTotal;
      const incrementedList1 = state.bag.map((item) => {
        if (item.id === action.payload) {
          const quantity = item.selectedQuantity + 1;
          return {
            ...item,
            selectedQuantity: quantity,
          };
        } else {
          return item;
        }
      });
      state.bag = incrementedList1;
      state.bag.forEach((bagItem) => {
        let discount =
          (bagItem.price - bagItem.offerPrice) * bagItem.selectedQuantity;
        totalDiscount1 += discount;
        finalBagTotal1 += bagItem.price * bagItem.selectedQuantity;
      });
      return {
        ...state,
        bag: state.bag,
        bagTotal: finalBagTotal1,
        bagDiscount: totalDiscount1,
        totalAmount: finalBagTotal1 - totalDiscount1,
      };

    case actionTypes.DECREMENT_QUANITYT:
      let totalDiscount2 = INITIAL_STATE.bagDiscount;
      let finalBagTotal2 = INITIAL_STATE.bagTotal;
      const decrementedList = state.bag.map((item) => {
        if (item.id === action.payload) {
          const quantity = item.selectedQuantity - 1;
          if (quantity < 1) {
            return {
              ...item,
              selectedQuantity: 1,
            };
          } else {
            return {
              ...item,
              selectedQuantity: quantity,
            };
          }
        } else {
          return item;
        }
      });
      state.bag = decrementedList;
      state.bag.forEach((bagItem) => {
        let discount =
          (bagItem.price - bagItem.offerPrice) * bagItem.selectedQuantity;
        totalDiscount2 += discount;
        finalBagTotal2 += bagItem.price * bagItem.selectedQuantity;
      });
      return {
        ...state,
        bag: state.bag,
        bagTotal: finalBagTotal2,
        bagDiscount: totalDiscount2,
        totalAmount: finalBagTotal2 - totalDiscount2,
      };

    case actionTypes.UPDATE_SELECTED_SIZE:
      return{
        ...state,
        products: state.products.map((item) => {
          if(item.id === action.payload.productID){
            item.selectedSize = action.payload.size;
            return item;
          }
          else{
            return item;
          }
        })
      }





    case actionTypes.ADD_TO_CART:
      const product = state.products.find((item) => item.id === action.payload);
      const productInCart = state.bag.find((item) => item.id === action.payload) ? true : false;
      let totalDiscount = INITIAL_STATE.bagDiscount;
      let finalBagTotal = INITIAL_STATE.bagTotal;   
      
      if (productInCart === false) {
        state.bag = state.bag.concat(product);
        state.bag.forEach((bagItem) => {
          let discount = (bagItem.price - bagItem.offerPrice) * bagItem.selectedQuantity;
          totalDiscount += discount;
          finalBagTotal += bagItem.price * bagItem.selectedQuantity;
        });
        return {
          ...state,
          bag: state.bag,
          bagTotal: finalBagTotal,
          bagDiscount: totalDiscount,
          totalAmount: finalBagTotal - totalDiscount,
        };
      }
    
      if(productInCart === true){
        let prodInBag = state.bag.find((item) => item.id === action.payload);
 
        if(prodInBag.selectedSize === product.selectedSize){
          state.bag = state.bag.map((item) => item.id === action.payload ? { ...item, selectedQuantity: item.selectedQuantity + 1} : item)
           state.bag.forEach((bagItem) => {
             let discount = (bagItem.price - bagItem.offerPrice) * bagItem.selectedQuantity;
             totalDiscount += discount;
             finalBagTotal += bagItem.price * bagItem.selectedQuantity;
           });
          return{
            ...state,
            bag: state.bag,
            bagTotal: finalBagTotal,
            bagDiscount: totalDiscount,
            totalAmount: finalBagTotal - totalDiscount,
          };
        }
        else{
          state.bag = state.bag.concat(product);
          state.bag.forEach((bagItem) => {
            let discount = (bagItem.price - bagItem.offerPrice) * bagItem.selectedQuantity;
            totalDiscount += discount;
            finalBagTotal += bagItem.price * bagItem.selectedQuantity;
          });
          return {
            ...state,
            bag: state.bag,
            bagTotal: finalBagTotal,
            bagDiscount: totalDiscount,
            totalAmount: finalBagTotal - totalDiscount,
          }      
      }   
    }
      

    
    case actionTypes.REMOVE_FROM_CART:
      state.bag = state.bag.filter((bagItem) => bagItem.id !== action.payload);
      let newTotalAmount = INITIAL_STATE.totalAmount;
      let newTotalDiscount = INITIAL_STATE.bagDiscount;
      let newFinalBagTotal = INITIAL_STATE.totalAmount;
      state.bag.forEach((bagItem) => {
        let newDiscount = bagItem.price - bagItem.offerPrice;
        newTotalDiscount += newDiscount;
        newFinalBagTotal += bagItem.price;
      });
      newTotalAmount = newFinalBagTotal - newTotalDiscount;
      return {
        ...state,
        bag: state.bag,
        bagTotal: newFinalBagTotal,
        bagDiscount: newTotalDiscount,
        totalAmount: newTotalAmount,
      };

    case actionTypes.FILTER_BY_BRAND:
      const brandState = INITIAL_STATE.brands;
      var clickedBrand = brandState.map((brand) =>
        brand.id === action.payload
          ? { ...brand, checked: true }
          : { ...brand, checked: false }
      );
      state.brands = clickedBrand;
      return applyFilters();

    case actionTypes.FILTER_BY_CATEGORY:
      const categoryState = INITIAL_STATE.categories;
      var clickedCategory = categoryState.map((category) =>
        category.id === action.payload
          ? { ...category, checked: true }
          : { ...category, checked: false }
      );
      state.categories = clickedCategory;
      return applyFilters();

    case actionTypes.SEARCH_PRODUCTS:
      const searchTerm = action.payload;
      return {
        ...state,
        products: INITIAL_STATE.products.filter((product) => {
          if (searchTerm === "") {
            return product;
          } else if (
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return product;
          }
        }),
      };

    default:
      return state;
  }
};

export default shopReducer;
