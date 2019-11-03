// import tShirt from "../common/images/5059020.jpg";
// import tShirt1 from "../common/images/4785514.jpg";
// import tShirt2 from "../common/images/3982665.jpg";
// import tShirt3 from "../common/images/4946293.jpg";
// import manto from "../common/images/105800619.jpg";
// import manto1 from "../common/images/110646356.jpg";

// export default [
//   {
//     title: "تیشرت آستین بلند مردانه",
//     price: "120000",
//     img: tShirt,
//     discount: undefined,
//     freeShipping: true,
//     id: 85637376
//   },
//   {
//     title: "تیشرت آستین بلند مردانه پاتیلوک طرح بایرن مونیخ",
//     price: "132500",
//     img: tShirt2,
//     discount: 0.1,
//     freeShipping: false,
//     id: 7546563
//   },
//   {
//     title: "تی شرت مردانه آگرین",
//     price: "223000",
//     img: tShirt1,
//     discount: undefined,
//     freeShipping: true,
//     id: 5587958
//   },
//   {
//     title: "تیشرت آستین بلند مردانه طرح اسکلت",
//     price: "95500",
//     img: tShirt3,
//     discount: 0.4,
//     freeShipping: true,
//     id: 475635635
//   },
//   {
//     title: "مانتو زنانه مانتو ولیعصر مدل نرگس",
//     price: "95500",
//     img: manto,
//     discount: undefined,
//     freeShipping: false,
//     id: 46275635
//   },
//   {
//     title: "مانتو زنانه مدل B-110",
//     price: "95500",
//     img: manto1,
//     discount: undefined,
//     freeShipping: false,
//     id: 96574563
//   },
//   {
//     title: "تیشرت آستین بلند مردانه پاتیلوک طرح بایرن مونیخ",
//     price: "132500",
//     img: tShirt2,
//     discount: 0.1,
//     freeShipping: false,
//     id: 97354637
//   },
//   {
//     title: "تی شرت مردانه آگرین",
//     price: "223000",
//     img: tShirt1,
//     discount: undefined,
//     freeShipping: true,
//     id: 6587356
//   },
//   {
//     title: "تیشرت آستین بلند مردانه طرح اسکلت",
//     price: "95500",
//     img: tShirt3,
//     discount: 0.4,
//     freeShipping: true,
//     id: 75625467
//   },
//   {
//     title: "تیشرت آستین بلند مردانه",
//     price: "120000",
//     img: tShirt,
//     discount: undefined,
//     freeShipping: true,
//     id: 54214734
//   },
//   {
//     title: "تیشرت آستین بلند مردانه پاتیلوک طرح بایرن مونیخ",
//     price: "132500",
//     img: tShirt2,
//     discount: 0.1,
//     freeShipping: false,
//     id: 5213546
//   },
//   {
//     title: "مانتو زنانه مانتو ولیعصر مدل نرگس",
//     price: "95500",
//     img: manto,
//     discount: undefined,
//     freeShipping: true,
//     id: 59474776
//   },
//   {
//     title: "مانتو زنانه مدل B-110",
//     price: "95500",
//     img: manto1,
//     discount: undefined,
//     freeShipping: false,
//     id: 5221467
//   },
//   {
//     title: "تی شرت مردانه آگرین",
//     price: "223000",
//     img: tShirt1,
//     discount: undefined,
//     freeShipping: false,
//     id: 4252334
//   },
//   {
//     title: "تیشرت آستین بلند مردانه طرح اسکلت",
//     price: "95500",
//     img: tShirt3,
//     discount: undefined,
//     freeShipping: true,
//     id: 5287656
//   },
//   {
//     title: "مانتو زنانه مانتو ولیعصر مدل نرگس",
//     price: "95500",
//     img: manto,
//     discount: 0.8,
//     freeShipping: true,
//     id: 52876130
//   }
// ];

export const filterSize = [
  {
    id: "check4",
    text: "S",
    name: "name123",
    filter: {
      size: "S"
    }
  },
  {
    id: "check5",
    text: "M",
    name: "name123",
    filter: {
      size: "M"
    }
  },
  {
    id: "check1",
    text: "L",
    name: "name123",
    filter: {
      size: "L"
    }
  },
  {
    id: "check2",
    text: "XL",
    name: "name123",
    filter: {
      size: "XL"
    }
  },
  {
    id: "check3",
    text: "XXL",
    name: "name123",
    filter: {
      size: "XXL"
    }
  }
];

export const filterColor = [
  {
    id: "قرمز",
    text: "قرمز",
    name: "name1",
    filter: {
      colorParent: "red"
    }
  },
  {
    id: "check22",
    text: "آبی",
    name: "name1",
    filter: {
      colorParent: "blue"
    }
  },
  {
    id: "check23",
    text: "صورتی",
    name: "name1",
    filter: {
      colorParent: "pink"
    }
  },
  {
    id: "check24",
    text: "سفید",
    name: "name1",
    filter: {
      colorParent: "white"
    }
  }
];
export const filterPrice = [
  {
    id: "check31",
    text: "کمتر از 200 هزار تومان",
    name: "name12",
    filter: {
      minPrice: null,
      maxPrice: 200000
    }
  },
  {
    id: "check32",
    text: "بین 200هزار تا 500هزارتومان",
    name: "name12",
    filter: {
      minPrice: 200000,
      maxPrice: 500000
    }
  },
  {
    id: "check33",
    text: "بیشتر از 500 هزار تومان",
    name: "name12",
    filter: {
      minPrice: 500000,
      maxPrice: null
    }
  }
];
export const filterCollection = [
  {
    id: "check3111",
    text: "بهاره",
    name: "name12",
    filter: {
      collection: "spring"
    }
  },
  {
    id: "check3211",
    text: "تابستانه",
    name: "name12",
    filter: {
      collection: "summer"
    }
  },
  {
    id: "check3311",
    text: "پاییزه",
    name: "name12",
    filter: {
      collection: "fall"
    }
  },
  {
    id: "check33411",
    text: "زمستانه",
    name: "name12",
    filter: {
      collection: "winter"
    }
  }
];
