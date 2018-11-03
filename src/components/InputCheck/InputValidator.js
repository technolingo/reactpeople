import React from 'react';


const inputValidator = (props) => {

  // return (
  //   <div>
  //     {
  //       props.leng < 5 ?
  //       <p>Text too short</p> :
  //       <p>Long enough</p>
  //     }
  //   </div>
  // );

  
  let msg = null;
  if (props.leng < 5) {
    msg = 'Text too short';
  } else if (props.leng > 20) {
    msg = 'Text too long';
  }
  return (
    <p>{msg}</p>
  );
}


export default inputValidator;
