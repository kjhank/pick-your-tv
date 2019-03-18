import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter, Route, Link, Switch, NavLink} from 'react-router-dom';

document.addEventListener('DOMContentLoaded', function() {

  class MainHeader extends React.Component {
    render() {
      return <header className="main-header"><h1>{this.props.title}</h1></header>
    }
  }

  class SplashScreen extends React.Component {
    render() {
      return <h2>Let's get started!</h2>
    }
  }

  class Main extends React.Component {
    render() {
      return <SplashScreen/>
    }
  }

  class Navigation extends React.Component {
    render() {
      return <nav class="main-nav"><a href="/"><i className="fas fa-home nav-icon icon"></i></a></nav>
    }
  }

  class App extends React.Component {
    render() {
      return (<div>
        <MainHeader title={this.props.title}/>
        <SplashScreen/>
        <Navigation/>
      </div>);
    }
  }

  ReactDOM.render(
    <App title="Pick your TV!"/>,
    document.getElementById('app')
  );
});
