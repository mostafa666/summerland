import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// components
import Register from './components/register';
import Header from './components/Header';
import DetailPage from './components/detailPage/detalPage';
import AddComment from './components/detailPage/addCommnent';
import ProductsPage from './components/pages/ProductsPage';
import Footer from './components/footer';
import UserAccountPage from './components/userAccount/userAccountPage';
import UserMenu from './components/userMenu';
import Cart from './components/cart';
import Menu from './components/menu'

import FilterBox from './components/filterBox';
import Signup from './components/signup';
import Signin from './components/signin';
import { ToastContainer } from 'react-toastify';

class App extends Component {
    
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                <ToastContainer />
                <Header />
                <Menu />
                <UserMenu
                    isLogedin={this.props.state.account.profile.isLogedIn}
                />
                <Cart toggle={false} />
                    <Switch>
                        <Route path="/account" component={UserAccountPage} />
                        <Route path="/register" component={Register} />
                        <Route path="/details" component={DetailPage} />
                        <Route path="/addComment" component={AddComment} />
                        <Route path="/products" component={ProductsPage} />
                    </Switch>
                <Footer />
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
export default connect(state => ({state}))(App);