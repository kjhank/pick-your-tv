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

class MainUse extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="movies-radio">
          <input
            type="radio"
            value="Movies"
            name="main-use"
            id="movies-radio"
          />
          Movies
        </label>
        <label htmlFor="gaming-radio">
          <input
            type="radio"
            value="Gaming"
            name="main-use"
            id="gaming-radio"
          />
          Gaming
        </label>
        <label htmlFor="sports-radio">
          <input
            type="radio"
            value="Sports"
            name="main-use"
            id="sports-radio"
          />
          Sports
        </label>
        <label htmlFor="generic-radio">
          <input
            type="radio"
            value="Generic"
            name="main-use"
            id="generic-radio"
          />
          Generic
        </label>
      </div>
    );
  }
}

export default MainUse;
