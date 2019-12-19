/* eslint-disable react/no-array-index-key */
// @flow

import React from 'react';
import SplitPane from 'react-split-pane';

import DockBar from './DockBar/DockBar';
import Panel from './Panel/Panel';
import Viewer from './Viewer/Viewer';

import { TodoEntry } from '../scheme/scheme';
import type { GroupList, PanelType, SelectedGroup } from '../scheme/scheme';

interface States {
  panel: PanelType;
  groupList: GroupList;
  selectedGroup?: SelectedGroup;
  data: TodoEntry[];
}
class App extends React.Component<{}, States> {
  constructor() {
    super();
    this.state = {
      panel: 'Group',
      selectedGroup: {
        id: 1,
        groupName: 'qwe',
      },
      groupList: [
        {
          id: 0,
          groupName: '미리 알림',
        },
        {
          id: 1,
          groupName: 'qwe',
        },
      ],
      data: [
        {
          id: 1,
          groupId: 1,
          text: '아무거나 하기',
          status: 'active',
          startDate: '123213',
          deadline: 'asdasd',
          timeStamp: 'asd',
        },
        {
          id: 2,
          groupId: 1,
          text: '아무거나 하기싫어',
          status: 'active',
          startDate: '123213',
          deadline: 'asdasd',
          timeStamp: 'asd',
        },
        {
          id: 3,
          groupId: 0,
          text: '아무거나 하기11',
          status: 'active',
          startDate: '123213',
          deadline: 'asdasd',
          timeStamp: 'asd',
        },
        {
          id: 4,
          groupId: 0,
          text: '아무거나 하기싫어11',
          status: 'active',
          startDate: '123213',
          deadline: 'asdasd',
          timeStamp: 'asd',
        },
      ],
    };
  }

  changePanel(item: PanelType): void {
    const { panel } = this.state;
    if (panel === item) {
      this.setState({ panel: 'Empty' });
    } else {
      this.setState({ panel: item });
    }
  }

  changeGroup(id: number) {
    const { groupList } = this.state;
    this.setState({
      selectedGroup: groupList[id],
    });
  }

  renderPanel() {
    const {
      panel, groupList, selectedGroup, data,
    } = this.state;
    switch (panel) {
      default:
        return (
          <SplitPane
            pane1Style={{ backgroundColor: '#252525' }}
            split="vertical"
            defaultSize={250}
          >
            <Panel panel={panel} groupList={groupList} data={data} changeGroup={(id) => this.changeGroup(id)} />
            <Viewer selectedGroup={selectedGroup} data={data} />
          </SplitPane>
        );
      case 'Empty':
        return (
          <SplitPane
            pane1Style={{ width: '100%' }}
            split="vertical"
          >
            <Viewer selectedGroup={selectedGroup} data={data} />
          </SplitPane>
        );
    }
  }

  render() {
    return (
      <div style={{ color: '#ffffff' }}>
        <DockBar onClick={(panel: any) => this.changePanel(panel)} />
        <div
          style={{
            position: 'absolute', left: '48px', right: '0px', top: '0px', bottom: '0px',
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {this.renderPanel()}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
