import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    errorOccurred: false,
    errorMessage: ''
  }

  componentDidCatch(error, info) {
    this.setState({
      errorOccurred: true,
      errorMessage: error
    });
    console.log(info);
  }

  render() {
    if (this.state.errorOccurred) {
      return <h2>{this.state.errorMessage}</h2>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
