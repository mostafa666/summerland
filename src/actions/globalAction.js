import { TOGGLESIGNIN, SHOWLOADERINDETAILS, TOGGLESHOWCART, TOGGLELOADERCARTMENU, USERTOGGLEBOX } from "./types"

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
export const toggleShowCart = () => {
    return {
        type:TOGGLESHOWCART
    }
}

export const toggleLoaderCartMenu = (toggle) => {
    return {
        type:TOGGLELOADERCARTMENU,
        toggle
    }
}
export const toggleUserBox = () => {
    return {
        type:USERTOGGLEBOX
    }
}