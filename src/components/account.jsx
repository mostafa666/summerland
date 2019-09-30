import React, { Component } from 'react';
import { connect } from 'react-redux';
// user icon
import usericon from './../common/images/user.svg';
import closeIcon from './../common/images/cancel.svg';
import avatarIcon from './../common/images/avatar.svg';
import orderIcon from './../common/images/order.svg';
import heartIcon from './../common/images/heart.svg';

import { Image } from './signin';
import { toggleSignin } from '../actions/globalAction';
import { Link } from 'react-router-dom/cjs/react-router-dom';

class Account extends Component {
    toggle = () => {
        this.props.dispatch(toggleSignin());
    };
    render() {
        const data = [
            {
                text: 'حساب کاربری من',
                source: avatarIcon,
                id: 1,
                num: 0,
                className: '',
                link: '/account'
            },
            {
                text: 'سفارشهای من',
                source: orderIcon,
                id: 2,
                num: 5,
                className: '',
                link: '/account/orders'
            },
            {
                text: 'علاقه‌مندی‌ها',
                source: heartIcon,
                id: 3,
                num: 0,
                className: '',
                link: '/'
            }
        ];
        return (
            <div className="account">
                <Image
                    source={usericon}
                    alt="ایکون کاربر"
                    className="account__icon--user"
                />
                <Image
                    source={closeIcon}
                    alt="ایکون بستن"
                    className="signin__icon--close"
                    onClick={this.toggle}
                />
                <h3 className="account__icon--text">حساب کاربری</h3>
                <h4 className="danger_heading centeredInline">
                    مصطفی هدایت خوش آمدید
                </h4>
                <hr />
                <ul className="account__list u-padding-small-around">
                    <Lists data={data} />
                </ul>
            </div>
        );
    }
}

export const Lists = ({ data }) =>
    data.map(data => (
        <li key={data.id} className={data.className}>
            <Link to={data.link}>
                <span style={{ display: data.num > 0 ? 'flex' : 'none' }}>
                    {data.num}
                </span>
                <Image source={data.source} alt={data.text} />
                {data.text}
            </Link>
        </li>
    ));

export default connect(state => ({ state }))(Account);
