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
    console.log(this.state.specs.distance);
    return (
      <div>
        <form className="features">
          <Seating
            distance={this.state.specs.distance}
            wideangle={this.state.specs.wideangle}
          />
          <Link to="/main#mainuse-section">
            <i className="fas fa-chevron-circle-down icon next-section-icon" />
          </Link>
          <MainUse mainUse={this.state.specs.mainUse} />
          <Link to="/main#usagetime-section">
            <i className="fas fa-chevron-circle-down icon next-section-icon" />
          </Link>
          <UsageTime usageTime={this.state.specs.usageTime} />
          <Link to="/main#brightness-section">
            <i className="fas fa-chevron-circle-down icon next-section-icon" />
          </Link>
          <Brightness brightness={this.state.specs.brightness} />
          <Link to="/main#smarttype-section">
            <i className="fas fa-chevron-circle-down icon next-section-icon" />
          </Link>
          <SmartFeatures
            smartType={this.state.specs.smartType}
            googleCast={this.state.specs.googleCast}
            airPlay={this.state.specs.airPlay}
            smartHomeControl={this.state.specs.smartHomeControl}
            oneRemote={this.state.specs.oneRemote}
            advancedGameMode={this.state.specs.advancedGameMode}
          />
          <Link to="/main#pricerange-section">
            <i className="fas fa-chevron-circle-down icon next-section-icon" />
          </Link>
          <PriceRange priceRange={this.state.specs.priceRange} />
          <Link to="/main#dislikedbrands-section">
            <i className="fas fa-chevron-circle-down icon next-section-icon" />
          </Link>
          <DislikedBrands
            dislikedLg={this.state.specs.dislikedLg}
            dislikedPanasonic={this.state.specs.dislikedPanasonic}
            dislikedSamsung={this.state.specs.dislikedSamsung}
            dislikedSony={this.state.specs.dislikedSony}
            dislikedTcl={this.state.specs.dislikedTcl}
            dislikedTpv={this.state.specs.dislikedTpv}
          />
          <Link to="/main#broadcasttv-section">
            <i className="fas fa-chevron-circle-down icon next-section-icon" />
          </Link>
          <BroadcastTv
            dvbt={this.state.specs.dvbt}
            dvbc={this.state.specs.dvbc}
            dvbs={this.state.specs.dvbs}
            twinTuner={this.state.specs.twinTuner}
          />
          <Link to="/main#inputoutput-section">
            <i className="fas fa-chevron-circle-down icon next-section-icon" />
          </Link>
          <InputOutput
            hdmis={this.state.specs.hdmis}
            headphoneJack={this.state.specs.headphoneJack}
            hdmi20={this.state.specs.hdmi20}
            bluetooth={this.state.specs.bluetooth}
          />
        </form>
      </div>
    );
  }
}

export default Main;
