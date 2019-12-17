import React from 'react';
import ReactDOM from 'react-dom';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

import App from './App/App';

initializeIcons(/* optional base url */);

ReactDOM.render(<App />, document.getElementById('app'));
