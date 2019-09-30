import { SETNAMEREGISTER, SETLASTNAMEREGISTER, SETEMAILREGISTER, SETPHONEREGISTER, SETPASSWORDREGISTER, SETCONFRIMPASSWORDREGISTER, SETADDRESS, SETPOSTCODE } from "./types"

export const setNameRegister = (name,validation) => {
    return {
        type:SETNAMEREGISTER,
        name,
        validation
    }
}



export const setLastnameRegister = (lastname,validation) => {
    return {
        type:SETLASTNAMEREGISTER,
        lastname,
        validation
    }
}

export const setEmailRegister = (email,validation) => {
    return {
        type:SETEMAILREGISTER,
        email,
        validation
    }
}

export const setPhoneRegister = (phone,validation) => {
    return {
        type:SETPHONEREGISTER,
        phone,
        validation
    }
}

export const setPasswordRegister = (password,validation) => {
    return {
        type:SETPASSWORDREGISTER,
        password,
        validation
    }
}
export const setConfrimasswordRegister = (Confpassword,validation) => {
    return {
        type:SETCONFRIMPASSWORDREGISTER,
        Confpassword,
        validation
    }
}

export const setAddress = (address,validation) => {
    return {
        type:SETADDRESS,
        address,
        validation
    }
}

export const setPostCode = (postCode,validation) => {
    return {
        type:SETPOSTCODE,
        postCode,
        validation
    }
}