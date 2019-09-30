import React, { Component } from "react";
import { connect } from "react-redux";
import { TextInput, SubmitButton } from "./signup";
import { validationEmailSignIn, validationPassSignIn, saveProfileInfo } from "../actions/accountPageAction";
import { Link } from 'react-router-dom/cjs/react-router-dom';
import axios from 'axios';
// icon 
import spinner from './../common/images/loading.svg'
import lockIcon from './../common/images/lock.svg';
import emailIcon from './../common/images/mail.svg';

class SigninForm extends Component {
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
        dispatch(validationEmailSignIn(test));
    }
    validationPassword = (event) => {
        let {dispatch} = this.props;
        let target = event.target;
        let validation = target.value.length >= 8;
        this.validation(validation,target)
        // set value in store
        dispatch(validationPassSignIn(validation));
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
    animationClick = async (e) => {
        const {email: emailVal,password: passwordVal} = this.props.state.account.profile.signin;
        console.log(emailVal,passwordVal);
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


        // ////////////////////////////////////////////////////////////////
        // pre validation
        let a = this.addError('ایمیلتان معتبر نیست!',emailVal,'emailSignin');
        
        let b = this.addError('رمز عبور باید حداقل 8 کاراکتر باشد',passwordVal,'passSignin');
        
        let email = e.target.previousSibling.previousSibling.previousSibling.children[0].value;
        let password = e.target.previousSibling.previousSibling.children[0].value;
        if(a && b) {
            // change the text in the button
            e.target.innerHTML = `${e.target.innerHTML} <span class="loaderForButton"><img src=${spinner} alt="spinner" /></span>`;
            e.target.disabled = false;
            let target = e.target
            // set infos with axios
            try {
                const {data: token} = await axios.post('http://melkon.ir/panel/api/v1/login',{
                    email,password
                })
                // save the data in redux (user info)
                this.props.dispatch(saveProfileInfo(token,email,''));
            } catch(err) {
                console.log(err)
            }
            
            // change the text in the button
            // target.innerHTML = 'اطلاعات با موفقیت ثبت شد'
            // target.disabled = true;

            // rediret to main page or specief page in local storage
            // this.props.location.replace('/');
        }
    }
    render() {
        return (
            <form className="signin__form">
                <TextInput placeholder="ایمیل" 
                    id="emailSignin" 
                    labelText="ایمیل" 
                    onchange={() => this.validationEmail}
                    type="email"
                    className=""
                    icon={emailIcon}
                />
                <TextInput placeholder="رمز عبور" 
                    id="passSignin" 
                    labelText="رمز عبور" 
                    onchange={() => this.validationPassword}
                    type="password"
                    className=""
                    icon={lockIcon}
                />
                <Link to="/" className="signin__remember">رمز عبورم را فراموش کردم</Link>
                <SubmitButton text="وارد شوید" className="btn--green" onClick={this.animationClick} type="submit" />
            </form>
        )
    }
}



export default connect(state => ({ state }))(SigninForm)