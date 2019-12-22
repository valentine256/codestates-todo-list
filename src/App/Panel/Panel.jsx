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
  searchText: string;
  addNewGroup: (name:string) => void;
  changeGroup: (id: number) => void;
  renameGroup: (id: number, name: string) => void;
  deleteGroup: (id:number) => void;
  searchTextChange: (text: string) => void;
  searchDateChange: (date: Date) => void;
}

class Panel extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  panelContentsRender() {
    const {
      panel, groupList, data, changeGroup, searchDateChange, addNewGroup, renameGroup, deleteGroup,
    } = this.props;

    switch (panel) {
      default:
        return <div />;
      case 'Calendar':
        return <ICalendar setSearchDate={searchDateChange} />;
      case 'Group':
        return (
          <GroupListViewer
            groupList={groupList}
            data={data}
            addNewGroup={addNewGroup}
            changeGroup={changeGroup}
            renameGroup={renameGroup}
            deleteGroup={deleteGroup}
          />
        );
    }
  }

  render() {
    const { searchTextChange, searchText } = this.props;
    return (
      <div>
        <SearchTool searchText={searchText} onSearch={searchTextChange} />
        {this.panelContentsRender()}
      </div>
    );
  }
}

export default Panel;
