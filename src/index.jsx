import React from 'react';
import ReactDOM from 'react-dom';

import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import App from './App/App';

const theme = createMuiTheme({
  palette: {
    primary: grey,
    type: 'dark',
  },
  status: {
    danger: 'red',
  },
});


initializeIcons(/* optional base url */);

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
),
document.getElementById('app'));
