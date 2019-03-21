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
  constructor(props) {
    super(props);
    this.state = {
      priceRange: this.props.priceRange
    };
  }

  priceRangeChange = event => this.setState({ priceRange: event.target.value });

  render() {
    return (
      <div className={this.props.initialClass + ' pricerange-section'} id="pricerange-section">
        <h2>Price range</h2>
        <div className="wrapper">
          <h2>What is your price range?</h2>
          <div>
            <input
              type="radio"
              value="high-end"
              id="radio-highend"
              name="pricerange"
              checked={this.state.priceRange === 'high-end'}
              onChange={this.priceRangeChange}
            />
            <label htmlFor="radio-highend" className="radiolabel">
              High-end
            </label>
          </div>
          <div>
            <input
              type="radio"
              value="mid-range"
              id="radio-midrange"
              name="pricerange"
              checked={this.state.priceRange === 'mid-range'}
              onChange={this.priceRangeChange}
            />
            <label htmlFor="radio-midrange" className="radiolabel">
              Mid-range
            </label>
          </div>
          <div>
            <input
              type="radio"
              value="budget-friendly"
              id="radio-budget"
              name="pricerange"
              checked={this.state.priceRange === 'budget-friendly'}
              onChange={this.priceRangeChange}
            />
            <label htmlFor="radio-budget" className="radiolabel">
              Budget-friendly
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default PriceRange;
