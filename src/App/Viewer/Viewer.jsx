
import React from 'react';
import _ from 'lodash';

import ViewerTitle from './ViewerTitle/ViewerTitle';
import TodoView from './TodoView/TodoView';
import style from './Viewer.css';

import { TodoEntry } from '../../scheme/scheme';
import type { SelectedGroup } from '../../scheme/scheme';

type State = {

}
type Props = {
  selectedGroup: SelectedGroup | void;
  data: TodoEntry[];
}

class Viewer extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { selectedGroup, data } = this.props;
    const items = _.filter(data, { groupId: selectedGroup.id });
    return (
      <div className={style['viewer-div']}>
        <ViewerTitle name={selectedGroup.groupName} />
        <TodoView items={items} />
      </div>
    );
  }
}

export default Viewer;
