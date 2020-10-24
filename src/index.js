import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './styles/theme';
import GlobalStyles from './styles/global';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
