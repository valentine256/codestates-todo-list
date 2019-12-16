//@flow

import React from 'react';

import ExampleButton from '../../component/ExampleButton/ExampleButton.jsx'
import ExampleInput from '../../component/ExampleInput/ExampleInput.jsx';

class ExampleSubmitForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      message: '',
    }
  }

  resetState() {
    this.setState({
      message: '',
    })
  }

  handleInputChange(event) {
    const id = event.target.id;
    const value = event.target.value;

    switch(id) {
      case'name':
        this.setState({ name: value });
        break;
      case'message':
        this.setState({message: value});
        break;
    }
  }

  clickAlert() {
    alert(`Example's state.name: ${this.state.name}, state.message: ${this.state.message}`);
  }

  submitMessage() {
    const data = this.state;
    this.props.emitMessage(data);
    this.resetState();
  }

  render() {
    const { name, message } = this.state;

    return (
      <div>
        <ExampleInput value={name} onChangeHandler={(event) => this.handleInputChange(event)} inputText='Name!!' inputId='name'/>
        <ExampleInput value={message} onChangeHandler={(event) => this.handleInputChange(event)} inputText='Message!!' inputId='message'/>
        <ExampleButton click={() => this.clickAlert()} buttonName="ExampleSubmitForm's state?"/>
        <ExampleButton  click={() => this.submitMessage()} buttonName="emit message to server(socket)"/>
      </div>
    );
  }
}

export default ExampleSubmitForm;
