import { TOGGLESIGNIN, SHOWLOADERINDETAILS, TOGGLESHOWCART, TOGGLELOADERCARTMENU, USERTOGGLEBOX, TOGGLEMOBILEMENU, SETSCREENSIZE } from "./types"

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
// togg;e mobile menu
export const toggleMobileMenu = () => {
    return {
        type:TOGGLEMOBILEMENU
    }
}

export const setScreenSize = (size) => {
    return {
        type:SETSCREENSIZE,
        size
    }
}
