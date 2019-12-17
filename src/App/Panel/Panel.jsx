// @flow

import React from 'react';

import SearchTool from './SearchTool/SearchTool';
import GroupListViewer from './GroupListViewer/GroupListViewer';

import type { PanelType, GroupList } from '../../scheme/scheme';

type State = {
}
type Props = {
  panel: PanelType;
  data: GroupList;
  changeGroup: (id: number) => void;
}

class Panel extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { panel, data, changeGroup } = this.props;
    console.log(panel);
    return (
      <div>
        <SearchTool />
        <GroupListViewer items={data} changeGroup={changeGroup} />
      </div>
    );
  }
}

export default Panel;
