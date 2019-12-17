// @flow

import React from 'react';

import GroupTitle from './GroupTitle/GroupTitle';
import TodoList from './TodoList/TodoList';
import { Group } from '../../../../scheme/scheme';

type State = {
}
type Props = {
  group: Group;
  changeGroup: (id: number) => void;
}

class GroupEntry extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { group, changeGroup } = this.props;
    return (
      <div>
        <GroupTitle groupName={group.groupName} changeGroup={() => changeGroup(group.id)} />
        <TodoList list={group.items} />
      </div>
    );
  }
}

export default GroupEntry;
