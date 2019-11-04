import React, { Component } from "react";
import { connect } from "react-redux";
import { setLinkUrl } from "../staticData/utilities/setLink";
import queryString from "query-string";

class FilterBox extends Component {
  render() {
    return (
      <div className="filterBox">
        <h3>{this.props.title}</h3>
        <CheckBox
          data={this.props.data}
          onchange={this.props.onchange}
          location={this.props.location}
          history={this.props.history}
        />
      </div>
    );
  }
}

export const CheckBox = ({ data, onchange, location, history }) => {
  let { search } = location;
  let searchObg = queryString.parse(search);
  let searchValues = Object.values(searchObg);
  return (
    <div>
      {data.map(data => {
        const checked = searchValues.find(search => search === data.value);
        return (
          <div className="checkbox" key={data.id}>
            <input
              onChange={() => onchange(data.filter, location, history)}
              type="radio"
              id={data.id}
              className="checkbox__input"
              name={data.name}
              checked={checked}
            />
            <label htmlFor={data.id} className="checkbox__container">
              <div className="checkbox__label">
                <div className="effect" />
              </div>
              <span className="checkbox__text">{data.text}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default connect(state => ({ state }))(FilterBox);
