import React, { Component } from "react";
import { connect } from "react-redux";
import { MenuContainer } from './userMenu';
import {Image} from './signin'
import { toggleSignin, toggleShowCart, toggleLoaderCartMenu } from "../actions/globalAction";
import WishLis from './userAccount/wishList'
// user icon
import closeIcon from './../common/images/cancel.svg';
import CartBox from "./cartBox";
import { fetchCarts, removeCarts } from './../actions/detailsPageActions';
import Loader from './loader';


class Cart extends Component {
    async componentDidMount() {
        // if(this.props.state.detalPage.carts) return;
        const { dispatch} = this.props;
        const token = localStorage.getItem('token')
        const nickname = localStorage.getItem('nickname');
        if(!token || !nickname) return;
        dispatch(toggleLoaderCartMenu(true))
        await dispatch(fetchCarts(token,nickname))
        dispatch(toggleLoaderCartMenu(false))
    }
    toggle = () => {
        this.props.dispatch(toggleShowCart()) // this should change 
    }
    render() {
        const { carts } = this.props.state.detalPage;
        const style = {
            display: carts.length> 0?'block':'none'
        }
        return (
            <MenuContainer toggle={this.props.state.global.toggleShowCart} >
                <h2 className="cart__title">سبد خرید</h2>
                 <div className="cart">
                     <Loader toggle={this.props.state.global.toggleLoaderCartMenu} />
                    <div className="row u-padding-small-around">
                        <Image source={closeIcon} alt="ایکون بستن" className="cart__icon--close" onClick={this.toggle} />
                    </div>
                    <div className="row ">
                        {
                            Array.isArray(carts)? carts.length > 0?
                                carts.map(cart => (<CartBox key={cart.id} data={cart} />))
                                :<p className="cart__empty">سبد خرید شما خالیست</p>
                                :null
                        }
                        <div style={style} className="buttons">
                            <button className="btn buyButton">تکمیل سبد خرید</button>
                            <button className="btn updateButton">بروز رسانی سبد خرید</button>
                        </div>
                        <span  style={style} className="btn totalButton">{`جمع کل مبلغ پرداختی 135000 تومان`}</span>
                    </div>
                </div>
            </MenuContainer>
        )
    }
}



export default connect(state => ({ state }))(Cart)