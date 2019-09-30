import { TOGGLESIGNIN } from "../actions/types";

const initialState = {
    signinToggle: true
}

export default (state=initialState, action) => {
    switch (action.type) {
        case TOGGLESIGNIN:
            const toggle = state.signinToggle ? false:true;
            return {
                ...state,
                signinToggle:toggle
            }
            
        default: 
            return state;
    }
}