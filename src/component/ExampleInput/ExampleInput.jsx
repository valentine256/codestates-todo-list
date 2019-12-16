//@flow

import React from 'react';

const ExampleInputSet = (props) => {
  const { inputText, onChangeHandler, inputId, value } = props;
  
  return (
    <div>
      <span>{inputText} : </span>
      <input onChange={onChangeHandler} id={inputId} value={value}/>
    </div>
  )
}

export default ExampleInputSet;