import React from 'react';

const ExampleButton = (props) => {
  return (
    <button onClick={props.click}>
      {props.buttonName}
    </button>
  )
}

export default ExampleButton;