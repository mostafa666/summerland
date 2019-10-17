import React, { Component } from "react";

import Breadcrum from "../Breadcrum";
// import Filter from "../filter/Filter";
// import Sorter from "../sorter/Sorter";
import ProductList from "../ProductList";

import Filter from "../Filter";
import Sorter from "../Sorter";

import products from "../../staticData/products";

let links = [
  { href: "#", text: "خانه" },
  { href: "#", text: "مردانه" },
  { href: "#", text: "پیراهن" }
];

const sortOption = [
  { name: "newest", text: " جدیدترین ", active: false },
  { name: "bestselling", text: " پرفروش ترین ", active: true },
  { name: "mostvisited", text: " پربازدیدترین ", active: false },
  { name: "highestprice", text: " گرانترین ", active: false },
  { name: "lowestprice", text: " ارزانترین ", active: false }
];

// TODO should get the sortBy from url

export default function ProductsPage() {
  return (
    <div className="products_page">
      <div className="products_page__title_box">
        <h1>{links[links.length - 1].text}</h1>
        <Breadcrum links={links} />
      </div>
      <div className="products_page__content">
        <div className="products_page__filter">
          <Filter />
        </div>

        <div className="products_page__products">
          <Sorter options={sortOption} />
          {/* // TODO dont need to pass the products here */}
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}
