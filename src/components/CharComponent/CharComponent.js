import React from 'react';
import './CharComponent.css'


const charComponent = (props) => {
  return (
    <span onClick={props.clicked.bind(this, props.index)} className="CharComponent">{props.letter}</span>
  );
}


export default charComponent;
