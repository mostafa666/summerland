import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, SubmitButton } from '../signup';
import spinner from './../../common/images/loading.svg'
import lockIcon from './../../common/images/lock.svg';
import { getOldPass, getEmail, getNewPass, getConfirm } from '../../actions/accountPageAction';
import config from './../../config.json';
import axios from 'axios';
class NewPassword extends Component {
    validation = (validation,target) => {
        if(validation) {
            if(target.parentNode.children[3]){
                target.nextSibling.nextSibling.nextSibling.remove();
            }
            target.style.borderColor = 'rgb(59, 235, 235)';
            // target.parentNode.style.borderColor = 'rgb(59, 235, 235)'
        }else {
            target.style.borderColor = '#F88';
            // target.nextSibling.nextSibling.style.borderColor = '#F88'
        }
    }
    validationEmail = (event) => {
        let {dispatch} = this.props;
        let target = event.target;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let test = re.test(String(target.value).toLowerCase());
        this.validation(test && target.value.length > 0,target)
        // set value in store
        dispatch(getEmail(target.value,test && target.value.length > 0));
    }
    validationPassword = (event) => {
            let {dispatch} = this.props;
            let target = event.target;
            let validation = target.value.length >= 8;
            this.validation(validation,target)
            // set value in store
            dispatch(getOldPass(target.value,validation));
        }
    validationNewPassword = (event) => {
        let {dispatch} = this.props;
        let target = event.target;
        let validation = target.value.length >= 8;
        this.validation(validation,target)
        // set value in store
        dispatch(getNewPass(target.value,validation));
    }
    validationConfirmpassword = (event) => {
        let {dispatch,state} = this.props;
        let target = event.target;
        let validation = target.value.length >= 8 && target.value === state.account.profile.resetPass.newPassword;
        this.validation(validation,target)
        // set value in store
        dispatch(getConfirm(target.value,validation));
    }
    animationClick = async (e) => {
        e.preventDefault();
        const target = e.target;
        let circleElement = document.querySelector('.btn--clickMode');
        if(circleElement) {
            circleElement.parentElement.removeChild(circleElement);
        }
        const pos = e.target.getBoundingClientRect();
        let x = e.clientX - pos.left;
        let y = e.clientY - pos.top;
        let div = document.createElement('div');
        div.classList.add('btn--clickMode');
        div.style.top = `${y}px`;
        div.style.left = `${x}px`;
        target.append(div);
        // 
        // if(e.target.classList[0] === 'btn'){
        //     const email = e.target.previousSibling.previousSibling.previousSibling.childNodes[0].value;
        //     const newPass = e.target.previousSibling.previousSibling.childNodes[0].value;
        //     const confrimPass = e.target.previousSibling.childNodes[0].value;
        // }
        const email = this.props.state.account.profile.resetPass.email;
        const oldPass = this.props.state.account.profile.resetPass.oldPass;
        const newPassword = this.props.state.account.profile.resetPass.newPassword;
        const confirmPass = this.props.state.account.profile.resetPass.confirmPass;
        // change the button text
        target.innerHTML = `${target.innerHTML} <span class="loaderForButton"><img src=${spinner} alt="spinner" /></span>`;
        target.disabled = true;
        // send the data with axios 
        try {
            const {data: token} = await axios.post(config.api_resetPassword, {
                "email":email,
                "oldpassword" : oldPass, // this should delete
                "password" : newPassword,
                "confirm" : confirmPass
            })
            localStorage.setItem('token',token)
            target.innerHTML = 'رمز عبورتان با موفقیت تغییر یافت'
        } catch(error) {
            console.log(error);
        }
        // change the button text
        target.innerHTML = `تغییر رمز عبور`;
        target.disabled = false;
    }
    render() {
        return (
            <React.Fragment>
                <h2 className="account-heading">تغییر رمز عبور</h2>
                <div className="newPassword">
                    <div className="newPassword__container">
                        <div className="centeredHorizontal">
                            <span className="newPassword__span">رمز عبور جدید باید حداقل 8 کاراکتر داشته باشد.</span>
                        </div>
                        <TextInput placeholder="ایمیل" 
                            id="oldPass" 
                            labelText="ایمیل" 
                            onchange={() => this.validationEmail}
                            type="email"
                            className=""
                            icon={lockIcon}
                        />
                        <TextInput placeholder="رمز عبور فعلی" 
                            id="passRegister" 
                            labelText="رمز عبور فعلی" 
                            onchange={() => this.validationPassword}
                            type="password"
                            className=""
                            icon={lockIcon}
                        />
                        <TextInput placeholder="رمز عبور جدید" 
                            id="newPassRegister" 
                            labelText="رمز عبور جدید" 
                            onchange={() => this.validationNewPassword}
                            type="password"
                            className=""
                            icon={lockIcon}
                        />
                        <TextInput placeholder="تکرار رمز عبور" 
                            id="confirmPassRegister" 
                            labelText="تکرار رمز عبور" 
                            onchange={() => this.validationConfirmpassword}
                            type="password"
                            className=""
                            icon={lockIcon}
                        />
                        <SubmitButton text="تغییر رمز عبور" type="submit" className="btn--green" onClick={(e) => this.animationClick(e)} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(state => ({ state }))(NewPassword);
