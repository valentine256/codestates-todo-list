/* eslint-disable react/no-array-index-key */
// @flow

import React from 'react';
import io from 'socket.io-client';

import ExampleButton from '../../component/ExampleButton/ExampleButton';
import ExampleSubmitForm from '../ExampleSubmitForm/ExampleSubmitForm';
import ExampleMessage from '../../component/ExampleMessage/ExampleMessage';

const socket = io('http://localhost:8080');

type State = {
  storage: Array<any>
}

const getDataBySocket = () => {
  socket.emit('get storage data');
};


const emitMessage = (data: any) => {
  socket.emit('broadcast req', (data));
};
class App extends React.Component<{}, State> {
  constructor() {
    super();

    this.state = {
      storage: [],
    };
  }

  componentDidMount() {
    getDataBySocket();
    socket.on('get storage data res', (resData) => {
      this.setState({
        storage: resData,
      });
    });
    socket.on('broadcast', (data) => {
      const { storage } = this.state;
      this.setState({
        storage: storage.concat(data),
      });
    });
    socket.on('err', (msg) => {
      alert(msg);
    });
  }


  clickAlert() {
    alert(`App's state: ${JSON.stringify(this.state)}`);
  }

  messageList() {
    const { storage } = this.state;
    return (
      <div>
        {storage.map((item, index) => {
          const { name, message } = item;
          return <ExampleMessage name={name} message={message} key={index} />;
        })}
      </div>
    );
  }

  handleButtonClick() {
    this.clickAlert();
  }

  render() {
    return (
      <div>
        <ExampleButton click={() => this.handleButtonClick()} buttonName="App's state?" />
        <ExampleSubmitForm emitMessage={(data) => emitMessage(data)} />
        {this.messageList()}
      </div>
    );
  }
}

export default App;
