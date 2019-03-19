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
      nextLink: 'seating',
      prevLink: '',
      choices: {}
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
          <Route exact path="/main/" component={Main} />
          <Route exact path="/results/" component={Results} />
          <Route component={FourOhFour} />
        </Switch>
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
