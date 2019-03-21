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

class MainHeader extends React.Component {
  render() {
    return <header className="main-header"><Link to="/">{this.props.title}</Link></header>;
  }
}

export default MainHeader;
