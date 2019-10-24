import React, { Component } from "react";
import Modal from "react-modal";

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

Modal.setAppElement("#root");

// TODO should get the sortBy from url

export default class ProductsPage extends Component {
  state = {
    showModal: false
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
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
            <div className="products_page__products__setting">
              <div className="sorter_box__title__background"></div>
              <Sorter options={sortOption} />
              <button onClick={this.handleOpenModal}>فیلترها</button>
            </div>
            {/* // TODO dont need to pass the products here */}
            <ProductList products={products} />
          </div>
        </div>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <Sorter options={sortOption} className="mobile_mode" />
          <Filter className="tablet_mode" />
        </Modal>
      </div>
    );
  }
}
