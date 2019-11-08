import { FETCHPRODUCTS, SETSORTER, SETFILTERS, TOGGLEFILTERBOX } from "../actions/types";
import { PRODUCTSLOADER } from "./../actions/types";

const initialState = {
  data: [],
  filter: {
    offset: 1,
    collection: null, // spring-summer-fall-winter
    minPrice: null,
    maxPrice: null,
    colorParent: null,
    size: null, //1-l-xxl,...
    category: null,
    sort: "offer" //cheap-expensive-views-offer
  },
  productsLoader: false,
  activeSorter: "offer",
  toggleFilterBox: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHPRODUCTS:
      return {
        ...state,
        data: action.data
      };
    case SETFILTERS:
      return {
        ...state,
        filter: {
          ...state.filter,
          sort: action.sort,
          colorParent: action.colorParent,
          minPrice: action.minPrice,
          maxPrice: action.maxPrice,
          size: action.size,
          collection: action.collection,
          offset: action.offset,
          category: action.category
        }
      };
    case PRODUCTSLOADER:
      return {
        ...state,
        productsLoader: action.toggle
      };
    case SETSORTER:
      return {
        ...state,
        activeSorter: action.sortvalue,
        filter: {
          ...state.filter,
          sort: action.sortvalue
        }
      };
    case TOGGLEFILTERBOX:
      const copy = state.toggleFilterBox;
      return {
        ...state,
        toggleFilterBox: !copy
      };
    default:
      return state;
  }
};
