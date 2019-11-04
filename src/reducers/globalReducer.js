import {
  TOGGLESIGNIN,
  SHOWLOADERINDETAILS,
  TOGGLESHOWCART,
  USERTOGGLEBOX,
  TOGGLEMOBILEMENU,
  SETSEARCHVALUE,
  FETCHSEARCHDATA,
  SETURL
} from "../actions/types";
import { TOGGLELOADERCARTMENU, SETSCREENSIZE } from "./../actions/types";

const initialState = {
  signinToggle: false,
  toggleLoaderDetails: false,
  toggleShowCart: false,
  toggleLoaderCartMenu: false,
  userToggleBox: false,
  toggleMobileMenu: false,
  screenSize: 0,
  searchValue: "",
  searchData: "",
  search: "",
  pathname: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLESIGNIN:
      const toggle = state.signinToggle ? false : true;
      return {
        ...state,
        signinToggle: toggle
      };
    case SHOWLOADERINDETAILS:
      return {
        ...state,
        toggleLoaderDetails: action.toggle
      };
    case TOGGLESHOWCART:
      const prev = state.toggleShowCart;
      return {
        ...state,
        toggleShowCart: !prev
      };
    case TOGGLELOADERCARTMENU:
      return {
        ...state,
        toggleLoaderCartMenu: action.toggle
      };
    case USERTOGGLEBOX:
      const thisState = state.userToggleBox;

      return {
        ...state,
        userToggleBox: !thisState
      };
    case TOGGLEMOBILEMENU:
      const copy = state.toggleMobileMenu;
      return {
        ...state,
        toggleMobileMenu: !copy
      };
    case SETSCREENSIZE:
      return {
        ...state,
        screenSize: action.size
      };
    case SETSEARCHVALUE:
      return {
        ...state,
        searchValue: action.value
      };
    case FETCHSEARCHDATA:
      return {
        ...state,
        searchData: action.value
      };
    case SETURL:
      return {
        ...state,
        search: action.search,
        pathname: action.pathname
      };
    default:
      return state;
  }
};
