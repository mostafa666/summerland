import React, { Component } from "react";
import { connect } from "react-redux";
import SigninForm from "./signinForm";
import { toggleSignin } from "../actions/globalAction";
import { SubmitButton } from "./signup";
// user icon
import usericon from './../common/images/user.svg';
import closeIcon from './../common/images/cancel.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom';


class Signin extends Component {
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
    }
    toggle = () => {
        this.props.dispatch(toggleSignin())
    }
    
    render() {
        return (
            <div className="signin">
                <div className="row u-padding-small-around">
                    <Image source={closeIcon} alt="ایکون بستن" className="signin__icon--close" onClick={this.toggle} />
                    <Image source={usericon} alt="ایکون کاربر" className="signin__icon--user" onClick={console.log()} />
                    <h3 className="signin__icon--text">حساب کاربری</h3>
                    <div className="row">
                        <h3 className="danger_heading">کاربر سامرلند هستید؟ وارد شوید</h3>
                        <p className="signin__description">قبلا در سامرلند ثبت‌نام کرده‌اید؟ لطفا با ایمیل و رمز عبور خود وارد شوید.</p>
                    </div>
                    <div className="row u-padding-small-around">
                        <SigninForm />
                    </div>
                    <div className="row">
                        <h3 className="danger_heading">تاکنون در سامرلند ثبت‌نام نکردید؟ از اینجا شروع کنید</h3>
                        <p className="signin__description">اولین بار است که به سامرلند آمده‌اید؟<br />ثبت نام کنید..</p>
                    </div>
                    <div className="row u-padding-small-around">
                        <button type="button" onClick={(e) => this.animationClick(e)} className={`btn btn--blue`}><Link className="signin__link" to="/register">ثبت نام</Link></button>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}




export const Image = ({source,alt,className,onClick}) => <img src={source} alt={alt} className={className} onClick={() => onClick()} />

export default connect(state => ({ state }))(Signin)