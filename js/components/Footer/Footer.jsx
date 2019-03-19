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
import Copyleft from '../Copyleft/Copyleft.jsx';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Copyleft className="icon copyleft-icon"/> 2019 kjhank
      </footer>
    );
  }
}

export default Footer;
