/* eslint-disable react/no-array-index-key */

import React from 'react';
import _ from 'lodash';
import SplitPane from 'react-split-pane';

import DockBar from './DockBar/DockBar';
import Panel from './Panel/Panel';
import Viewer from './Viewer/Viewer';

import { TodoEntry } from '../scheme/scheme';
import type { GroupList, PanelType, SelectedGroup } from '../scheme/scheme';

interface States {
  panel: PanelType;
  groupList: GroupList;
  selectedGroup: SelectedGroup;
  data: TodoEntry[];
  nextTodoId: number;
}
class App extends React.Component<{}, States> {
  constructor() {
    super();
    this.state = {
      nextTodoId: 4,
      panel: 'Group',
      selectedGroup: {
        id: 0,
        groupName: '미리 알림',
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
          id: 0,
          groupId: 1,
          text: '아무거나 하기',
          status: false,
          scheduled: false,
          startDate: '123213',
          deadline: 'asdasd',
        },
        {
          id: 1,
          groupId: 1,
          text: '아무거나 하기싫어',
          status: true,
          scheduled: false,
          startDate: '123213',
          deadline: 'asdasd',
        },
        {
          id: 2,
          groupId: 0,
          text: '아무거나 하기11',
          status: false,
          scheduled: false,
          startDate: '123213',
          deadline: 'asdasd',
        },
        {
          id: 3,
          groupId: 0,
          text: '아무거나 하기싫어11',
          status: true,
          scheduled: false,
          startDate: '123213',
          deadline: 'asdasd',
        },
      ],
    };
  }

  createTodo(status, text): void {
    const { nextTodoId, selectedGroup } = this.state;
    const item = {
      id: nextTodoId,
      groupId: selectedGroup.id,
      text,
      status,
      timeStamp: new Date(),
    };

    this.setState((state) => {
      const nextData = [...state.data, item];
      return { data: nextData, nextTodoId: nextTodoId + 1 };
    });
  }


  modifyTodo(id, status, text) {
    const { data } = this.state;
    const index = _.findIndex(data, { id });

    const nextData = data.slice();
    nextData[index].status = status;
    nextData[index].text = text;
    this.setState({ data: nextData });
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

  handleSubmit(status, text) {
    this.createTodo(status, text);
  }

  handleModify(id, status, text) {
    this.modifyTodo(id, status, text);
  }

  renderPanel() {
    const {
      panel, groupList, selectedGroup, data, nextTodoId,
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
            <Viewer selectedGroup={selectedGroup} data={data} nextTodoId={nextTodoId} modifyTodo={(id, status, text) => this.handleModify(id, status, text)} submitInput={(status, text) => this.handleSubmit(status, text)} />
          </SplitPane>
        );
      case 'Empty':
        return (
        // <SplitPane
        //   pane1Style={{ width: '100%' }}
        //   split="vertical"
        // >
          <Viewer selectedGroup={selectedGroup} data={data} nextTodoId={nextTodoId} modifyTodo={(id, status, text) => this.handleModify(id, status, text)} submitInput={(status, text) => this.handleSubmit(status, text)} />
        // </SplitPane>
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
          <div style={{
            position: 'relative', width: '100%', height: '100%', overflow: 'hidden',
          }}
          >
            {this.renderPanel()}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
