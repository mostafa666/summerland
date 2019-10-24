import React, { Component } from "react";

export default class Filter extends Component {
  state = {
    brands: [
      { active: false, text: "Balmain" },
      { active: false, text: "CP Company" },
      { active: true, text: "Fendi" },
      { active: false, text: "Addidas" },
      { active: false, text: "Nike" },
      { active: false, text: "360" },
      { active: false, text: "Moschino" }
    ],
    sizes: [
      { active: false, text: "22" },
      { active: true, text: "24" },
      { active: false, text: "26" },
      { active: false, text: "28" },
      { active: false, text: "32" },
      { active: false, text: "XS" },
      { active: false, text: "XL" }
    ],
    colores: [
      { active: false, color: "#432123", text: "قهوه ای" },
      { active: false, color: "#987364", text: "بادمجونی" },
      { active: true, color: "#213423", text: "سبز" },
      { active: false, color: "#875566", text: "خاکستری" }
    ],
    prices: [
      { active: true, text: "کمتر از 100 هزار تومان" },
      { active: false, text: "100 - 200" },
      { active: false, text: "200 - 500" },
      { active: false, text: "بیشر از 500 هزار تومان" }
    ]
  };
  render() {
    const clickHandler = (e, filter) => {
      const { dataset, checked } = e.target;
      const { brands, sizes, colores, prices } = { ...this.state };
      let currentState =
        filter == "brands"
          ? brands
          : filter == "colores"
          ? colores
          : filter == "prices"
          ? prices
          : sizes;
      currentState[dataset.index].active = checked;
      this.setState({ [filter]: currentState });
    };
    return (
      <div className={`filter_box ${this.props.className}`}>
        <div className="flex__j-end_to_end">
          <h3>خرید بر اساس:</h3>
          <div className="filter_box__checkbox_svg"></div>
        </div>
        <div className="filter_box__container">
          {/* <h4>برند</h4>
        <div className="filter_box__filter_container">
          <BrandFilter brands={this.state.brands} clickHandler={clickHandler} />
        </div> */}

          <h4>سایز</h4>
          <div className="filter_box__filter_container">
            <SizeFilter sizes={this.state.sizes} clickHandler={clickHandler} />
          </div>

          <h4>رنگ</h4>
          <div className="filter_box__filter_container">
            <ColorFilter
              colores={this.state.colores}
              clickHandler={clickHandler}
            />
          </div>

          <h4>قیمت</h4>
          <div className="filter_box__filter_container">
            <PriceFilter
              prices={this.state.prices}
              clickHandler={clickHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

const SizeFilter = ({ sizes, clickHandler }) => {
  return (
    <div className="filter_box__sizes">
      {sizes.map((size, i) => {
        return (
          <div className="filter_box__sizes__size">
            <input
              data-size={size.text}
              data-index={i}
              type="checkbox"
              name="size"
              id={`size-${size.text}`}
              className="filter_box__sizes__size-input"
              checked={size.active}
              onClick={e => {
                clickHandler(e, "sizes");
              }}
            />
            <div className="filter_box__sizes__size-wrapper" />
            {size.text}
          </div>
        );
      })}
    </div>
  );
};

//  Color Filter -------------------------------------------------------------

const ColorFilter = ({ colores, clickHandler }) => {
  return (
    <div className="filter_box__colores">
      {colores.map((color, i) => {
        return (
          <div className="filter_box__colores__color">
            <input
              data-size={color.text}
              data-index={i}
              type="checkbox"
              name="color"
              id={`color-${color.text}`}
              className="filter_box__colores__color-input"
              checked={color.active}
              onClick={e => {
                clickHandler(e, "colores");
              }}
            />
            <div className="flex-col">
              <div className="filter_box__colores__color-wrapper">
                <div
                  className="filter_box__colores__color-item"
                  style={{ backgroundColor: color.color }}
                />
              </div>
              {color.text}
            </div>
          </div>
        );
      })}
    </div>
  );
};

//  Brand Filter ------------------------------------------------------------

const BrandFilter = ({ brands, clickHandler }) => {
  return (
    <div className="filter_box__brands">
      {brands.map((brand, i) => {
        return (
          <div className="filter_box__brands__brand">
            <input
              data-brand={brand.text}
              data-index={i}
              type="checkbox"
              name="brand"
              id={`brand-${brand.text}`}
              className="filter_box__brands__brand-input"
              checked={brand.active}
              onClick={e => {
                clickHandler(e, "brands");
              }}
            />
            <label
              className="filter_box__brands__brand-label"
              for={`brand-${brand.text}`}
            >
              {brand.text}
            </label>
          </div>
        );
      })}
    </div>
  );
};

// Price Filter --------------------------------------------------------------------

const PriceFilter = ({ prices, clickHandler }) => {
  return (
    <div className="filter_box__prices">
      {prices.map((price, i) => {
        return (
          <div className="filter_box__prices__price">
            <input
              data-price={price.text}
              data-index={i}
              type="checkbox"
              name="price"
              id={`price-${price.text}`}
              className="filter_box__prices__price-input"
              checked={price.active}
              onClick={e => {
                clickHandler(e, "prices");
              }}
            />
            <label
              className="filter_box__prices__price-label"
              for={`price-${price.text}`}
            >
              {price.text}
            </label>
          </div>
        );
      })}
    </div>
  );
};
