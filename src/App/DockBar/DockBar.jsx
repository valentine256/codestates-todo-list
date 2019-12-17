// @flow

import React from 'react';

import style from './DockBar.css';

type State = {
}
type Props = {
}

class DockBar extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return <div className={style['dock-bar']} />;
  }
}

export default DockBar;
