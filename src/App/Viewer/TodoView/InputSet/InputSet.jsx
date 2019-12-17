// @flow

import React from 'react';

import { TextField } from 'office-ui-fabric-react/lib/TextField';


type State = {
}
type Props = {
}

class InputSet extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return <TextField />;
  }
}

export default InputSet;
