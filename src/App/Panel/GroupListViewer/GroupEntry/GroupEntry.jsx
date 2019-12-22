// @flow

import React from 'react';

import GroupTitle from './GroupTitle/GroupTitle';
import TodoList from './TodoList/TodoList';

import { TodoEntry, Group } from '../../../../scheme/scheme';


type State = {
}
type Props = {
  group: Group;
  groupData: TodoEntry[];
  changeGroup: (id: number) => void;
  renameGroup: (id: number, name: string) => void;
  deleteGroup: (id:number) => void;
}

class GroupEntry extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {
      group, groupData, changeGroup, deleteGroup, renameGroup,
    } = this.props;
    return (
      <div>
        <GroupTitle
          groupId={group.id}
          groupName={group.groupName}
          changeGroup={() => changeGroup(group.id)}
          deleteGroup={() => deleteGroup(group.id)}
          renameGroup={(name) => renameGroup(group.id, name)}
        />
        <TodoList list={groupData} />
      </div>
    );
  }
}

export default GroupEntry;
