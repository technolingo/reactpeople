import React from 'react';
import styles from './Cockpit.module.css';


const cockpit = (props) => {
  // button style
  const btnClasses = [];
  btnClasses.push(styles.button);
  if (props.displayPersons) {
    // change button style
    btnClasses.push(styles.dismiss);
  }

  return (
    <>
      <h1>{props.appTitle}</h1>
      <button onClick={props.clicked} className={btnClasses.join(' ')}>Toggle Persons</button>
      <br />
      <button onClick={props.login}>Toggle Login</button>
      <button onClick={props.anon} >Toggle Anon</button>
    </>
  );
}


export default cockpit;
