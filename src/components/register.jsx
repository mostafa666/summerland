import React, { Component } from "react";
import { connect } from "react-redux";
import { SubmitButton, TextInput } from "./signup";
import axios from 'axios';
// user icon
import spinner from './../common/images/loading.svg'
import lockIcon from './../common/images/lock.svg';
import emailIcon from './../common/images/mail.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { CheckBox } from "./filterBox";
import { validationEmailRegister, validationPassRegister, validationConfirmRegister, saveProfileInfo } from "../actions/accountPageAction";


class Register extends Component {
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
        this.validation(test && target.value.length > 0,target);
        dispatch(validationEmailRegister(test));
    }
    validationPassword = (event) => {
        let {dispatch} = this.props;
        let target = event.target;
        let validation = target.value.length >= 8;
        this.validation(validation,target)
        // set value in store
        dispatch(validationPassRegister(validation,target.value));
    }
    validationConfirmpassword = (event) => {
        let {dispatch,state} = this.props;
        let target = event.target;
        let validation = target.value.length >= 8 && target.value === state.account.profile.registerValidation.passwordvalue;
        console.log(validation)
        this.validation(validation,target)
        // set value in store
        dispatch(validationConfirmRegister(validation));
    }
    animationClick = async (e) => {
        const {email: emailVal,password: passwordVal,confirm: confirmVal} = this.props.state.account.profile.registerValidation;
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
        // pre validation
        let a = this.addError('ایمیلتان معتبر نیست!',emailVal,'emailregister');
        let b = this.addError('رمز عبور باید حداقل 8 کاراکتر باشد',passwordVal,'passRegister');
        let c = this.addError('با رمز ورودتان سازگاری ندارد',confirmVal,'confirmPassRegister');
        
        
        let email = e.target.previousSibling.previousSibling.previousSibling.previousSibling.children[0].value;
        let password = e.target.previousSibling.previousSibling.previousSibling.children[0].value;
        let confirm = e.target.previousSibling.previousSibling.children[0].value;
        
        if(a && b && c) {
            // change the text in the button
            e.target.innerHTML = `${e.target.innerHTML} <span class="loaderForButton"><img src=${spinner} alt="spinner" /></span>`;
            e.target.disabled = false;
            let target = e.target
            // set infos with axios
            try {
                const {data: token} = await axios.post('http://melkon.ir/panel/api/v1/register',{
                    email,password,confirm
                })
                this.props.dispatch(saveProfileInfo(token,email,''));
            } catch(err) {
                console.log(err)
            }
            // save the data in redux (user info)
            
            // change the text in the button
            target.innerHTML = 'اطلاعات با موفقیت ثبت شد'
            target.disabled = true;
            // rediret to main page or specief page in local storage
            // this.props.location.replace('/');
        }
    }
    addError = (text,fielsValidation,id) => {
        if(!fielsValidation) {
            if(document.querySelector(`#${id} ~ .input__error`)) return false;
            let registerName = document.querySelector(`#${id}`).parentNode;
            let paragraph = document.createElement('p');
            paragraph.append(text);
            paragraph.classList.add('input__error');
            registerName.append(paragraph);
            return false;
        }
        return true;
    }
    toggleRemember = () => {
            console.log('aaa')
    }
    render() {
        const data = [
            {
                id:"rememberMe",
                text:"مرا به خاطر بسپار",
                name:"rememberMe"
            }
        ]
        return (
            <div className="register">
                <div className="register__form--container">
                    <form className="register__form">
                        <div className="register__header">
                            <h2 className="register__header--heading">ثبت نام در سامرلند</h2>
                        </div>
                        <div className="register__body">
                            <TextInput placeholder="ایمیل" 
                                id="emailregister" 
                                labelText="ایمیل" 
                                onchange={() => this.validationEmail}
                                type="email"
                                className=""
                                icon={emailIcon}
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
                            <CheckBox data={data} onchange={this.toggleRemember} />
                            <SubmitButton text="ثبت نام" type="submit" className="btn--blue" onClick={this.animationClick} />
                            <span className="register__registered">قبلاً ثبت نام کرده‌ام <Link to="/signin">ورود</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(state => ({ state }))(Register)