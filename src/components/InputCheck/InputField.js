import React, { Component } from 'react';


class InputField extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  componentDidMount() {
    this.inputElement.current.focus();
  }

  render() {
    return (
      <div className="InputField">
        <input
          ref={this.inputElement}
          onChange={this.props.changed}
          placeholder={this.props.placeholder}
          value={this.props.value} />
        <p>{this.props.inputText}</p>
      </div>
    );
  }
}


export default InputField;
