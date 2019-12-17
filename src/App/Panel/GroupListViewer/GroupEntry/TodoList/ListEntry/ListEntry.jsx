// @flow

import React from 'react';

import { TodoEntry } from '../../../../../../scheme/scheme';

type State = {
}
type Props = {
  item: TodoEntry;
}

class ListEntry extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { item } = this.props;
    return (
      <li>
        {item.text}
      </li>
    );
  }
}

export default ListEntry;
