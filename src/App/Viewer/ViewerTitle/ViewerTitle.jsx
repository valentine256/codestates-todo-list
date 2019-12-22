// @flow

import React from 'react';

type State = {
}
type Props = {
  name: string;
}

class ViewerTitle extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { name } = this.props;
    return (
      <span style={{ margin: '0px', fontSize: '70px', position: 'fixed' }}>
        {name}
      </span>
    );
  }
}

export default ViewerTitle;
