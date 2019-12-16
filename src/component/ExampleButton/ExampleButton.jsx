// @flow

import React from 'react';

type Props = {
  buttonName: string;

  click: (event: any) => void;
}

const ExampleButton = (props: Props) => {
  const { click, buttonName } = props;

  return (
    <button type="button" onClick={click}>
      {buttonName}
    </button>
  );
};

export default ExampleButton;
