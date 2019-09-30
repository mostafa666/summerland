import React, { Component } from 'react';
import UserAccountPage from './components/userAccount/userAccountPage';
import Signup from './components/signup';
import UserMenu from './components/userMenu';
import Cart from './components/cart';
import FilterBox from './components/filterBox';
import SliderFade from './components/slider';
import Signin from './components/signin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './components/register';
import Header from './components/Header';

const DemoMenu = () => (
    <React.Fragment>
        <Header />
        <UserMenu />
    </React.Fragment>
)

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/account" component={UserAccountPage} />
                    <Route path="/register" component={Register} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/" component={DemoMenu} />  {/* set islogedin inredux */}
                </Switch>
            </BrowserRouter>
        );
    }
}
