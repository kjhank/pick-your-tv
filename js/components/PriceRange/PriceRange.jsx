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

class PriceRange extends React.Component {
  render() {
    return (
      <div>
        <h2>Price range</h2>
        <label htmlFor="radio-highend">
          <input
            type="radio"
            value="high-end"
            id="radio-highend"
            name="pricerange"
          />High-end
        </label>
        <label htmlFor="radio-midrange">
          <input
            type="radio"
            value="mid-range"
            id="radio-midrange"
            name="pricerange"
          />Mid-range
        </label>
        <label htmlFor="radio-budget">
          <input
            type="radio"
            value="budget-friendly"
            id="radio-budget"
            name="pricerange"
          />Budget-friendly
        </label>
      </div>
    );
  }
}

export default PriceRange;
