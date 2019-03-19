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
import SplashScreen from '../SplashScreen/SplashScreen.jsx';
import Navigation from '../Navigation/Navigation.jsx';

class UsageTime extends React.Component {
  render() {
    return <div><SplashScreen/><Navigation link="main"/></div>;
  }
}

export default UsageTime;
