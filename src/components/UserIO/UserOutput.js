import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">Printing text... { props.content }</div>
  );
}


export default userOutput;
