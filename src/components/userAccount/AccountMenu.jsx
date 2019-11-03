import React, { Component } from 'react';
import { connect } from 'react-redux';
// icons
import keyIcon from './../../common/images/key.svg';
import exitIcon from './../../common/images/exit.svg';
import orderIcon from './../../common/images/order.svg';
import heartIcon from './../../common/images/heart2.svg';
import profileIcon from './../../common/images/profile.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { withRouter } from 'react-router-dom';
class AccountMenu extends Component {
    render() {
        const data = [
            {
                text: 'پروفایل',
                source: profileIcon,
                id: 1,
                className: '',
                link: '/account/profile',
                target:'profile'
            },
            {
                text: 'سبد خرید',
                source: orderIcon,
                id: 2,
                className: '',
                link: '/account/orders',
                target:'orders'
            },
            {
                text: 'علاقه مندی ها',
                source: heartIcon,
                id: 3,
                className: '',
                link: '/account/wishlist',
                target:'wishlist'
            },
            {
                text: 'تغییر رمز عبور',
                source: keyIcon,
                id: 4,
                className: '',
                link: '/account/changepassword',
                target:'changepassword'
            },
            {
                text: 'خروج از حساب',
                source: exitIcon,
                id: 5,
                className: '',
                link: '/account/logout',
                target:'logout'
            }
        ];
        const {pathname} = this.props.location;
        return (
            <div className="accountMenu">
                <h3 className="">حساب کاربری شما</h3>
                <ul className="accountMenu__list">
                    <Lists data={data} pathname={pathname} />
                </ul>
            </div>
        );
    }
}


const Lists = ({data,pathname}) => {
    return (
        data.map(data => {
            const splitUrl = pathname.split('/');
            const target = splitUrl[splitUrl.length -1];
            const classname = (target === data.target)? 'accountMenu__active': '';
            return (
                <li key={data.id} className={classname}>
                    <Link to={data.link}>
                        <SimpleImage source={data.source} alt={data.text} />
                        {data.text}
                    </Link>
                </li>
            )
        })
    )
}

export const SimpleImage = ({source,alt}) => <img src={source} alt={alt} />

export default withRouter( connect(state => ({ state }))(AccountMenu));
