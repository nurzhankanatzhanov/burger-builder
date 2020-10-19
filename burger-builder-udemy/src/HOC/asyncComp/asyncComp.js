// structure for an asynchronous component for lazy loading
import React, { Component } from "react";

const asyncComp = (importComponent) => {
  return class extends Component {
    state = {
      component: null,
    };

    componentDidMount() {
      importComponent().then((comp) => {
        this.setState({ component: comp.default });
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComp;
