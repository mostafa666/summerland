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

// import img for cards
import cardImg_1 from "../../common/images/discount.png";

export default function IndexPage() {
  return (
    <IndexLayout>
      <div className="index__layout__landing">
        <div className="index__layout__landing-s1">
          <IndexCarousel data={carouselData} />
          <IndexInfoIconText />
        </div>
        <div className="index__layout__landing-s2">
          <IndexCard discount={45} img={cardImg_1} />
        </div>
      </div>

      <div className="index__layout__offers">
        <IndexCard discount={30} />
        <IndexDiscountSlider data={products} />
      </div>

      <div className="index__layout__categories">
        <IndexCategories data={categoriesData} />
      </div>

      <div className="index__layout__product_slider">
        <ProductSlider products={products} />
      </div>

      <div className="index__layout__banner">
        <Banner banner={indexBanner_1} />
      </div>

      <div className="index__layout__product_slider">
        <ProductSlider products={products} />>
      </div>
    </IndexLayout>
  );
}
