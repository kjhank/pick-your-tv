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

class Copyleft extends React.Component {
  render() {
    return <svg className="copyleft-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 980"><circle cx="490" cy="490" r="440" fill="none" stroke="#ede6e3" strokeWidth="100"/><path d="M219,428H350a150,150 0 1 1 0,125H219a275,275 0 1 0 0-125z"/>
    </svg>
  }
}

export default Copyleft;
