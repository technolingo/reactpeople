import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Person.css';
import Radium from 'radium';
import { AnonContext } from '../../../containers/App';


class Person extends Component {
  componentDidMount() {
    if (this.props.position===0) {
      this.inputElement.focus();
    }
  }

  render() {
    const style = { ':hover': { color: 'red' } }
    return (
      <div className="Person" style={style} onClick={this.props.clicked.bind(this, this.props.ckey)}>
        {this.props.authed ? <p>I'm authenticated!</p> : null}
        <AnonContext.Consumer>
          {anon => anon ? <p>I'm anonymous!</p> : null}
        </AnonContext.Consumer>
        <p>I'm {this.props.name}. I'm {this.props.age} years old.</p>
        <input
          ref={(el)=>{this.inputElement=el}}
          onChange={this.props.changed.bind(this, this.props.ckey)}
        />
      </div>
    );
  }
}

// validating property types
// does not work in functional components
Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  clicked: PropTypes.func,
  id: PropTypes.string
};


export default Radium(Person);
