// @flow

import React from 'react';

import ExampleButton from '../../components/ExampleButton/ExampleButton';
import ExampleInput from '../../components/ExampleInput/ExampleInput';

type State = {
  name: string;
  message: string;
}
type Props = {
  emitMessage: (data: State) => void
}

class ExampleSubmitForm extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      name: '',
      message: '',
    };
  }

  resetState(): void {
    this.setState({
      message: '',
    });
  }

  handleInputChange(event: Object): void {
    const { id, value } = event.target;

    switch (id) {
      case 'name':
        this.setState({ name: value });
        break;
      case 'message':
        this.setState({ message: value });
        break;
      default:
    }
  }

  clickAlert(): void {
    const { name, message } = this.state;
    alert(`Example's state.name: ${name}, state.message: ${message}`);
  }

  submitMessage(): void {
    const data = this.state;
    const { emitMessage } = this.props;

    emitMessage(data);
    this.resetState();
  }

  render() {
    const { name, message } = this.state;

    return (
      <div>
        <ExampleInput value={name} onChangeHandler={(event) => this.handleInputChange(event)} inputText="Name!!" inputId="name" />
        <ExampleInput value={message} onChangeHandler={(event) => this.handleInputChange(event)} inputText="Message!!" inputId="message" />
        <ExampleButton click={() => this.clickAlert()} buttonName="ExampleSubmitForm's state?" />
        <ExampleButton click={() => this.submitMessage()} buttonName="emit message to server(socket)" />
      </div>
    );
  }
}

export default ExampleSubmitForm;
