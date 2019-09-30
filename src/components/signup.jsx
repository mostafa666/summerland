import React, { Component } from "react";
import emailIcon from './../common/images/mail.svg'
import { setNameRegister, setLastnameRegister, setEmailRegister, setPhoneRegister, setPasswordRegister, setConfrimasswordRegister, setAddress, setPostCode } from './../actions/registerAction';
import { connect } from "react-redux";
import {inputs} from './../staticData/input';
import spinner from './../common/images/loading.svg'
import lockIcon from './../common/images/lock.svg';
class Signup extends Component {
    componentDidMount() {}

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
        dispatch(setEmailRegister(target.value,test && target.value.length > 0));
    }
    validationName = (event) => {
        let {dispatch} = this.props;
        let target = event.target;
        let validation = target.value.length > 3;
        this.validation(validation,target)
        // set value in store
        dispatch(setNameRegister(target.value,validation));
    }
    validationLastname = (event) => {
        let {dispatch} = this.props;
        let target = event.target;
        let validation = target.value.length > 3;
        this.validation(validation,target)
        // set value in store
        dispatch(setLastnameRegister(target.value,validation));
    }
    validationNumber = (event) => {
        let {dispatch} = this.props;
        var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        let target = event.target;
        let validation = Boolean(target.value.match(re));
        this.validation(validation,target)
        // set value in store
        dispatch(setPhoneRegister(target.value,validation));
        
    }
    validationPassword = (event) => {
        let {dispatch} = this.props;
        let target = event.target;
        let validation = target.value.length >= 8;
        this.validation(validation,target)
        // set value in store
        dispatch(setPasswordRegister(target.value,validation));
    }
    validationConfirmpassword = (event) => {
        let {dispatch,state} = this.props;
        let target = event.target;
        let validation = target.value.length >= 8 && target.value === state.register.registerInfo.password;
        this.validation(validation,target)
        // set value in store
        dispatch(setConfrimasswordRegister(target.value,validation));
    }
    validationAddress = (event) => {
        let {dispatch} = this.props;
        let target = event.target;
        let validation = target.value.length > 1;
        this.validation(validation,target)
        // set value in store
        dispatch(setAddress(target.value,validation));
    }
    validationPostCode = (event) => {
        let {dispatch} = this.props;
        let target = event.target;
        let validation = target.value.length === 12;
        this.validation(validation,target)
        // set value in store
        dispatch(setPostCode(target.value,validation));
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
    
    animationClick = (e) => {
        const {
            name,
            lastname,
            address,
            postCode,
            phoneNumber,
            email,
            password,
            confirmPassword
        } = this.props.state.register.registerValidation;
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
        let a = this.addError('حداقل 3 کاراکتر باید باشد',name,'inputName');
        let b = this.addError('حداقل 3 کاراکتر باید باشد',lastname,'inputLastname');
        let c = this.addError('آدرستان را دقیق وارد کنید',address,'inputAddress');
        let d = this.addError('کد پستی صحیح نیست',postCode,'inputPostcode');
        let ee = this.addError('شماره موبایل معتبر وارد نمایید',phoneNumber,'inputNumber');
        let f = this.addError('ایمیلتان معتبر نیست',email,'inputEmail');
        let g = this.addError('رمز عبور باید حداقل 8 کاراکتر باشد',password,'inputPassword');
        let h = this.addError('با رمز ورودتان سازگاری ندارد',confirmPassword,'inputConfrinPassword');
        if(a && b && c && d && ee && f && g && h) {
            // change the text in the button
            // e.target.innerHTML = `${e.target.innerHTML} <span class="loaderForButton"><img src=${spinner} alt="spinner" /></span>`;
            // e.target.disabled = true;
            // change the text in the button
            // set infos with axios
            // e.target.innerHTML = 'اطلاعات با موفقیت تغییر یافت'
            // e.target.disabled = false;
        }

        
    }
    render() {
        
        return (
                <React.Fragment>
                    <h2 className="account-heading">تغییر اطلاعات کاربری</h2>
                    <div className="signup">
                        <div className="row u-padding-small">
                            <form>
                                <h2 className="secondary-heading--bold centeredHorizontal u-margin-bottom-small ">اگر تازه به سامرلند آمده‌اید و اطلاعات خود را تکمیل نکرده اید اطلاعات مورد نیاز را وارد کنید</h2>
                                <div className="col-1-of-2 u-padding-small">
                                    <h2 className="secondary-heading">اطلاعات شخصی</h2>
                                    <div className="row margin-zero">
                                        <div className="col-1-of-2">
                                            <TextInput icon={lockIcon} placeholder={inputs[0].placeholder} id={inputs[0].id} labelText={inputs[0].labelText} onchange={() => this.validationName} type={inputs[0].type} />
                                        </div>
                                        <div className="col-1-of-2">
                                            <TextInput icon={lockIcon} placeholder={inputs[1].placeholder} id={inputs[1].id} labelText={inputs[1].labelText} onchange={() => this.validationLastname} type={inputs[1].type} />
                                        </div>
                                    </div>
                                    <TextInput icon={lockIcon} placeholder={inputs[2].placeholder} id={inputs[2].id} labelText={inputs[2].labelText} onchange={() => this.validationAddress} type={inputs[2].type} className={inputs[2].className} />
                                    <TextInput icon={lockIcon} placeholder={inputs[3].placeholder} id={inputs[3].id} labelText={inputs[3].labelText} onchange={() => this.validationPostCode} type={inputs[3].type} className={inputs[3].className}  />
                                    <TextInput icon={lockIcon} placeholder={inputs[4].placeholder} id={inputs[4].id} labelText={inputs[4].labelText} onchange={() => this.validationNumber} type={inputs[4].type} className={inputs[4].className} />
                                </div>
                                <div className="col-1-of-2 u-padding-small">
                                    <h2 className="secondary-heading">اطلاعات ورود به حساب کاربری</h2>
                                    <TextInput icon={lockIcon} placeholder={inputs[5].placeholder} id={inputs[5].id} labelText={inputs[5].labelText} onchange={() => this.validationEmail} type={inputs[5].type} className={inputs[5].className} />
                                    <TextInput icon={lockIcon} placeholder={inputs[6].placeholder} id={inputs[6].id} labelText={inputs[6].labelText} onchange={() => this.validationPassword} type={inputs[6].type} className={inputs[6].className} />
                                    <TextInput icon={lockIcon} placeholder={inputs[7].placeholder} id={inputs[7].id} labelText={inputs[7].labelText} onchange={() => this.validationConfirmpassword} type={inputs[7].type} className={inputs[7].className} />
                                    <SubmitButton text="تکمیل اطلاعات" type="submit" className="btn--green" onClick={this.animationClick} />
                                </div>
                            </form>
                        </div>
                    </div>
                </React.Fragment>
        )
    }
}

export const TextInput = ({placeholder,id,labelText,onchange,type,className,icon}) => {
    let inputElement = React.createRef;
    return (
        <div className={`input__container ${className}`}>
            <input className="input__text" type={type} ref={inputElement} placeholder={placeholder} id={id} onChange={onchange(inputElement)} />
            <label htmlFor={id}>{labelText}</label>
            <img src={icon} alt="email icon" className="input__text--icon" />  
        </div>
    )
}

export const SubmitButton = ({text,className, onClick,type}) => <button type={type} onClick={(e) => onClick(e)} className={`btn ${className}`}>{text}</button>



export default connect(state => ({ state }))(Signup)