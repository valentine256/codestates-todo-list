
import React from 'react';

import ListEntry from './ListEntry/ListEntry';
import { TodoEntry } from '../../../../../scheme/scheme';

type State = {
}
type Props = {
  list: TodoEntry[];
}

class TodoList extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  renderEntry() {
    const { list } = this.props;
    return list.map((item) => <ListEntry key={item.id} item={item} />);
  }

  render() {
    return (
      <div style={{ margin: '10px' }}>
        {this.renderEntry()}
      </div>
    );
  }
}

export default TodoList;
