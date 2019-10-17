import { TOGGLESIGNIN, SHOWLOADERINDETAILS } from "./types"

export const toggleSignin = () => {
    return {
        type:TOGGLESIGNIN
    }
}

export const toggleLoaderDetailspage = (toggle) => {
    return {
        type:SHOWLOADERINDETAILS,
        toggle
    }
}


