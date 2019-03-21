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

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specs: this.props.specs
    }
  }

  render() {
    console.log(this.state.specs);
    return (
      <div>
        <h2>Results</h2>
        <Navigation/>
      </div>
    );
  }
}

export default Results;
