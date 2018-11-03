import React, { Component } from 'react';

const style = {
  width: "150px",
  height: "20px",
  border: "1px solid pink",
  fontSize: "20px"
}

class UserInput extends Component {
  render() {
    return (
      <input style={style} onChange={this.props.changeHandler} placeholder={this.props.username} />
    );
  }
}


export { UserInput };
