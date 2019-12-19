// @flow

import React from 'react';

import UnitIcon from './UnitIcon/UnitIcon';
import style from './DockBar.css';

type State = {
}
type Props = {
  onClick: (panel: string) => void;
}

class DockBar extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { onClick } = this.props;
    return (
      <div className={style['dock-bar']}>
        <UnitIcon iconName="SearchAndApps" onClick={() => onClick('Group')} />
        <UnitIcon iconName="DateTime" onClick={() => onClick('Calendar')} />
      </div>
    );
  }
}

export default DockBar;
