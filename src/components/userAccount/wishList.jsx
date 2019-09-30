import React, { Component } from 'react';
import { connect } from 'react-redux';
import cancelIcon from './../../common/images/cancel.svg';
import { SubmitButton } from '../signup';
import { Image } from './../signin';
import { Link } from 'react-router-dom/cjs/react-router-dom';

class WishList extends Component {
    removeWishList = (id) => {
        // copy from object
        // remove from store
        // send with axios => try (catch ==> add the data in the store)
    };

    addToCart = (e, id) => {
        // add the data with axios in the server
        // set the color to blue
    };

    render() {
        const { title, size, id, link, imageSource } = this.props;
        return (
            <div className="wishList">
                <div className="wishList__right">
                    <Link title="مشاهده ی محصول" to={link}>
                        <Image
                            source={imageSource}
                            alt="shirt"
                            className="wishList__image"
                            onClick={console.log()}
                        />
                    </Link>
                </div>
                <div className="wishList__left">
                    <TitleText text={title} />
                    <span className="wishList__size">سایز: </span>
                    <Size sizes={size} />
                    <Price price="100,000" />
                </div>
                <SubmitButton
                    text="افرودن به سبد خرید"
                    className="wishList__addButton"
                    onClick={e => this.addToCart(e, id)}
                    type="button"
                />
                <Image
                    source={cancelIcon}
                    alt="ایکون کنسل"
                    className="wishList__cancel"
                    onClick={() => this.removeWishList(id)}
                />
            </div>
        );
    }
}

export const TitleText = ({ text }) => <h3>{text}</h3>;

export const Size = ({ sizes }) =>
    sizes.map(size => <span key={size.id}>{size.size}</span>);

export const Price = ({ price }) => (
    <span className="card--price">{price} تومان</span>
);

export default connect(state => ({ state }))(WishList);
