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

// import { specs } from '../Context/Context.jsx';
import Brightness from '../Brightness/Brightness.jsx';
import BroadcastTv from '../BroadcastTv/BroadcastTv.jsx';
import Copyleft from '../Copyleft/Copyleft.jsx';
import DislikedBrands from '../DislikedBrands/DislikedBrands.jsx';
import Footer from '../Footer/Footer.jsx';
import FourOhFour from '../FourOhFour/FourOhFour.jsx';
import InputOutput from '../InputOutput/InputOutput.jsx';
import Landing from '../Landing/Landing.jsx';
import Main from '../Main/Main.jsx';
import MainHeader from '../MainHeader/MainHeader.jsx';
import MainUse from '../MainUse/MainUse.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import PriceRange from '../PriceRange/PriceRange.jsx';
import Results from '../Results/Results.jsx';
import Seating from '../Seating/Seating.jsx';
import SmartFeatures from '../SmartFeatures/SmartFeatures.jsx';
import SplashScreen from '../SplashScreen/SplashScreen.jsx';
import UsageTime from '../UsageTime/UsageTime.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      specs: {
        distance: 'less than 2m',
        wideangle: false,
        mainUse: 'Movies',
        usageTime: 'Daytime',
        brightness: 'bright',
        smartType: 'fast',
        googleCast: false,
        airPlay: false,
        smartHomeControl: false,
        oneRemote: false,
        advancedGameMode: false,
        priceRange: 'high-end',
        dislikedLg: true,
        dislikedPanasonic: false,
        dislikedSamsung: false,
        dislikedSony: false,
        dislikedTcl: false,
        dislikedTpv: false,
        dvbt: false,
        dvbc: false,
        dvbs: false,
        twinTuner: false,
        hdmis: 'hdmi4',
        headphoneJack: false,
        hdmi20: false,
        bluetooth: false
      }
    };
  }

  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return (
      <HashRouter>
        <MainHeader title={this.props.title} />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/main/" component={() => <Main specs={this.state.specs} />}/>
          <Route exact path="/results/" component={() => <Results specs={this.state.specs} />}/>
          <Route component={FourOhFour} />
        </Switch>
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
