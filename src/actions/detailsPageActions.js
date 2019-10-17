import {
    SETACTIVEACCORDEON,
    INCREASECOUNT,
    DECREASECOUNT,
    SELECTSIZE,
    RESETDETAILSPAGESTORE,
    GETDETAILSDATA,
    FETCHCOMMENT,
    SELECTCOLOR,
    ADDERRORINCART
} from './types';
import axios from 'axios';
import config from './../config.json';
import { toggleLoaderDetailspage } from './globalAction';
export const toggleSignin = (ref, id) => {
    return {
        type: SETACTIVEACCORDEON,
        ref,
        id
    };
};
export const addCount = count => {
    return {
        type: INCREASECOUNT,
        count
    };
};
export const decreseCount = count => {
    return {
        type: DECREASECOUNT,
        count
    };
};
// add to Cart
export const selectedSize = size => {
    return {
        type: SELECTSIZE,
        size
    };
};
export const selectedColor = color => {
    return {
        type: SELECTCOLOR,
        color
    };
};
export const resetDetailsPageReducer = () => {
    return {
        type: RESETDETAILSPAGESTORE
    };
};
export const addErrorInCart = (toggle,text) => {
    return {
        type: ADDERRORINCART,
        toggle,
        text
    };
};


// load the data in detailspage
export const getDetailsData = data => {
    return {
        type: GETDETAILSDATA,
        data
    };
};

export const getDetailsDatas = productId => {
    return dispatch => {
        // dispatch(toggleLoaderDetailspage(true));
        return axios
            .post(config.api_dtailpage, {
                productId: `${productId}`
            })
            .then(res => {
                dispatch(getDetailsData(res.data));
                dispatch(increaseView(5));
            })
            .catch(error => {
                throw error;
            });
    };
};

export const increaseView = productId => {
    return dispatch => {
        return axios
            .post(config.api_increasw_product_view, {
                productId: `${productId}`
            })
            .then(res => {
                
            })
            .catch(error => {
                console.log(error);
                throw error;
            });
    };
};

// fetchComment
export const fetchComment = comments => {
    return {
        type: FETCHCOMMENT,
        comments
    };
};

export const fetchComments = productId => {
    return dispatch => {
        return axios
            .post(config.api_get_comments, {
                productId: `${productId}`
            })
            .then(res => {
                dispatch(fetchComment(res.data));
            })
            .catch(error => {
                throw error;
            });
    };
};
