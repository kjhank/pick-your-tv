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
  render() {
    return (
      <div>
        <form>
          <Seating/>
          <MainUse />
          <UsageTime />
          <Brightness />
          <SmartFeatures />
          <PriceRange />
          <DislikedBrands />
          <BroadcastTv />
          <InputOutput />
        </form>
        <Navigation link="results" />
      </div>
    );
  }
}

export default Main;
