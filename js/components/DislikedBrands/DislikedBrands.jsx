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

class DislikedBrands extends React.Component {
  render() {
    return (
      <div>
        <h2>Disliked Brands</h2>
        <label htmlFor="checkbox-lg">
          <input type="checkbox" value="lg" id="checkbox-lg" defaultChecked/>LG
        </label>
        <label htmlFor="checkbox-panasonic">
          <input type="checkbox" value="panasonic" id="checkbox-panasonic"/>Panasonic
        </label>
        <label htmlFor="checkbox-tpv">
          <input type="checkbox" value="tp vision" id="checkbox-tpv"/>TP Vision
        </label>
        <label htmlFor="checkbox-samsung">
          <input type="checkbox" value="samsung" id="checkbox-samsung" />Samsung
        </label>
        <label htmlFor="checkbox-sony">
          <input type="checkbox" value="sony" id="checkbox-sony"/>Sony
        </label>
        <label htmlFor="checkbox-tcl">
          <input type="checkbox" value="tcl" id="checkbox-tcl"/>TCL
        </label>
      </div>
    );
  }
}

export default DislikedBrands;
