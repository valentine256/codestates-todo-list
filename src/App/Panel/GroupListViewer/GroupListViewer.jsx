import React from 'react';
import _ from 'lodash';

import GroupEntry from './GroupEntry/GroupEntry';
import AddGroup from './AddGroup/AddGroup';
import { TodoEntry } from '../../../scheme/scheme';
import type { GroupList } from '../../../scheme/scheme';

type State = {
}
type Props = {
  groupList: GroupList;
  data: TodoEntry[];
  addNewGroup: (name:string) => void;
  changeGroup: (id: number) => void;
  renameGroup: (id: number, name: string) => void;
  deleteGroup: (id:number) => void;
}

class GroupListViewer extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  createGroupRendr() {
    const {
      groupList, changeGroup, data, deleteGroup, renameGroup,
    } = this.props;

    return groupList.map((group) => {
      const groupData = _.filter(data, { groupId: group.id });
      return (
        <GroupEntry
          key={group.id}
          group={group}
          groupData={groupData}
          changeGroup={changeGroup}
          renameGroup={renameGroup}
          deleteGroup={deleteGroup}
        />
      );
    });
  }

  render() {
    const { addNewGroup } = this.props;

    return (
      <div>
        <div style={{ height: '820px', overflowY: 'auto', marginTop: '10px' }}>
          {this.createGroupRendr()}
        </div>
        <AddGroup addNewGroup={addNewGroup} />
      </div>
    );
  }
}

export default GroupListViewer;
