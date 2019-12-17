/* eslint-disable react/no-array-index-key */
// @flow

import React from 'react';
import SplitPane from 'react-split-pane';

import DockBar from './DockBar/DockBar';
import Panel from './Panel/Panel';
import Viewer from './Viewer/Viewer';

import type { GroupList, PanelType, SelectedGroup } from '../scheme/scheme';

interface States {
  panel: PanelType;
  data: GroupList;
  selectedGroup?: SelectedGroup;
}
class App extends React.Component<{}, States> {
  constructor() {
    super();
    this.state = {
      panel: 'Todo',
      selectedGroup: {
        id: 1,
        groupName: 'asd',
        items: [
          {
            id: 1,
            text: '아무거나 하기',
            status: 'active',
            date: '123213',
            deadline: 'asdasd',
          },
          {
            id: 2,
            text: '아무거나 하기',
            status: 'completed',
            date: '123213',
            deadline: 'asdasd',
          },
          {
            id: 3,
            text: '아무거나 하기',
            status: 'scheduled',
            date: '123213',
            deadline: 'asdasd',
          },
        ],
      },
      data: [
        {
          id: 0,
          groupName: 'asd',
          items: [
            {
              id: 1,
              text: '아무것도 안하기',
              status: 'active',
              date: '123213',
              deadline: 'asdasd',
            },
            {
              id: 2,
              text: '아무것도 안하기',
              status: 'completed',
              date: '123213',
              deadline: 'asdasd',
            },
            {
              id: 3,
              text: '아무것도 안하기',
              status: 'scheduled',
              date: '123213',
              deadline: 'asdasd',
            },
          ],
        },
        {
          id: 1,
          groupName: 'qwe',
          items: [
            {
              id: 1,
              text: '아무거나 하기',
              status: 'active',
              date: '123213',
              deadline: 'asdasd',
            },
            {
              id: 2,
              text: '아무거나 하기',
              status: 'completed',
              date: '123213',
              deadline: 'asdasd',
            },
            {
              id: 3,
              text: '아무거나 하기',
              status: 'scheduled',
              date: '123213',
              deadline: 'asdasd',
            },
          ],
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
    const { data } = this.state;
    this.setState({
      selectedGroup: data[id],
    });
  }

  renderPanel() {
    const { panel, data, selectedGroup } = this.state;
    switch (panel) {
      case 'Empty':
        return <Viewer selectedGroup={selectedGroup} />;
      default:
        return (
          <SplitPane
            pane1Style={{ backgroundColor: '#252525' }}
            split="vertical"
            defaultSize={250}
          >
            <Panel panel={panel} data={data} changeGroup={(id) => this.changeGroup(id)} />
            <Viewer selectedGroup={selectedGroup} />
          </SplitPane>
        );
    }
  }

  render() {
    return (
      <div style={{ color: '#ffffff' }}>
        <DockBar />
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
