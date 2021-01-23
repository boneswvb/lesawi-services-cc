import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './context/LogonContextP';

import './index.css';
import 'tachyons';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>, document.getElementById('root'),
);

serviceWorker.unregister();
