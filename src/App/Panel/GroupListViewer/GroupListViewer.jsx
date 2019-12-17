import React from 'react';

import GroupEntry from './GroupEntry/GroupEntry';
import type { GroupList } from '../../../scheme/scheme';

type State = {
}
type Props = {
  items: GroupList;
  changeGroup: (id: number) => void;
}

class GroupListViewer extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  createGroupRendr() {
    const { items, changeGroup } = this.props;

    return items.map((unit) => <GroupEntry group={unit} changeGroup={changeGroup} />);
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
