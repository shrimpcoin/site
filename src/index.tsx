import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import GlobalStyle from 'assets/style.js';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    {routes}
  </React.StrictMode>,
  document.getElementById('root'),
);
