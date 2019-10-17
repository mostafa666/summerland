import { FETCHWISHLIST, TOGGLESPPINER, SAVEPROFILE, VALIDATIONEMAILREGISTER, VALIDATIONPASSREGISTER, VALIDATIONEMAILSIGNIN, VALIDATIONPASSWORDSIGNIN, SIGNEDINMENU, GETOLDPASS, GETEMAIL, GETCONFIRMPASS, GETCONFIRMPASSWORD, REMOVEWISHLIST, SIGNUPLOADER } from "../actions/types";
import { VALIDATIONCONFIRMREGISTER } from './../actions/types';


const initialState = {
    wishList: {
            wishlists: [
                // {
                //     title: 'پیراهن سیاه یقه گرد دور دوز',
                //     size: [{ size: 'XL', id: 1 }],
                //     id: 23,
                //     link:'/',
                //     imageSource:''
                // /*
                //     jensiat bayad gerefte shavad baraye sakhtane url
                // */
                // }
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
            resetPass: {
                email:'',
                oldPass:'',
                newPassword:'',
                confirmPass:'',
                validationEmail:false,
                validationOldPass:false,
                validationNewPass:false,
                validationConfirm:false
            },
        isLogedIn:false
        },
    signupLoader: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        

        case SIGNEDINMENU:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    isLogedIn: action.toggle
                }
            }
        case FETCHWISHLIST:
            return {
                ...state,
                wishList: {
                    ...state.wishList,
                    wishlists:action.data
                }
            }
        case REMOVEWISHLIST:
            let copy = state.wishList.wishlists;
            let newWishList = copy.filter(post => post.productId !== action.id);
            return {
                ...state,
                wishList: {
                    ...state.wishList,
                    wishlists:newWishList
                }
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
        // reset pass
        case GETEMAIL:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    resetPass: {
                        ...state.profile.resetPass,
                        email:action.email,
                        validationEmail:action.validation


                    }
                }
            }
        case GETOLDPASS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    resetPass: {
                        ...state.profile.resetPass,
                        oldPass:action.oldPass,
                        validationOldPass:action.validation
                    }
                }
            }
        case GETCONFIRMPASS:
                return {
                    ...state,
                    profile: {
                        ...state.profile,
                        resetPass: {
                            ...state.profile.resetPass,
                            newPassword:action.newPassword,
                            validationNewPass:action.validation
                        }
                    }
                }
        case GETCONFIRMPASSWORD:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    resetPass: {
                        ...state.profile.resetPass,
                        confirmPass:action.confirm,
                        validationConfirm:action.validation
                    }
                }
            }
        // LOADERS
        case SIGNUPLOADER:
            return {
                ...state,
                signupLoader:action.toggle
            }
        
        default:
            return state;
    }
};
