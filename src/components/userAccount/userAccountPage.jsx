import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccountMenu from './AccountMenu';
import NewPassword from './newPassword';
import WishList from './wishList';
import MainCart from './mainCart';
import Signup from './../signup';
import WishLists from './wishLists';
import { Route, Switch } from 'react-router-dom';
import Logout from './logout';
import Header from '../Header';
class UserAccountPage extends Component {
    render() {
        return (
            <main className="userAccountPage">
                <div className="accountPageContainer">
                    <section className="accountMenu__section">
                        <AccountMenu />
                    </section>
                    <section className="contentAccount__section">
                        <Switch>
                            <Route path="/account/profile" component={Signup} />
                            {/* <Route path="/account/orders" component={Orders} /> */}
                            <Route
                                path="/account/wishList"
                                component={WishLists}
                            />
                            <Route
                                path="/account/changepassword"
                                component={NewPassword}
                            />
                            <Route
                                path="/account/orders"
                                component={MainCart}
                            />
                            <Route path="/account/logout" component={Logout} />
                        </Switch>
                    </section>
                </div>
            </main>
        );
    }
}

export default connect(state => ({ state }))(UserAccountPage);
