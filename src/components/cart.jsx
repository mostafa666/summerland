import React, { Component } from "react";
import { connect } from "react-redux";
import { MenuContainer } from './userMenu';
import {Image} from './signin'
import { toggleSignin } from "../actions/globalAction";
import WishLis from './userAccount/wishList'
// user icon
import closeIcon from './../common/images/cancel.svg';
import CartBox from "./cartBox";


class Cart extends Component {
    toggle = () => {
        this.props.dispatch(toggleSignin()) // this should change 
    }
    render() {
        return (
            <MenuContainer toggle={this.props.state.global.signinToggle} >
                 <div className="cart">
                    <div className="row u-padding-small-around">
                        <Image source={closeIcon} alt="ایکون بستن" className="cart__icon--close" onClick={this.toggle} />
                    </div>
                    <div className="row cartContainer">
                        <CartBox />
                        <CartBox />
                    </div>
                </div>
            </MenuContainer>
        )
    }
}



export default connect(state => ({ state }))(Cart)