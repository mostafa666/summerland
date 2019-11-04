import React from "react";
import FilterBox from "../filterBox";
import { filterColor, filterPrice, filterSize, filterCollection } from "../../staticData/products";
import Card from "./card";
// import cloth from "./../../common/images/cloth.jpeg";
import { fetchProducts, productLoader, sorter, setFilter, toggleFilterBoxs } from "../../actions/productsAction";
import { connect } from "react-redux";
import Loader from "./../loader";
import { filterProducts } from "./../../actions/productsAction";
import queryString from "query-string";
import { Link, useLocation } from "react-router-dom";
import { setLinkUrl } from "../../staticData/utilities/setLink";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import convertNumbersPersian from "../../staticData/utilities/convertNumbersPersian";
import { animateScroll as scroll } from 'react-scroll';
import { setUrl } from './../../actions/globalAction';
import closeIcon from './../../common/images/cancel.svg'
class ProductsPage extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate")
    const {dispatch,state} = this.props;
    const {search,pathname} = state.global;
    const  {
      offset,
      collection,
      minPrice,
      maxPrice,
      colorParent,
      size,
      category,
      sort
    } = state.products.filter;
      /**
      * this is the initial render
      * without a previous prop change
      */
    if(prevProps == undefined) {
        return false
    }

    /**
      * new Project in town ?
      */
    if (search != this.props.location.search) {
      dispatch(productLoader(true));
      dispatch(filterProducts(sort, colorParent, minPrice, maxPrice, size, collection, offset, category));
      dispatch(productLoader(false));
      dispatch(setUrl(this.props.location.pathname,this.props.location.search));
      // alert()
    }

  }
   componentWillMount() {
    console.log("componentWillmount");
    this.unlisten = this.props.history.listen((location, action) => {
      this.props.dispatch(productLoader(false));
    });
    const { dispatch, state } = this.props;
    let {search, pathname} = this.props.location;
    let searchObg = queryString.parse(search);
    let { params } = this.props.match;
    dispatch(setUrl(pathname,search));
    // /////////////////////////////////////////////// filter and sort default values
    let sort = null; //cheap-expensive-views-offer
    let colorParent = null; //red, blue, pink, white
    let minPrice = null; // number
    let maxPrice = null; // number
    let price = null; // firstPrice, secondPrice, thirdPrice
    let size = null;
    let collection = null; //spring, summer, fall, winter
    let offset = 0; // number
    let category = null;

    // /////////////////////////////////////////// set filters value of url
    if (Object.keys(params).length > 0) {
      category = Object.values(params)[Object.values(params).length - 1];
    }

    if (searchObg.collection) {
      if (
        searchObg.collection === "spring" ||
        searchObg.collection === "summer" ||
        searchObg.collection === "fall" ||
        searchObg.collection === "winter"
      ) {
        collection = searchObg.collection;
      }
    }
    if (searchObg.sort) {
      if (
        searchObg.sort === "expensive" ||
        searchObg.sort === "offer" ||
        searchObg.sort === "cheap" ||
        searchObg.sort === "views"
      ) {
        sort = searchObg.sort;
      }
    }
    if (searchObg.colorParent) {
      if (
        searchObg.colorParent === "red" ||
        searchObg.colorParent === "blue" ||
        searchObg.colorParent === "pink" ||
        searchObg.colorParent === "white"
      ) {
        colorParent = searchObg.colorParent;
      }
    }
    if (searchObg.size) {
      size = searchObg.size;
    }

    if (searchObg.price) {
      if (price === "firstPrice") {
        minPrice = null;
        maxPrice = 200000;
      }else if(price === "secondPrice") {
        minPrice = 200000;
        maxPrice = 500000;
      }else if(price === "thirdPrice") {
        minPrice = 500000;
        maxPrice = null;
      }else {
        minPrice = null;
        maxPrice = null;
      }
    }
    if (searchObg.offset) {
      if (!isNaN(Number(searchObg.offset))) {
        offset = searchObg.offset;
      }
    }
    // //////////////////////////////////////////  set values in store
    dispatch(setFilter(sort, colorParent, minPrice, maxPrice, size, collection, offset, category));

    dispatch(productLoader(true));
     dispatch(filterProducts(sort, colorParent, minPrice, maxPrice, size, collection, offset, category));
    dispatch(productLoader(false));

    // console.log(userId.grouping2);
    // console.log(userId);
    // if (state.products.data.length > 0) return;
    // await dispatch(fetchProducts());
    // console.log(this.props.state.products.data);
  }
  componentWillUnmount() {
    this.unlisten();
  }
  componentDidMount() {
    console.log("componentDidMount");
    
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.location !== this.props.location) {
      // this.props.dispatch(productLoader(true));
      // scroll to top
      scroll.scrollToTop();
      return true;
    }
    return true;
  }
  onchangeColor = (filter, location, history) => {
    const { pathname, search } = location;
    history.push(setLinkUrl(pathname, search, { colorParent: filter.colorParent }));
  };
  onchangeSize = (filter, location, history) => {
    const { pathname, search } = location;
    history.push(setLinkUrl(pathname, search, { size: filter.size }));
  };
  onchangePrice = (filter, location, history) => {
      const { pathname, search } = location;
      history.push(setLinkUrl(pathname, search, {
      price: filter.price
     }));
  };
  onchangeCollection = (filter, location, history) => {
    const { pathname, search } = location;
    history.push(setLinkUrl(pathname, search, { collection: filter.collection }));
  };
  handlepage = page => {
    const { location, history } = this.props;
    const { pathname, search } = location;

    history.push(setLinkUrl(pathname, search, { offset: page }));
  };
  itemRender = (current, type, element) => {
    if (type === "page") {
      return <a href={`#${current}`}>{convertNumbersPersian(current)}</a>;
    }
    return element;
  };
  render() {
    console.log('renderd')
    const { dispatch, state, location, history } = this.props;
    const { productsLoader, data, activeSorter,toggleFilterBox } = this.props.state.products;
    const style = {
      transform: toggleFilterBox? 'translateX(0)': 'translateX(100%)'
    }
    const fStyle = () => {
      if (window.innerWidth < 900) {
        return style;
      }else {
        return {
          transform: 'translateX(0)'
        }
      }
    }
    return (
      <div className="products__container">
        <div className="products">
          <div className="products__right" style={fStyle()}>
            <div className="products__right__filterBox">
              <img onClick={() => dispatch(toggleFilterBoxs())} src={closeIcon} alt="آیکن بستن"/>
              <FilterBox
                history={history}
                location={location}
                onchange={this.onchangeCollection}
                title="فصل"
                data={filterCollection}
              />
              <FilterBox history={history} location={location} onchange={this.onchangeSize} title="سایز" data={filterSize} />
              <FilterBox history={history} location={location} onchange={this.onchangeColor} title="رنگ" data={filterColor} />
              <FilterBox history={history} location={location} onchange={this.onchangePrice} title="قیمت" data={filterPrice} />
            </div>
          </div>
          <div className="products__left">
            <Loader toggle={productsLoader} />
            <div className="products__left--sorter">
              <Sorter dispatch={dispatch} state={state} activeSorter={activeSorter} />
            </div>
            <div className="products__left--cards">
              {data.map(data => (
                <Card data={data} key={data.productId} />
              ))}
            </div>
            <Pagination
              pageSize={18}
              showTitle={false}
              itemRender={this.itemRender}
              onChange={this.handlepage}
              current={Number(state.products.filter.offset)}
              total={235}
              style={{ flexDirection: "row-reverse", display: "flex", justifyContent: "center", margin: "30px" }}
            />
          </div>{" "}
          {/*  // state.products.filter.offset */}
        </div>
      </div>
    );
  }
}

const Sorter = ({ activeSorter, dispatch, state }) => {
  const { pathname, search } = useLocation();
  return (
      <React.Fragment>
        <ul className="sorter">
        <li className={activeSorter === "offer" ? "activeSorter" : ""}>
          <Link to={setLinkUrl(pathname, search, { sort: "offer" })}>جدیدترین</Link>
        </li>
        <li className={activeSorter === "views" ? "activeSorter" : ""}>
          <Link to={setLinkUrl(pathname, search, { sort: "views" })}>پربازدیدترین</Link>
        </li>
        <li className={activeSorter === "cheap" ? "activeSorter" : ""}>
          <Link to={setLinkUrl(pathname, search, { sort: "cheap" })}>ارزانترین</Link>
        </li>
        <li className={activeSorter === "expensive" ? "activeSorter" : ""}>
          <Link to={setLinkUrl(pathname, search, { sort: "expensive" })}>گرانترین</Link>
        </li>
      </ul>
      <button onClick={() => dispatch(toggleFilterBoxs())}>فیلتر</button>
    </React.Fragment>
  );
};

export default connect(state => ({ state }))(ProductsPage);
