
import React from 'react';

import ViewerTitle from './ViewerTitle/ViewerTitle';
import TodoView from './TodoView/TodoView';
import style from './Viewer.css';

import type { SelectedGroup } from '../../scheme/scheme';

type State = {

}
type Props = {
  selectedGroup: SelectedGroup | void;
}

class Viewer extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { selectedGroup } = this.props;
    return (
      <div className={style['viewer-div']}>
        <ViewerTitle name={selectedGroup.groupName} />
        <TodoView items={selectedGroup.items} />
      </div>
    );
  }
}

export default Viewer;
