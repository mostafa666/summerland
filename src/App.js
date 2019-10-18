import React, { Component } from "react";
import UserAccountPage from "./components/userAccount/userAccountPage";
import Signup from "./components/signup";
import UserMenu from "./components/userMenu";
import Cart from "./components/cart";
import FilterBox from "./components/filterBox";
import SliderFade from "./components/slider";
import Signin from "./components/signin";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./components/register";
import Header from "./components/Header";
import DetailPage from "./components/detailPage/detalPage";
import { connect } from "react-redux";
import AddComment from "./components/detailPage/addCommnent";
import ProductsPage from "./components/pages/ProductsPage";
import IndexPage from "./components/pages/IndexPage";

const DemoMenu = () => (
  <React.Fragment>
    <Header />
    <UserMenu isLogedin={true} />
  </React.Fragment>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/index" component={IndexPage} />
          <Route path="/account" component={UserAccountPage} />
          <Route path="/register" component={Register} />
          <Route path="/cart" component={Cart} />
          <Route path="/details" component={DetailPage} />
          <Route path="/addComment" component={AddComment} />
          <Route path="/products" component={ProductsPage} />
          <Route
            path="/"
            render={() => (
              <UserMenu
                isLogedin={this.props.state.account.profile.isLogedIn}
              />
            )}
          />{" "}
          {/* set islogedin inredux */}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default connect(state => ({ state }))(App);
