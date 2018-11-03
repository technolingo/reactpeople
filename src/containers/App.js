import React, { Component } from 'react';
import styles from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import InputField from '../components/InputCheck/InputField';
import InputValidator from '../components/InputCheck/InputValidator';
import CharComponent from '../components/CharComponent/CharComponent';
import withClass from '../HOCs/WithClass';


export const AnonContext = React.createContext(false);


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'Zilong',
      persons: [
        {'id': 'asdf1', 'name': 'Kate', 'age': 21},
        {'id': 'xt24', 'name': 'Zilong', 'age': 25},
        {'id': 'yhwy3', 'name': 'Julia', 'age': 24}
      ],
      displayPersons: false,
      inputText: '',
      toggleClicked: 0,
      authenticated: false,
      anonymous: false
    }
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  changeNameHandler = (id, event) => {
    const personIndex = this.state.persons.findIndex((elem) => {
      return elem.id === id
    });

    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value;

    const persons = [...this.state.persons]

    persons[personIndex] = person;

    this.setState(
      { persons:persons }
    );
  }

  updateInfoHandler = () => {
    this.setState({persons: [
      {'id': 'asdf1', 'name': 'Kate', 'age': '22'},
      {'id': 'xt24', 'name': 'Zilong Li', 'age': '25'},
      {'id': 'yhwy3', 'name': 'Julia', 'age': '23'}
    ]});
  }

  togglePersonsHandler = () => {
    this.setState((prevState, props) => {
      return {
        displayPersons: !prevState.displayPersons,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  deletePersonHandler = (id) => {
    const index = this.state.persons.findIndex((elem)=>{
      return elem.id === id;
    });

    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  inputChangeHandler = (event) => {
    this.setState({inputText:event.target.value})
  }

  charClickHandler = (event, index) => {
    const letters = this.state.inputText.split('');
    letters.splice(index, 1)
    const text = letters.join('');
    this.setState({inputText:text});
  }

  loginHandler = () => {
    this.setState((prevState) => ({authenticated: !prevState.authenticated}));
  }

  anonHandler = () => {
    this.setState((prevState) => ({anonymous: !prevState.anonymous}));
  }

  render() {
    // determine if persons are to be displayed
    let persons = null;
    if (this.state.displayPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          changed={this.changeNameHandler}
          clicked={this.deletePersonHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    let charComponents = null;
    if (this.state.inputText.length) {
      const letters = this.state.inputText.split('');
      charComponents = (
        <div>
          {letters.map((elem) => {
            return <CharComponent
              letter={elem}
              index={letters.indexOf(elem)}
              clicked={this.charClickHandler}
            />
          })}
        </div>
      );
    }

    return (
      <>
          <Cockpit
            appTitle={this.props.title}
            clicked={this.togglePersonsHandler}
            displayPersons={this.state.displayPersons}
            login={this.loginHandler}
            anon={this.anonHandler}
          />

          <AnonContext.Provider value={this.state.anonymous}>
            {persons}
          </AnonContext.Provider>

          <InputField
            placeholder="Input something..."
            changed={this.inputChangeHandler.bind(this)}
            inputText={this.state.inputText}
            value={this.state.inputText}
          />
          <InputValidator leng={this.state.inputText.length} />

          {charComponents}
      </>
    );
  }
}

export default withClass(App, styles.App);
