import React, { Component } from 'react';
import Person from './Person/Person';
import withClass from '../../HOCs/WithClass';


class Persons extends Component {

  componentWillReceiveProps = (nextProps) => {

  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return true;
  }

  componentWillUpdate = (nextProps, nextState) => {

  }

  componentDidUpdate = () => {

  }

  render() {
    return this.props.persons.map((elem, index) => (
      <Person
        key={elem.id}
        ckey={elem.id}
        position={index}
        changed={this.props.changed}
        clicked={this.props.clicked}
        name={elem.name}
        age={elem.age}
        authed={this.props.isAuthenticated}
      />
    ));
  }
}

export default withClass(Persons, 'Person');
