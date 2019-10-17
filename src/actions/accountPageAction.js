import axios from 'axios';
import { FETCHWISHLIST, TOGGLESPPINER, VALIDATIONEMAILREGISTER, VALIDATIONPASSREGISTER, VALIDATIONCONFIRMREGISTER, SAVEPROFILE, VALIDATIONEMAILSIGNIN, VALIDATIONPASSWORDSIGNIN, SIGNEDINMENU, GETOLDPASS, GETEMAIL, GETCONFIRMPASS, GETCONFIRMPASSWORD, REMOVEWISHLIST, SIGNUPLOADER } from './types';
import config from './../config.json';

// load the wishList posts
export const fetchWishList = data => {
    return {
        type: FETCHWISHLIST,
        data
    };
};

export const fetchWishLists = (nickname,token) => {
    return dispatch => {
        return axios.post(config.api_get_wishList,{
            "nickname":nickname,
            "token":token
        }) 
            .then(res => {
                dispatch(fetchWishList(res.data));
            })
            .catch(error => {
                throw error;
            });
    };
};
// remove a wishList
export const removeThisWishList = (id) => {
    return {
        type: REMOVEWISHLIST,
        id
    };
};
export const removeThisWishLists = (id,nickname,token) => {
    return dispatch => {
        return axios.post(config.api_remove_WishList,{
            "productId":id,
            "nickname":nickname,
            "token":token
        }) 
            .then(res => {
            })
            .catch(error => {
                throw error;
            });
    };
};
// toggle show sppiner

export const toggleShow = data => {
    return {
        type: TOGGLESPPINER,
        data
    };
};

// VALIDATION REGISTER

export const validationEmailRegister = validation => {
    return {
        type: VALIDATIONEMAILREGISTER,
        validation
    };
};
export const validationPassRegister = (validation,password) => {
    return {
        type: VALIDATIONPASSREGISTER,
        validation,
        password
    };
};
export const validationConfirmRegister = validation => {
    return {
        type: VALIDATIONCONFIRMREGISTER,
        validation
    };
};
export const saveProfileInfo = (token,nickname,username) => {
    return {
        type: SAVEPROFILE,
        token,
        nickname,
        username
    };
};


// VALIDATION SIGNIM



export const validationEmailSignIn = validation => {
    return {
        type: VALIDATIONEMAILSIGNIN,
        validation
    };
};
export const validationPassSignIn = (validation,password) => {
    return {
        type: VALIDATIONPASSWORDSIGNIN,
        validation,
        password
    };
};

// LOGIN MENU
export const logedinMenu = (toggle) => {
    return {
        type: SIGNEDINMENU,
        toggle
    };
};

// set new password
export const getEmail = (email,validation) => {
    return {
        type: GETEMAIL,
        email,
        validation
    };
};

export const getOldPass = (oldPass,validation) => {
    return {
        type: GETOLDPASS,
        oldPass,
        validation
    };
};

export const getNewPass = (newPassword,validation) => {
    return {
        type: GETCONFIRMPASS,
        newPassword,
        validation
    };
};

export const getConfirm = (confirm,validation) => {
    return {
        type: GETCONFIRMPASSWORD,
        confirm,
        validation
    };
};


// loaders 

export const signupLoader = (toggle) => {
    return {
        type: SIGNUPLOADER,
        toggle
    };
};