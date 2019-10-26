import React, { Component } from 'react';
import { connect } from 'react-redux';
import cancelIcon from './../../common/images/cancel.svg';
import { SubmitButton } from '../signup';
import { Image } from './../signin';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { removeThisWishLists } from './../../actions/accountPageAction';

class WishList extends Component {
    removeWishList = async (id) => {
        // copy from object
        const {dispatch} = this.props;
        const token = localStorage.getItem('token');
        const nickname = localStorage.getItem('nickname');
        // remove from store
        await dispatch(removeThisWishLists(11,nickname,token));
        // send with axios => try (catch ==> add the data in the store)

    };

    addToCart = (e, id) => {
        // add the data with axios in the server
        // set the color to blue
        // change the text
    };
    removeFromCart = (e, id) => {

    }
    render() {
        const { title, size, id, link, imageSource,price,colors,isInCart } = this.props;
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
                    <div>
                        <span className="wishList__size">سایز: </span>
                        <select>
                            <Size sizes={size} />
                        </select>
                    </div>
                    <div className="wishList__size--container">
                        <span className="wishList__size">رنگ: </span>
                        <div>
                            <Color colors={colors} />
                        </div>
                    </div>
                    <Price price={price} />
                </div>
                {
                    isInCart? (
                        <SubmitButton
                            text="حدف ار سبد خرید"
                            className="wishList__addButton btn--danger"
                            onClick={e => this.removeFromCart(e, id)}
                            type="button"
                        />
                    ): (
                        <SubmitButton
                        text="افرودن به سبد خرید"
                        className="wishList__addButton"
                        onClick={e => this.addToCart(e, id)}
                        type="button"
                    />
                    )
                }
                <Image
                    source={cancelIcon}
                    alt="ایکون حدف از علاقه مندی ها"
                    className="wishList__cancel"
                    onClick={() => this.removeWishList(id)}
                />
            </div>
        );
    }
}

export const TitleText = ({ text }) => <h3>{text}</h3>;


export const Size = ({ sizes }) => sizes.map(size => <option key={size.id}>{size.size}</option>); // change to size


export const Color = ({ colors }) => {
    let newColors = colors.map(color => {
        const style = {
            backgroundColor: color.color? color.color: '',
            // backgroundImage: `url(${colors.color? colors.color: '' })`
        }
        return {
            ...color,
            style
        }
    })    
    return (
        newColors.map(color => <span style={color.style} className="wishList__colors" key={color.id}></span>)
    )
}


export const Price = ({ price }) => (
    <span className="card--price">{price} تومان</span>
);

export default connect(state => ({ state }))(WishList);
