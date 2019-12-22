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
  searchText: string;
  searchDate: null | Date;
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
      ],
      data: [],
      searchText: '',
      searchDate: null,
    };
  }

  handleSearchDateChange(date) {
    this.setState({ searchDate: date }, console.log(this.state.searchDate));
  }

  handleSearchTextChange(searchText) {
    this.setState({ searchText });
  }

  filterData() {
    const { searchDate, searchText, data } = this.state;
    let resultData = data.slice();
    if (!searchText) {
      resultData = data;
    } else {
      resultData = _.filter(data, (item) => item.text.includes(searchText));
    }
    if (searchDate !== null) {
      resultData = _.filter(resultData,
        (item) => (Math.floor(item.timeStamp / 1000 / 60 / 60 / 24) === Math.floor(searchDate / 1000 / 60 / 60 / 24)));
    }
    return resultData;
  }

  createGroup(name) {
    console.log(name);
    const { groupList } = this.state;
    const nextGroupId = _.findLast(groupList).id + 1;
    const nextGroup = {
      id: nextGroupId,
      groupName: name,
    };
    const nextGroupList = groupList.concat(nextGroup);
    this.setState({ groupList: nextGroupList });
  }

  // TODO:
  deleteGroup(id) {
    if (id === 0) {
      alert('기본 그룹은 삭제할 수 없습니다.');
      return;
    }
    const { groupList, data, selectedGroup } = this.state;
    const nextGroupList = _.filter(groupList, (item) => item.id !== id);
    const nextData = _.filter(data, (item) => item.groupId !== id);

    this.setState({ groupList: nextGroupList, data: nextData });
    if (selectedGroup.id === id) {
      this.setState({ selectedGroup: groupList[0] });
    }
  }

  modifyGroup(id, name) {
    const { groupList, selectedGroup } = this.state;
    const nextGroupList = groupList.slice();
    const targetGroup = _.find(nextGroupList, { id });
    targetGroup.groupName = name;

    this.setState({ groupList: nextGroupList });
    if (selectedGroup.id === id) {
      this.setState({ selectedGroup: targetGroup });
    }
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
      return { data: nextData, nextTodoId: nextTodoId + 1, searchText: '' };
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

  // TODO:
  deleteTodo(id) {
    const { data } = this.state;
    const nextData = _.filter(data, (item) => item.id !== id);

    this.setState({ data: nextData });
  }

  changePanel(item: PanelType): void {
    const { panel } = this.state;
    if (panel === item) {
      this.setState({ panel: 'Empty' });
    } else {
      this.setState({ panel: item });
    }
    if (item !== 'Calendar') {
      this.setState({ searchDate: null });
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
      panel, groupList, selectedGroup, nextTodoId, searchText,
    } = this.state;

    const data = this.filterData();

    switch (panel) {
      default:
        return (
          <SplitPane
            pane1Style={{ backgroundColor: '#252525' }}
            split="vertical"
            defaultSize={250}
          >
            <Panel
              panel={panel}
              groupList={groupList}
              data={data}
              searchText={searchText}
              addNewGroup={(name) => this.createGroup(name)}
              changeGroup={(id) => this.changeGroup(id)}
              renameGroup={(id, name) => this.modifyGroup(id, name)}
              deleteGroup={(id) => this.deleteGroup(id)}
              searchDateChange={(date) => this.handleSearchDateChange(date)}
              searchTextChange={(text) => this.handleSearchTextChange(text)}
            />
            <Viewer
              selectedGroup={selectedGroup}
              data={data}
              nextTodoId={nextTodoId}
              modifyTodo={(id, status, text) => this.handleModify(id, status, text)}
              submitInput={(status, text) => this.handleSubmit(status, text)}
            />
          </SplitPane>
        );
      case 'Empty':
        return (
        // <SplitPane
        //   pane1Style={{ width: '100%' }}
        //   split="vertical"
        // >
          <Viewer
            selectedGroup={selectedGroup}
            data={data}
            nextTodoId={nextTodoId}
            modifyTodo={(id, status, text) => this.handleModify(id, status, text)}
            submitInput={(status, text) => this.handleSubmit(status, text)}
          />
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
