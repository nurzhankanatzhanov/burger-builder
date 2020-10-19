import React, { Component } from "react";
import axios from "../../axios";
import { connect } from "react-redux";

import Order from "./Order/Order";
import withErrorHandler from "../../HOC/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

import * as actions from "../../store/actions/index";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  render() {
    let orderPage = <Spinner />;
    const orders =
      this.props.orders.length > 0 ? (
        <div>
          {this.props.orders.map((order) => {
            return (
              <Order
                key={order.id}
                ingredients={order.ingredients}
                price={+order.price}
              />
            );
          })}
        </div>
      ) : (
        <h2 style={{ textAlign: "center" }}>No orders to show.</h2>
      );
    if (!this.props.loading) {
      orderPage = orders;
    }
    if (!this.props.token) {
      orderPage = (
        <h2 style={{ textAlign: "center" }}>
          You are not authenticated. Please sign in.
        </h2>
      );
    }

    return <div>{orderPage}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, id) => dispatch(actions.fetchOrders(token, id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
