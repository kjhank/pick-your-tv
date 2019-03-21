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
import Navigation from '../Navigation/Navigation.jsx';
import { specsCtx } from '../Context/Context.jsx';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specs: this.props.specs
    };
  }

  render() {
    const { Consumer } = specsCtx;
    const update = this.updateCtx;

    return (
      <Consumer>
        {({ update, specs }) => {
          console.log(specs);
          return (
            <div className="results">
              <h2>Results</h2>
              <div>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              </div>
              <Navigation />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Results;
