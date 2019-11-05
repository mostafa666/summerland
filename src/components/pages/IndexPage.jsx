import React from "react";

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
import { index } from "../../staticData/products";
import carouselData from "../../staticData/carouselData";
import categoriesData from "../../staticData/categoriesData";
import { indexBanner_1, indexBanner_2 } from "../../staticData/banner";

// import img for cards
import cardImg_1 from "../../common/images/discount.png";

export default function IndexPage() {
  return (
    <div className="index__layout">
      <div className="index__layout__landing">
        <div className="index__layout__landing-s1">
          <IndexCarousel data={index.slider} />
          <IndexInfoIconText />
        </div>
        <div className="index__layout__landing-s2">
          <IndexCard discount={45} img={cardImg_1} link="/link" />
        </div>
      </div>

      <div className="index__layout__offers">
        <div className="index__layout__offers-s1">
          <IndexCard discount={30} img={cardImg_1} link="/link" />
        </div>
        <div className="index__layout__offers-s2">
          <IndexDiscountSlider data={index.lastProducts} />
        </div>
      </div>

      <div className="index__layout__categories">
        <IndexCategories data={categoriesData} />
      </div>

      {/* <div className="index__layout__product_slider">
        <ProductSlider products={index.lastProducts} title="آخرین محصولات" />
      </div> */}

      <div className="index__layout__banner">
        <Banner banner={indexBanner_1} />
      </div>

      {/* <div className="index__layout__product_slider">
        <ProductSlider products={index.mostViewProducts} title="پربازدیدترین ها" />>
      </div> */}
    </div>
  );
}
