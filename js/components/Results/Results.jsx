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

let apiUrl = 'http://localhost:3000/tvs/';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specs: this.props.specs,
      tvs: []
    };
  }

  componentDidMount() {
    document.title = this.props.title;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ tvs: data });
      });
  }

  render() {
    const { Consumer } = specsCtx;
    const update = this.updateCtx;

    return (
      <Consumer>
        {({ update, filter, scores, specs }) => {
          // console.log(specs);

          // console.log(scores(filter(this.state.tvs)));
          let result = scores(filter(this.state.tvs));
          return (
            <div className="results">
              <div className="wrapper">
                <h2>Results</h2>
                <ol>
                  {result.map((elem, idx) => (
                    <li key={idx}>
                      <h3>{elem.brand} {elem.model}</h3>
                    </li>
                  ))}
                </ol>
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
