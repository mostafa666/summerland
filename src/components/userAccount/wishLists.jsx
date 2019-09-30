import React, { Component } from 'react';
import { connect } from 'react-redux';
import WishList from './wishList';

import img from './../../common/images/warning.svg';
import spinner from './../../common/images/loading.svg';
import { toggleShow, fetchWishLists } from '../../actions/accountPageAction';

class WishLists extends Component {
    componentDidMount() {
        let {nickname} =this.props.state.account.profile;
        console.log(nickname)
        if(nickname) {
            nickname = nickname.split('@')[0];
            console.log(nickname);
        }else {
            // window.location = '/';
        }
        
        const {dispatch} = this.props;
        dispatch(toggleShow(true));
        dispatch(fetchWishLists(nickname))  // set url
        dispatch(toggleShow(false));
    }
    render() {
        const { wishlists } = this.props.state.account.wishList;
        const { loader } = this.props.state.account;
        const style = {
            display: loader ? 'flex' : 'none'
        };
        return (
            <React.Fragment>
                <h2 className="account-heading">علاقه مندی ها</h2>
                
                {
                    wishlists.length === 0 ? (
                        <div className="wishList noResult">
                            <img src={img} alt="موردی یافت نشد" />
                            <span className="wishList__notResult">موردی یافت نشد</span>
                        </div>
                    ) : (
                        wishlists.map(wishList => (
                            <div className="wishListContainer" key={wishList.id}>
                                <div style={style} className="loader">
                                    <img src={spinner} alt="img" />
                                </div>
                                <WishList
                                    text={wishList.title}
                                    size={wishList.size}
                                    id={wishList.id}
                                    link={wishList.link}
                                    imageSource={wishList.imageSource}
                                />
                            </div>
                        ))
                    )
                }
            </React.Fragment>
        );
    }
}

export default connect(state => ({ state }))(WishLists);
