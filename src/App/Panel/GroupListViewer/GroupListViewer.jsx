import React from 'react';
import _ from 'lodash';

import GroupEntry from './GroupEntry/GroupEntry';
import { TodoEntry } from '../../../scheme/scheme';
import type { GroupList } from '../../../scheme/scheme';

type State = {
}
type Props = {
  groupList: GroupList;
  data: TodoEntry[];
  changeGroup: (id: number) => void;
}

class GroupListViewer extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  createGroupRendr() {
    const { groupList, changeGroup, data } = this.props;

    return groupList.map((group) => {
      const groupData = _.filter(data, { groupId: group.id });
      return <GroupEntry group={group} groupData={groupData} changeGroup={changeGroup} />;
    });
  }

  render() {
    return (
      <div>
        {this.createGroupRendr()}
      </div>
    );
  }
}

export default GroupListViewer;
