import 'typeface-roboto';
import 'react-dates/initialize';

import React from 'react';
import ReactDOM from 'react-dom';

import './config/i18n';
import './index.css';

import jssExtend from 'jss-extend';
import { create } from 'jss';

import App from './containers/App';
import * as serviceWorker from './config/serviceWorker';

import { createGenerateClassName, jssPreset } from '@material-ui/styles';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './config/muiTheme';
import { JssProvider } from 'react-jss';

const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend()],
});

jss.options.insertionPoint = document.getElementById('jss-insertion-point');
const generateClassName = createGenerateClassName();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <App />
    </JssProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
