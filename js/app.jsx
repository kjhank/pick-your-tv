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
        <label htmlFor="wideangle">
          <input type="checkbox" id="wideangle"/>wide angle seating
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
            <Route exact="exact" path="/" component={SplashScreen}/>
            <Route exact="exact" path="/seating/" component={Seating}/>
            <Route component={FouOhFour}/>
          </Switch>
          <Navigation/>
        </div>
      </HashRouter>);
    }
  }

  ReactDOM.render(<App title="Pick your TV!"/>, document.getElementById('app'));
});
