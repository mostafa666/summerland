import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, SubmitButton } from '../signup';
import spinner from './../../common/images/loading.svg'
import lockIcon from './../../common/images/lock.svg';
class NewPassword extends Component {
    validationEmail = (event) => {
        let {dispatch} = this.props;
        let target = event.target;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let test = re.test(String(target.value).toLowerCase());
        this.validation(test && target.value.length > 0,target)
        // set value in store
        // dispatch(setEmailRegister(target.value,test && target.value.length > 0));
    }
    validationPassword = (event) => {
            let {dispatch} = this.props;
            let target = event.target;
            let validation = target.value.length >= 8;
            this.validation(validation,target)
            // set value in store
            // dispatch(setPasswordRegister(target.value,validation));
        }
    validationConfirmpassword = (event) => {
        let {dispatch,state} = this.props;
        let target = event.target;
        let validation = target.value.length >= 8 && target.value === state.register.registerInfo.password;
        this.validation(validation,target)
        // set value in store
        // dispatch(setConfrimasswordRegister(target.value,validation));
    }
    animationClick = (e) => {
        e.preventDefault();
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
        e.target.append(div);
        // 
        if(e.target.classList[0] === 'btn'){
            const oldPass = e.target.previousSibling.previousSibling.previousSibling.childNodes[0].value;
            const newPass = e.target.previousSibling.previousSibling.childNodes[0].value;
            const confrimPass = e.target.previousSibling.childNodes[0].value;
        }
        // change the button text
        e.target.innerHTML = `${e.target.innerHTML} <span class="loaderForButton"><img src=${spinner} alt="spinner" /></span>`;
        e.target.disabled = true;
        // send the data with axios   => whoth i save new pass?
        // change the button text
        // e.target.innerHTML = 'رمز عبورتان با موفقیت تغییر یافت'
        // e.target.disabled = false;
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
                        <TextInput placeholder="رمز عبور" 
                            id="passRegister" 
                            labelText="رمز عبور" 
                            onchange={() => this.validationPassword}
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
