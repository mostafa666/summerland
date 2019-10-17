import { SETNAMEREGISTER, SETLASTNAMEREGISTER, SETEMAILREGISTER, SETPHONEREGISTER, SETPASSWORDREGISTER, SETCONFRIMPASSWORDREGISTER, SETADDRESS, SETPOSTCODE, GETUSERPROFILE } from "../actions/types";
import { SENDUSERPROFILE } from './../actions/types';

const initialState = {
    registerInfo : {
        name: '',
        lastname: '',
        address:'',
        postCode: '',
        phone: '',
        email:''
    },
    registerValidation: {
        name: false,
        lastname: false,
        address: false,
        postCode: false,
        phone: false,
        email: true,
        password: true,
        confirmPassword: true
    }
}

export default (state=initialState, action) => {
    switch (action.type) {
        case SETNAMEREGISTER:
            return {
                ...state,
                registerInfo: {
                    ...state.registerInfo,
                    name:action.name
                },
                registerValidation: {
                    ...state.registerValidation,
                    name:action.validation
                }
            }
        case SETLASTNAMEREGISTER:
            return {
                ...state,
                registerInfo: {
                    ...state.registerInfo,
                    lastname:action.lastname
                },
                registerValidation: {
                    ...state.registerValidation,
                    lastname:action.validation
                }
            }
        case SETEMAILREGISTER:
            return {
                ...state,
                registerInfo: {
                    ...state.registerInfo,
                    email:action.email
                },
                registerValidation: {
                    ...state.registerValidation,
                    email:action.validation
                }
            }
        case SETPHONEREGISTER:
            return {
                ...state,
                registerInfo: {
                    ...state.registerInfo,
                    phone:action.phone
                },
                registerValidation: {
                    ...state.registerValidation,
                    phone:action.validation
                }
            }
        case SETPASSWORDREGISTER:
            return {
                ...state,
                registerInfo: {
                    ...state.registerInfo,
                    password:action.password
                },
                registerValidation: {
                    ...state.registerValidation,
                    password:action.validation
                }
            }
        case SETCONFRIMPASSWORDREGISTER:
            return {
                ...state,
                registerInfo: {
                    ...state.registerInfo,
                    confirmPassword:action.Confpassword
                },
                registerValidation: {
                    ...state.registerValidation,
                    confirmPassword:action.validation
                }
            }
        case SETADDRESS:
            return {
                ...state,
                registerInfo: {
                    ...state.registerInfo,
                    address:action.address
                },
                registerValidation: {
                    ...state.registerValidation,
                    address:action.validation
                }
            }
        case SETPOSTCODE:
            return {
                ...state,
                registerInfo: {
                    ...state.registerInfo,
                    postCode:action.postCode
                },
                registerValidation: {
                    ...state.registerValidation,
                    postCode:action.validation
                }
            }
        case GETUSERPROFILE:
        return {
            ...state,
            registerInfo: {
                ...state.registerInfo,
                name:action.data.firstname,
                lastname:action.data.lastname,
                address:action.data.address,
                postCode:action.data.postCode,
                phone:action.data.phone,
                email:action.data.email
            }
        }

        default: 
            return state;
    }
}