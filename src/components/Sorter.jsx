import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// TODO --- add action for fetching new sorted data

export default class Sorter extends Component {
  state = {
    options: this.props.options
  };

  // todo ---- must be refactor if possible
  handleClick = e => {
    const key = e.target.dataset.key;
    this.setState(() => {
      return {
        options: this.state.options.map((item, i) => {
          const active = i == key ? true : false;
          return { name: item.name, text: item.text, active: active };
        })
      };
    });
  };

  // TODO should make the functionality for sorter to change the url

  render() {
    const isActive = (path, match, location) => {
      return !!(path === location.pathname + location.search);
    };
    return (
      <div className={`sorter_box ${this.props.className}`}>
        <div className="sorter_box__title">
          <h4> مرتب سازی بر اساس:</h4>
        </div>
        <div className="sorter_box__sort_options">
          {this.state.options.map((option, i) => {
            return (
              <NavLink
                to={{
                  pathname: "/products",
                  search: `sortBy=${option.name}`
                }}
                exact
                isActive={isActive.bind(
                  this,
                  `/products?sortBy=${option.name}`
                )}
                name={option.name}
                className="sorter_box__button"
                activeClassName="active"
                data-key={i}
              >
                {option.text}
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}
