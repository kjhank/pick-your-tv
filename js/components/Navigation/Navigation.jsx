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

class Navigation extends React.Component {
  render() {
    if (this.props.link) {
      return (
        <nav className="main-nav">
          <Link to={this.props.link}>
            <i className="fas fa-chevron-circle-right next-icon icon" />
          </Link>

          <Link to="/">
            <i className="fas fa-home nav-icon icon" />
          </Link>
        </nav>
      );
    } else {
      return (
        <nav className="main-nav">
          <Link to="/">
            <i className="fas fa-home nav-icon icon" />
          </Link>
        </nav>
      );
    }
  }
}

export default Navigation;
