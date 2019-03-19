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

class SplashScreen extends React.Component {
  render() {
    return <h2><Link to="/main">Let's get started!</Link></h2>;
  }
}

export default SplashScreen;
