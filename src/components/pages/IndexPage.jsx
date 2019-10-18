import React from "react";

// import layout
import IndexLayout from "../indexComponent/IndexLayout";

//import Index components
import IndexCard from "../indexComponent/IndexCard";
import IndexCarousel from "../indexComponent/IndexCarousel";
import IndexInfoIconText from "../indexComponent/IndexInfoIconText";
import IndexDiscountSlider from "../indexComponent/IndexDiscountSlider";
import IndexCategories from "../indexComponent/IndexCategories";

//import common component
import Banner from "../Banner";
import ProductSlider from "../ProductSlider";

// static data
import products from "../../staticData/products";
import carouselData from "../../staticData/carouselData";
import categoriesData from "../../staticData/categoriesData";
import { indexBanner_1, indexBanner_2 } from "../../staticData/banner";

export default function IndexPage() {
  console.log(carouselData);
  return (
    <IndexLayout>
      <IndexCarousel data={carouselData} />
      <IndexCard discount={45} />
      <IndexInfoIconText />
      <IndexCard discount={30} />
      <IndexDiscountSlider data={products} />
      <IndexCategories data={categoriesData} />
      <ProductSlider products={products} />
      <Banner banner={indexBanner_1} />
      <ProductSlider products={products} />>
    </IndexLayout>
  );
}
