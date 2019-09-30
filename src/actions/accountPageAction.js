import axios from 'axios';
import { FETCHWISHLIST, TOGGLESPPINER, VALIDATIONEMAILREGISTER, VALIDATIONPASSREGISTER, VALIDATIONCONFIRMREGISTER, SAVEPROFILE, VALIDATIONEMAILSIGNIN, VALIDATIONPASSWORDSIGNIN } from './types';


// load the wishList posts
export const fetchWishList = data => {
    return {
        type: FETCHWISHLIST,
        data
    };
};

export const fetchWishLists = (nickname) => {
    return dispatch => {
        return axios.post('http://melkon.ir/panel/api/v1/getUserProfile',{nickname}) // set the url
            .then(res => {
                dispatch(fetchWishList(res.data));
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