import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App cool={false} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
