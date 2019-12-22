// @flow

import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

type State = {
  status: boolean;
  text: string;
}
type Props = {
  submitInput: (status: boolean, text: string) => void
}

class InputSet
  extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      status: false,
      text: '',
    };
  }

  handleCheck(event: any) {
    const { checked } = event.target;
    this.setState({ status: checked });
  }

  handleChange(event: any) {
    const text = event.target.value;
    this.setState({ text });
  }

  handleKeyDown(event: any) {
    if (event.shiftKey) {
      return;
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      const { submitInput } = this.props;
      const { status, text } = this.state;
      console.log(text);

      submitInput(status, text);
      this.setState({ status: false, text: '' });
    }
  }

  render() {
    const { status, text } = this.state;
    return (
      <div style={{ marginTop: '10px', marginRight: '120px', position: 'relative' }}>
        <Checkbox
          checked={status}
          onChange={(event) => this.handleCheck(event)}
          value="checked"
          color="primary"
          style={{ top: '14px' }}
        />
        <TextField
          id="standard-multiline-flexible"
          label="//TODO:"
          multiline
          rowsMax="4"
          value={text}
          onChange={(event) => this.handleChange(event)}
          onKeyDown={(event) => this.handleKeyDown(event)}
          style={{ width: '100%', marginRight: '100px', position: 'absolute' }}
        />
      </div>
    );
  }
}

export default InputSet;
