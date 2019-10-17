import { TOGGLESIGNIN, SHOWLOADERINDETAILS } from "../actions/types";

const initialState = {
    signinToggle: false,
    toggleLoaderDetails: false
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
        default: 
            return state;
    }
}