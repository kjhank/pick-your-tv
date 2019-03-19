import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';

import App from './components/App/App.jsx';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App title="Pick your TV!" />,
    document.getElementById('app')
  );
});
