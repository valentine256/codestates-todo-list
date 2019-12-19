// @flow

import React from 'react';

import SearchTool from './SearchTool/SearchTool';
import ICalendar from './ICalendar/ICalender';
import GroupListViewer from './GroupListViewer/GroupListViewer';

import { TodoEntry } from '../../scheme/scheme';
import type { PanelType, GroupList } from '../../scheme/scheme';

type State = {
}
type Props = {
  panel: PanelType;
  data: TodoEntry[];
  groupList: GroupList;
  changeGroup: (id: number) => void;
}

class Panel extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  panelContentsRender() {
    const {
      panel, groupList, data, changeGroup,
    } = this.props;

    switch (panel) {
      default:
        return <div />;
      case 'Calendar':
        return <ICalendar />;
      case 'Group':
        return <GroupListViewer groupList={groupList} data={data} changeGroup={changeGroup} />;
    }
  }

  render() {
    return (
      <div>
        <SearchTool />
        {this.panelContentsRender()}
      </div>
    );
  }
}

export default Panel;
