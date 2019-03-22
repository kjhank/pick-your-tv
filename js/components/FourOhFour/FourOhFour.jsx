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

class FourOhFour extends React.Component {
  render() {
    return <div className="error">Nothing to see here, move along.<br/><Link to="/">Go back</Link>.</div>;
  }
}

export default FourOhFour;
