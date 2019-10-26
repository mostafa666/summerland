import { SETNAMEREGISTER, SETLASTNAMEREGISTER, SETEMAILREGISTER, SETPHONEREGISTER, SETPASSWORDREGISTER, SETCONFRIMPASSWORDREGISTER, SETADDRESS, SETPOSTCODE, SENDREGISTERDATA, GETUSERPROFILE, SENDUSERPROFILE, GOTO } from "./types"
import axios from 'axios';
import config from './../config.json';
import { saveProfileInfo, logedinMenu } from "./accountPageAction";
import {toast} from 'react-toastify';
import { useHistory } from 'react-router-dom';
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
                if(error.response && error.response.status === 401) {
                    console.log('d')
                    toast.error('شمادسترسی به این صفحه را ندارید.', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }else if(error.response && error.response.status === 400) {
                    toast.error('شمادسترسی به این صفحه را ندارید', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }else if(error.response && error.response.status === 404) {
                    toast.error('شمادسترسی به این صفحه را ندارید', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }else {
                    toast.error('لطفا اینترنت خود را چک کنید', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }
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
                toast.success('اطلاعات با موفقیت تغییر یافت',{
                    position: toast.POSITION.BOTTOM_LEFT
                })
                target.disabled = false;
            })
            .catch(error => {
                if(error.response && error.response.status === 403) {
                    toast.error('اطلاعات وارد شده ناصحیح است!', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }else if(error.response && error.response.status === 400) {
                    toast.error('شما دسترسی به این صفحه را ندارید', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }else if(error.response && error.response.status === 401) {
                    toast.error('شما دسترسی به این صفحه را ندارید', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }else if(error.response && error.response.status === 404) {
                    toast.error('شما دسترسی به این صفحه را ندارید', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }else {
                    toast.error('لطفا اینترنت خود را چک کنید', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }
            });
    };
};


// قسمت ثبت نام اولیه
export const goTo = toggle => {
    return {
        type: GOTO,
        toggle
    };
};

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
                target.disabled = false;
                dispatch(goTo(true))
            })
            .catch(error => {
                if(error.response && error.response.status === 403) {
                    toast.error('این ایمیل قبلا ثبت شده است.', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }else if(error.response && error.response.status === 400) {
                    toast.error('نام کاربری یا رمز عبور مورد تایید نیست', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }else {
                    toast.error('لطفا اینترنت خود را چک کنید', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }
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
                target.innerHTML = 'ورود'
                target.disabled = false;
                dispatch(logedinMenu(true));
                toast.success('شما با موفقیت وارد شدید.', {
                    position: toast.POSITION.BOTTOM_LEFT
                  });
            })
            .catch(error => {
                if(error.response && error.response.status === 403) {
                    toast.error('این ایمیل قبلا ثبت نشده است.', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }else if(error.response && error.response.status === 400) {
                    toast.error('نام کاربری یا رمز عبور مورد تایید نیست', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }else if(error.response && error.response.status === 401) {
                    toast.error('نام کاربری یا رمز عبور اشتباه است', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }else {
                    toast.error('لطفا اینترنت خود را چک کنید', {
                        position: toast.POSITION.BOTTOM_LEFT
                      })
                }
            });
    };
};




