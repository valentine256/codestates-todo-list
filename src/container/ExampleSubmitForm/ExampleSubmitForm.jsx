import React from 'react';

import ExampleButton from '../../component/ExampleButton/ExampleButton.jsx'
import ExampleInput from '../../component/ExampleInput/ExampleInput.jsx';

class ExampleSubmitForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      message: ''
    }
  }

  resetState() {
    this.setState({
      name: '',
      message: ''
    })
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
  }

  inputChange(event) {
    const id = event.target.id;
    const value = event.target.value;

    switch(id) {
      case'name':
        this.setState({name: value});
        break;
      case'message':
        this.setState({message: value});
        break;
    }
    console.log(`${id}: ${value}`)
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
    return (
      <div>
        <ExampleInput onChange={(event) => this.inputChange(event)} inputText='Name!!' inputId='name'/>
        <ExampleInput onChange={(event) => this.inputChange(event)} inputText='Message!!' inputId='message'/>
        <ExampleButton click={() => this.clickAlert()} buttonName="ExampleSubmitForm's state?"/>
        <ExampleButton  click={() => this.submitMessage()} buttonName="emit message to server(socket)"/>
      </div>
    )
  }
}

export default ExampleSubmitForm;