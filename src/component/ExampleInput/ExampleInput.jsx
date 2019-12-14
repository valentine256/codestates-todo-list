import React from 'react';

const ExampleInputSet = (props) => {

  return (
    <div>
      <span>{props.inputText} : </span>
      <input onChange={props.onChangeHandler} id={props.inputId}/>
    </div>
  )
}

export default ExampleInputSet;