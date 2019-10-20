import { TOGGLESIGNIN, SHOWLOADERINDETAILS, TOGGLESHOWCART, USERTOGGLEBOX } from "../actions/types";
import { TOGGLELOADERCARTMENU } from './../actions/types';

const initialState = {
    signinToggle: false,
    toggleLoaderDetails: false,
    toggleShowCart: true,
    toggleLoaderCartMenu: false,
    userToggleBox:false
}

export default (state=initialState, action) => {
    switch (action.type) {
        case TOGGLESIGNIN:
            const toggle = state.signinToggle ? false:true;
            return {
                ...state,
                signinToggle:toggle
            }
        case SHOWLOADERINDETAILS:
            return {
                ...state,
                toggleLoaderDetails:action.toggle
            }
        case TOGGLESHOWCART: 
            const prev = state.toggleShowCart;
            return {
                ...state,
                toggleShowCart:!prev
            }
        case TOGGLELOADERCARTMENU: 
            return {
                ...state,
                toggleLoaderCartMenu:action.toggle
            }
        case USERTOGGLEBOX:
            const thisState = state.userToggleBox;

            return {
                ...state,
                userToggleBox:!thisState
            }

        default: 
            return state;
    }
}