import { SETNAMEREGISTER, SETLASTNAMEREGISTER, SETEMAILREGISTER, SETPHONEREGISTER, SETPASSWORDREGISTER, SETCONFRIMPASSWORDREGISTER, SETADDRESS, SETPOSTCODE, SENDREGISTERDATA, GETUSERPROFILE, SENDUSERPROFILE } from "./types"
import axios from 'axios';
import config from './../config.json';
import { saveProfileInfo, logedinMenu } from "./accountPageAction";

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
// get userinfo
export const getUserProfile = data => {
    return {
        type: GETUSERPROFILE,
        data
    };
};

export const getUserProfiles = (nickname,token) => {
    return dispatch => {
        return axios.post(config.api_getUserProfile,{
            "nickname":`${nickname}`,
            "token": `${token}`
        }) 
            .then(res => {
                dispatch(getUserProfile(res.data));
            })
            .catch(error => {
                throw error;
            });
    };
};
// send user info

export const sendUserProfiles = (userInfo,nickname,target,token) => {
    return dispatch => {
        return axios.post(config.api_sendUserProfile,{
            "firstname":userInfo.name,
            "lastname":userInfo.lastname,
            "address":userInfo.address,
            "postCode":userInfo.postCode,
            "phone":userInfo.phone,
            "nickname":nickname,
            "token": token
        })
            .then(res => {
                console.log(res);
                target.innerHTML = 'اطلاعات با موفقیت تغییر یافت'
                target.disabled = false;
            })
            .catch(error => {
                throw error;
            });
    };
};


// قسمت ثبت نام اولیه

export const sendRegisterDatas = (email,
    password,confirm,target,history) => {
    return dispatch => {
        console.log(email,password,confirm)
        return axios
            .post(config.api_register, {
                "email":email,
                "password" : password, 
                "confirm" : confirm
            })
            .then(res => {
                const newEmail = email.split('@')[0];
                let token = res.data;
                dispatch(saveProfileInfo(token,newEmail,''));
                localStorage.setItem('token',token);
                localStorage.setItem('nickname',newEmail);
                // change the text in the button
                target.innerHTML = 'اطلاعات با موفقیت ثبت شد'
                target.disabled = true;
                // rediret to main page or specief page in local storage
                let savedUrl = sessionStorage.getItem('userCurrentUrl');
                if(savedUrl) {
                    history.push({
                        pathname: `/${savedUrl}`
                    });
                    sessionStorage.removeItem('userCurrentUrl');
                    dispatch(logedinMenu(true));
                }else {
                    history.push({
                        pathname: `/`
                    });
                    dispatch(logedinMenu(true));
                }
            })
            .catch(error => {
                throw error;
            });
    };
};



// login 

export const sendLogins = (email,password,target,history) => {
    return dispatch => {
        return axios.post(config.api_login,{
            "email":email,
            "password" : password
        })
            .then(res => {
                const newEmail = email.split('@')[0];
                let token = res.data;
                dispatch(saveProfileInfo(token,newEmail,''));
                localStorage.setItem('token',token);
                localStorage.setItem('nickname',newEmail);
                // change the text in the button
                target.innerHTML = 'اطلاعات با موفقیت ثبت شد'
                target.disabled = true;
                dispatch(logedinMenu(true));
                // rediret to main page or specief page in local storage
                let savedUrl = sessionStorage.getItem('userCurrentUrl');
                if(savedUrl) {
                    history.push({
                        pathname: `/${savedUrl}`
                    });
                    sessionStorage.removeItem('userCurrentUrl');
                    dispatch(logedinMenu(true));
                }else {
                    dispatch(logedinMenu(true));
                }
            })
            .catch(error => {
                throw error;
            });
    };
};




