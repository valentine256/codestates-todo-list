// @flow

import React from 'react';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

import RenameGroup from './RenameGroup/RenameGroup';

const iconClass = mergeStyles({
  fontSize: 20,
  height: 20,
  width: 20,
  color: '#ADADAD',
  selectors: {
    '&:hover': { color: '#FFFFFF' },
  },
  position: 'absolute',
  right: 2,
  top: 2,
});
type State = {
}
type Props = {
  groupId: number;
  groupName: string;
  changeGroup: () => void;
  renameGroup: (name: string) => void;
  deleteGroup: () => void;
}

class GroupTitle extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {
      groupName, changeGroup, deleteGroup, renameGroup, groupId,
    } = this.props;
    if (groupId !== 0) {
      return (
        <div
          style={{
            backgroundColor: '#333333',
            height: '24px',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '202px',
              position: 'absolute',
            }}
            onClick={changeGroup}
          >
            {groupName}
          </div>
          <RenameGroup groupName={groupName} renameGroup={(name) => renameGroup(name)} />
          <FontIcon iconName="Cancel" className={iconClass} onClick={deleteGroup} />
        </div>
      );
    }
    return (
      <div
        style={{
          backgroundColor: '#333333',
          height: '24px',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '202px',
            position: 'absolute',
          }}
          onClick={changeGroup}
        >
          {groupName}
        </div>
      </div>
    );
  }
}

export default GroupTitle;
