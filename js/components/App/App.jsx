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

import { specsCtx } from '../Context/Context.jsx';
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
import Summary from '../Summary/Summary.jsx';
import UsageTime from '../UsageTime/UsageTime.jsx';

let apiUrl = 'http://localhost:3000/tvs/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      tvs: [],
      specs: {
        androidTv: false,
        distance: 'less than 2m',
        wideangle: false,
        mainUse: 'Movies',
        usageTime: 'Daytime',
        brightness: 'bright',
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
        hdmis: '4',
        headphoneJack: false,
        hdmi20: false,
        bluetooth: false
      }
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

  updateCtx = event => {
    //TODO switch po target.id
    let specItem = event.target.id;
    let tempSpecs = this.state.specs;

    switch (specItem) {
      case 'distance':
        this.setState({
          specs: { ...tempSpecs, distance: event.target.value }
        });
        break;

      case 'wideangle':
        this.setState({
          specs: { ...tempSpecs, wideangle: event.target.checked }
        });
        break;

      case 'gaming-radio':
      case 'movies-radio':
      case 'sports-radio':
      case 'generic-radio':
        this.setState({
          specs: { ...tempSpecs, mainUse: event.target.value }
        });
        break;

      case 'daytime-radio':
      case 'nighttime-radio':
      case 'radio-247':
        this.setState({
          specs: { ...tempSpecs, usageTime: event.target.value }
        });
        break;

      case 'radio-bright':
      case 'radio-moderate':
      case 'radio-black':
      case 'radio-blinds':
        this.setState({
          specs: { ...tempSpecs, brightness: event.target.value }
        });
        break;

      case 'radio-fast':
        this.setState({
          specs: { ...tempSpecs, androidTv: false }
        });
        break;

      case 'radio-slow':
        this.setState({
          specs: { ...tempSpecs, androidTv: true }
        });
        break;

      case 'checkbox-googlecast':
        this.setState({
          specs: { ...tempSpecs, googleCast: event.target.checked }
        });
        break;

      case 'checkbox-airplay':
        this.setState({
          specs: { ...tempSpecs, airPlay: event.target.checked }
        });
        break;

      case 'checkbox-smarthome':
        this.setState({
          specs: { ...tempSpecs, smartHomeControl: event.target.checked }
        });
        break;

      case 'checkbox-oneremote':
        this.setState({
          specs: { ...tempSpecs, oneRemote: event.target.checked }
        });
        break;

      case 'checkbox-gamemode':
        this.setState({
          specs: { ...tempSpecs, advancedGameMode: event.target.checked }
        });
        break;

      case 'radio-highend':
      case 'radio-midrange':
      case 'radio-budget':
        this.setState({
          specs: { ...tempSpecs, priceRange: event.target.value }
        });
        break;

      case 'checkbox-lg':
        this.setState({
          specs: { ...tempSpecs, dislikedLg: event.target.checked }
        });
        break;

      case 'checkbox-panasonic':
        this.setState({
          specs: { ...tempSpecs, dislikedPanasonic: event.target.checked }
        });
        break;

      case 'checkbox-samsung':
        this.setState({
          specs: { ...tempSpecs, dislikedSamsung: event.target.checked }
        });
        break;

      case 'checkbox-sony':
        this.setState({
          specs: { ...tempSpecs, dislikedSony: event.target.checked }
        });
        break;

      case 'checkbox-tcl':
        this.setState({
          specs: { ...tempSpecs, dislikedTcl: event.target.checked }
        });
        break;

      case 'checkbox-tpv':
        this.setState({
          specs: { ...tempSpecs, dislikedTpv: event.target.checked }
        });
        break;

      case 'checkbox-dvbt':
        this.setState({
          specs: { ...tempSpecs, dvbt: event.target.checked }
        });
        break;

      case 'checkbox-dvbc':
        this.setState({
          specs: { ...tempSpecs, dvbc: event.target.checked }
        });
        break;

      case 'checkbox-dvbs':
        this.setState({
          specs: { ...tempSpecs, dvbs: event.target.checked }
        });
        break;

      case 'checkbox-twintuner':
        this.setState({
          specs: { ...tempSpecs, twinTuner: event.target.checked }
        });
        break;

      case 'hdmi3-radio':
      case 'hdmi4-radio':
        this.setState({
          specs: { ...tempSpecs, hdmis: event.target.value }
        });
        break;

      case 'checkbox-headphonejack':
        this.setState({
          specs: { ...tempSpecs, headphoneJack: event.target.checked }
        });
        break;

      case 'checkbox-hdmi20':
        this.setState({
          specs: { ...tempSpecs, hdmi20: event.target.checked }
        });
        break;

      case 'checkbox-bluetooth':
        this.setState({
          specs: { ...tempSpecs, bluetooth: event.target.checked }
        });
        break;

      default:
        console.log(specItem);
    }
  };

  render() {
    const { specs } = this.state;
    const { Provider, Consumer } = specsCtx;
    const update = this.updateCtx;
    const landing = props => {
      <Landing />;
    };
    const main = props => {
      <Main />;
    };
    const results = props => {
      <Results />;
    };
    const fourohfour = props => {
      <FourOhFour />;
    };
    return (
      <Provider value={{ update, specs }}>
        <HashRouter>
          <MainHeader title={this.props.title} />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/main/" component={Main} />} />
            <Route exact path="/summary/" component={Summary} />
            <Route exact path="/results/" component={Results} />
            <Route component={FourOhFour} />
          </Switch>
          <Footer />
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
