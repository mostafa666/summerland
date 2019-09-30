import { FETCHWISHLIST, TOGGLESPPINER, SAVEPROFILE, VALIDATIONEMAILREGISTER, VALIDATIONPASSREGISTER, VALIDATIONEMAILSIGNIN, VALIDATIONPASSWORDSIGNIN } from "../actions/types";
import { VALIDATIONCONFIRMREGISTER } from './../actions/types';


const initialState = {
    wishList: {
            wishlists: [
                {
                    title: 'پیراهن سیاه یقه گرد دور دوز',
                    size: [{ size: 'XL', id: 1 }],
                    id: 23,
                    link:'/',
                    imageSource:''
                /*
                    jensiat bayad gerefte shavad baraye sakhtane url
                */
                }
            ],
            loader:false
        },
        profile: {
            token:'',
            nickname:'',
            username:"",
            registerValidation: {
                passwordvalue:'',
                email:false,
                password:false,
                confirm:false
            },
            loginValidation: {
                email:false,
                password:false
            },
            signin: {
                email:'',
                password:''
            },
        isLogedIn:false
        }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHWISHLIST:
            return {
                ...state,
                wishLists: action.data
            }
        case TOGGLESPPINER:
            return {
                ...state,
                loader: action.data
            }
        case SAVEPROFILE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    token:action.token,
                    nickname:action.nickname,
                    username:action.username
                }
            }
        case VALIDATIONEMAILREGISTER:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    registerValidation: {
                        ...state.profile.registerValidation,
                        email:action.validation
                    }
                }
            }
        case VALIDATIONPASSREGISTER: 
            return {
                ...state,
                profile: {
                    ...state.profile,
                    registerValidation: {
                        ...state.profile.registerValidation,
                        password:action.validation,
                        passwordvalue:action.password
                    }
                }
            }
        case VALIDATIONCONFIRMREGISTER:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    registerValidation: {
                        ...state.profile.registerValidation,
                        confirm:action.validation
                    }
                }
            }
            

        case VALIDATIONEMAILSIGNIN:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    signin: {
                        ...state.profile.signin,
                        email:action.validation
                    }
                }
            }
        case VALIDATIONPASSWORDSIGNIN:
                return {
                    ...state,
                    profile: {
                        ...state.profile,
                        signin: {
                            ...state.profile.signin,
                            password:action.validation
                        }
                    }
                }
        default:
            return state;
    }
};
