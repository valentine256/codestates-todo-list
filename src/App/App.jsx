/* eslint-disable react/no-array-index-key */
// @flow

import React from 'react';

import DockBar from './DockBar/DockBar';
import Panel from './Panel/Panel';
import Viewer from './Viewer/Viewer';

const App = () => (
  <div>
    <DockBar />
    <Panel />
    <Viewer />
  </div>
);

export default App;
