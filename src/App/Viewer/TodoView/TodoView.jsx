
import React from 'react';

import TodoEntryRender from './TodoEntryRender/TodoEntryRender';
import InputSet from './InputSet/InputSet';

import { TodoEntry } from '../../../scheme/scheme';

type State = {
  inputText: ''
}
type Props = {
 items: TodoEntry[]
}

class TodoView extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      inputMode: false,
      inputText: '',
    };
  }

  todoRender() {
    const { items } = this.props;

    return items.map((item) => <TodoEntryRender item={item} />);
  }

  handleTextChange(value) {
    this.setState({ inputText: value });
  }

  inputRender() {
    const { inputMode, inputText } = this.state;

    if (inputMode) {
      return <InputSet value={inputText} onChange={(value) => this.handleTextChange(value)} />;
    }
  }

  handleInput() {
    const { inputMode } = this.state;

    if (!inputMode) {
      this.setState({
        inputMode: true,
      });
    }
  }

  render() {
    return (
      <div onClick={() => this.handleInput()} style={{ height: '100%' }}>
        {this.todoRender()}
        {this.inputRender()}
      </div>
    );
  }
}

export default TodoView;
