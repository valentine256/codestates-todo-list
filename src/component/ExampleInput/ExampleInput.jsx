// @flow

import React from 'react';

type Props = {
  inputText: string;
  inputId: string;
  value: string;
  onChangeHandler: (event: any) => void
}

const ExampleInput = (props: Props) => {
  const {
    inputText, onChangeHandler, inputId, value,
  } = props;

  return (
    <div>
      <span>
        {inputText}
        {' '}
:
        {' '}
      </span>
      <input onChange={onChangeHandler} id={inputId} value={value} />
    </div>
  );
};

export default ExampleInput;
