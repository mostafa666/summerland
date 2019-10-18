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

export default function IndexPage() {
  return (
    <IndexLayout>
      <IndexCarousel />
      <IndexCard />
      <IndexInfoIconText />
      <IndexCard />
      <IndexDiscountSlider />
      <IndexCategories />
      <ProductSlider />
      <Banner />
      <ProductSlider />
    </IndexLayout>
  );
}
