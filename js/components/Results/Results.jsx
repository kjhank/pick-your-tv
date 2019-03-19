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
import Navigation from '../Navigation/Navigation.jsx'

class InputOutput extends React.Component {
  render() {
    return (
      <div>
        <h2>Results</h2>
        <Navigation/>
      </div>
    );
  }
}

export default InputOutput;