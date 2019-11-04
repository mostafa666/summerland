import axios from "axios";
import config from "./../config.json";
import { FETCHPRODUCTS, PRODUCTSLOADER, SETSORTER, SETFILTERS, TOGGLEFILTERBOX } from "./types.js";

// fetch products

export const fetchProduct = data => {
  return {
    type: FETCHPRODUCTS,
    data
  };
};

// loader
export const productLoader = toggle => {
  return {
    type: PRODUCTSLOADER,
    toggle
  };
};

///////////////////////// filter products

// sort products
export const sorter = sortvalue => {
  return {
    type: SETSORTER,
    sortvalue
  };
};

export const filterProducts = (sortValue, colorParent, minPrice, maxPrice, size, collection, offset, category) => {
  return dispatch => {
    dispatch(sorter(sortValue));
    return axios
      .post(config.api_filter_products, {
        offset: offset,
        collection: collection,
        minPrice: minPrice,
        maxPrice: maxPrice,
        colorParent: colorParent,
        size: size,
        category: null,
        sort: sortValue
      })
      .then(res => {
        console.log(sortValue);
        console.log(res.data);
        dispatch(fetchProduct(res.data));
      })
      .catch(error => {
        // if(error.response && error.response.status === 403) {
        //     toast.error('این ایمیل قبلا ثبت نشده است.', {
        //         position: toast.POSITION.BOTTOM_LEFT
        //       })
        // }else if(error.response && error.response.status === 400) {
        //     toast.error('نام کاربری یا رمز عبور مورد تایید نیست', {
        //         position: toast.POSITION.BOTTOM_LEFT
        //       })
        // }else if(error.response && error.response.status === 401) {
        //     toast.error('نام کاربری یا رمز عبور اشتباه است', {
        //         position: toast.POSITION.BOTTOM_LEFT
        //       })
        // }else {
        //     toast.error('لطفا اینترنت خود را چک کنید', {
        //         position: toast.POSITION.BOTTOM_LEFT
        //       })
        // }
      });
  };
};
export const setFilter = (sort, colorParent, minPrice, maxPrice, size, collection, offset, category) => {
  return {
    type: SETFILTERS,
    sort,
    colorParent,
    minPrice,
    maxPrice,
    size,
    collection,
    offset,
    category
  };
};

// toggle filter box
export const toggleFilterBoxs = () => {
  return {
    type: TOGGLEFILTERBOX
  };
};
