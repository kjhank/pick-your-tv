import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  HashRouter,
  Route,
  // Link,
  Switch,
  NavLink
} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Seating from '../Seating/Seating.jsx';
import MainUse from '../MainUse/MainUse.jsx';
import UsageTime from '../UsageTime/UsageTime.jsx';
import Brightness from '../Brightness/Brightness.jsx';
import SmartFeatures from '../SmartFeatures/SmartFeatures.jsx';
import PriceRange from '../PriceRange/PriceRange.jsx';
import DislikedBrands from '../DislikedBrands/DislikedBrands.jsx';
import BroadcastTv from '../BroadcastTv/BroadcastTv.jsx';
import InputOutput from '../InputOutput/InputOutput.jsx';
import Navigation from '../Navigation/Navigation.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specs: this.props.specs
    };
  }

  render() {
    return (
      <div>
        <form className="features">
          <Seating />
          <Link to="/main#mainuse-section">
            <i className="fas fa-chevron-circle-down icon next-section-icon" />
          </Link>
          <MainUse />
          <Link to="/main#usagetime-section">
            <i className="fas fa-chevron-circle-down icon next-section-icon" />
          </Link>
          <UsageTime />
          <Link to="/main#brightness-section">
            <i className="fas fa-chevron-circle-down icon next-section-icon" />
          </Link>
          <Brightness />
          <Link to="/main#smarttype-section">
            <i className="fas fa-chevron-circle-down icon next-section-icon" />
          </Link>
          <SmartFeatures />
          <Link to="/main#pricerange-section">
            <i className="fas fa-chevron-circle-down icon next-section-icon" />
          </Link>
          <PriceRange />
          <Link to="/main#dislikedbrands-section">
            <i className="fas fa-chevron-circle-down icon next-section-icon" />
          </Link>
          <DislikedBrands />
          <Link to="/main#broadcasttv-section">
            <i className="fas fa-chevron-circle-down icon next-section-icon" />
          </Link>
          <BroadcastTv />
          <Link to="/main#inputoutput-section">
            <i className="fas fa-chevron-circle-down icon next-section-icon" />
          </Link>
          <InputOutput />
        </form>
      </div>
    );
  }
}

export default Main;
