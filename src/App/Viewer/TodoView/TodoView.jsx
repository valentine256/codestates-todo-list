
import React from 'react';

import TodoEntryRender from './TodoEntryRender/TodoEntryRender';
import InputSet from './InputSet/InputSet';

import { TodoEntry } from '../../../scheme/scheme';

type State = {
  inputMode: boolean
}
type Props = {
 items: TodoEntry[];
 selectedGroupId: number;
 submitInput: (status: boolean, text: string) => void;
 modifyTodo: (id: number, status: boolean, text: string) => void;
}

class TodoView extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      inputMode: false,
    };
  }

  todoRender() {
    const { items, modifyTodo } = this.props;

    return items.map((item) => <TodoEntryRender key={item.id} submitInput={(status, text) => modifyTodo(item.id, status, text)} item={item} />);
  }

  inputRender() {
    const { inputMode } = this.state;
    const { submitInput, selectedGroupId } = this.props;
    const item = {
      groupId: selectedGroupId,
      text: '',
      state: false,
      scheduled: false,
    };
    if (inputMode) {
      return <InputSet key="input" submitInput={submitInput} item={item} />;
    }
  }

  handleClick(event) {
    if (event.target.id !== 'todoviewer') {
      return;
    }
    const { inputMode } = this.state;
    if (!inputMode) {
      this.setState({
        inputMode: true,
      });
    } else {
      this.setState({
        inputMode: false,
      });
    }
  }

  handleKeyDown(event) {
    const { key } = event;
    if (key === 'Escape') {
      console.log('hoho!!');
    }
    switch (key) {
      default:
        return;
      case 'Escape':
        this.setState({ inputMode: false });
    }
  }

  render() {
    return (
      <div
        id="todoviewer"
        style={{height: '85%', overflowY: 'auto', marginTop: '100px'}}
        onClick={(event) => this.handleClick(event)}
        onKeyDown={(event) => this.handleKeyDown(event)}
        onMouseLeave={() => this.setState({inputMode: false})}
      >
        {this.todoRender()}
        {this.inputRender()}
      </div>
    );
  }
}

export default TodoView;
