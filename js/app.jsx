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

document.addEventListener('DOMContentLoaded', function() {

  class MainHeader extends React.Component {
    render() {
      return <header className="main-header">
        <h1>{this.props.title}</h1>
      </header>
    }
  }

  class SplashScreen extends React.Component {
    render() {
      return <h2>Let's get started!</h2>
    }
  }

  class Seating extends React.Component {
    render() {
      return <form>
        <h2>Seating:</h2>
        <label htmlFor="wideangle">
          <input type="checkbox" id="wideangle"/>wide angle seating
        </label>
        <label htmlFor="distance">Watching distance
          <select id="distance">
            <option value="less than 1m">⩽1</option>
            <option value="less than 1.5">1-1.5m</option>
            <option value="less than 2m">1.5-2m</option>
            <option value="less than 2.5m">2-2.5m</option>
            <option value="less than 3m">2.5-3m</option>
            <option value="less than 2.5m">3-3.5m</option>
            <option value="less than 3m">3.5-4m</option>
          </select>
        </label>
      </form>
    }
  }

  class MainUse extends React.Component {
    render() {
      return <form>
        <label htmlFor="movies-radio">
          <input type="radio" value="Movies" name="main-use" id="radio-movies"/>
          Movies
        </label>
        <label htmlFor="gaming-radio">
          <input type="radio" value="Gaming" name="main-use" id="gaming-radio"/>
          Gaming
        </label>
        <label htmlFor="sports-radio">
          <input type="radio" value="Sports" name="main-use" id="sports-radio"/>
          Sports
        </label>
        <label htmlFor="generic-radio">
          <input type="radio" value="Generic" name="main-use" id="generic-radio"/>
          Generic
        </label>
      </form>
    }
  }

  class Main extends React.Component {
    render() {
      return <SplashScreen/>
    }
  }

  class Navigation extends React.Component {
    render() {
      return <nav className="main-nav">
        <Link to="/">
          <i className="fas fa-home nav-icon icon"></i>
        </Link>
      </nav>
    }
  }

  class FouOhFour extends React.Component {
    render() {
      return <div className="error">Nothing to see here, move along</div>
    }
  }

  class App extends React.Component {
    render() {
      return (<HashRouter>
        <div>
          <MainHeader title={this.props.title}/>
          <Switch>
            <Route exact path="/" component={SplashScreen}/>
            <Route exact path="/seating/" component={Seating}/>
            <Route exact path="/main-use/" component={MainUse}/>
            <Route component={FouOhFour}/>
          </Switch>
          <Navigation/>
        </div>
      </HashRouter>);
    }
  }

  ReactDOM.render(<App title="Pick your TV!"/>, document.getElementById('app'));
});
