import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Logout from "./containers/auth/Logout/Logout";
import asyncComp from "./HOC/asyncComp/asyncComp";
import * as actions from "./store/actions/index";

// async components for lazy loading
const asyncCheckout = asyncComp(() => {
  return import("./containers/Checkout/Checkout");
});

const asyncOrders = asyncComp(() => {
  return import("./containers/Orders/Orders");
});

const asyncAuth = asyncComp(() => {
  return import("./containers/auth/Auth");
});

class App extends Component {
  componentDidMount() {
    this.props.onAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/auth" component={asyncAuth} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/orders" component={asyncOrders} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
