import React, { Component } from 'react';
import { connect } from 'react-redux';
import WishList from './wishList';
import { toggleShow, fetchWishLists } from '../../actions/accountPageAction';
import Loader from './../loader';
class WishLists extends Component {
    async componentDidMount() {
        let nickname =localStorage.getItem('nickname');
        let token =localStorage.getItem('token');
        
        if(token) {
            
        }else {
            // window.location = '/';
        }
        
        const {dispatch} = this.props;
        dispatch(toggleShow(true));
        await dispatch(fetchWishLists(nickname,token))
        dispatch(toggleShow(false));
    }
    render() {
        const { wishlists } = this.props.state.account.wishList;
        const { loader } = this.props.state.account;
        const style = {
            display: loader ? 'flex' : 'none'
        };
        return (
            <div className="wishList__container">
                <h2 className="account-heading">علاقه مندی ها</h2>
                <div className="wishList__container--wishlist">
                    {/* <div style={style} className="loader">
                        <img src={spinner} alt="img" />
                    </div> */}
                    <Loader toggle={loader} />
                    {
                        Array.isArray(wishlists)? 
                            (
                                wishlists.map(wishList => (
                                    <div className="wishListContainer" key={wishList.id}>
                                        <WishList
                                            title={wishList.title}
                                            size={wishList.productSizes}
                                            id={wishList.id}
                                            link={wishList.link}
                                            imageSource={wishList.image}
                                            price={wishList.price}
                                            colors={wishList.productColors}
                                            isInCart={wishList.isInCart}
                                        />
                                    </div>
                                ))
                            )
                            : null
                        }
                </div>
            </div>
        );
    }
}

export default connect(state => ({ state }))(WishLists);


// {
//     Array.isArray(wishlists)? 
//         wishlists.length === 0 ? (
//             <div className="wishList noResult">
//                 <img src={img} alt="موردی یافت نشد" />
//                 <span className="wishList__notResult">موردی یافت نشد</span>
//             </div>
//         ) : (
//             wishlists.map(wishList => (
//                 <div className="wishListContainer" key={wishList.id}>
//                     <div style={style} className="loader">
//                         <img src={spinner} alt="img" />
//                     </div>
//                     <WishList
//                         title={wishList.title}
//                         size={wishList.productSizes}
//                         id={wishList.id}
//                         link={wishList.link}
//                         imageSource={wishList.image}
//                         price={wishList.price}
//                         colors={wishList.productColors}
//                     />
//                 </div>
//             ))
//         )
//     : null
    
// }