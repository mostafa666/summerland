import {
  TOGGLESIGNIN,
  SHOWLOADERINDETAILS,
  TOGGLESHOWCART,
  TOGGLELOADERCARTMENU,
  USERTOGGLEBOX,
  TOGGLEMOBILEMENU,
  SETSCREENSIZE,
  SETSEARCHVALUE,
  FETCHSEARCHDATA,
  SETURL,
  OFFINPUTTOGGLE
} from "./types";
import config from "./../config.json";
import axios from "axios";
export const toggleSignin = () => {
  return {
    type: TOGGLESIGNIN
  };
};

export const toggleLoaderDetailspage = toggle => {
  return {
    type: SHOWLOADERINDETAILS,
    toggle
  };
};
export const toggleShowCart = () => {
  return {
    type: TOGGLESHOWCART
  };
};

export const toggleLoaderCartMenu = toggle => {
  return {
    type: TOGGLELOADERCARTMENU,
    toggle
  };
};
export const toggleUserBox = () => {
  return {
    type: USERTOGGLEBOX
  };
};
// togg;e mobile menu
export const toggleMobileMenu = () => {
  return {
    type: TOGGLEMOBILEMENU
  };
};

export const setScreenSize = size => {
  return {
    type: SETSCREENSIZE,
    size
  };
};

export const setSearchValue = value => {
  return {
    type: SETSEARCHVALUE,
    value
  };
};

export const fetchSearchData = value => {
  return {  
    type: FETCHSEARCHDATA,
    value
  };
};
export const fetchSearchDatas = value => {
  return dispatch => {
    return axios
      .post(config.api_get_search_data, {
        title: value
      })
      .then(res => {
        dispatch(fetchSearchData(res.data));
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

export const setUrl = (pathname, search) => {
  return {
    type: SETURL,
    pathname,
    search
  };
};


export const offInputToggle = () => {
  return {
    type: OFFINPUTTOGGLE
  };
};

