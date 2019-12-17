// @flow

import React from 'react';

type State = {
}
type Props = {
  groupName: string;
  changeGroup: () => void;
}

class GroupTitle extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { groupName, changeGroup } = this.props;
    return (
      <div style={{ backgroundColor: '#333333', marginTop: '10px', height: '20px' }} onClick={changeGroup}>
        <span>
          {groupName}
        </span>

      </div>
    );
  }
}

export default GroupTitle;
