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

// const dislikedBrands = ['lg', 'panasonic', 'samsung', 'sony', 'tcl', 'tpv']

class DislikedBrands extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dislikedLg: this.props.dislikedLg,
      dislikedPanasonic: this.props.dislikedPanasonic,
      dislikedSamsung: this.props.dislikedSamsung,
      dislikedSony: this.props.dislikedSony,
      dislikedTcl: this.props.dislikedTcl,
      dislikedTpv: this.props.dislikedTpv
    };
  }

  lgChange = event => this.setState({dislikedLg: !this.state.dislikedLg})

  panasonicChange = event => this.setState({dislikedPanasonic: !this.state.dislikedPanasonic})
  samsungChange = event => this.setState({dislikedSamsung: !this.state.dislikedSamsung})
  sonyChange = event => this.setState({dislikedSony: !this.state.dislikedSony})
  tclChange = event => this.setState({dislikedTcl: !this.state.dislikedTcl})
  tpvChange = event => this.setState({dislikedTpv: !this.state.dislikedTpv})

  render() {
    return (
      <div className={this.props.initialClass + ' dislikedbrands-section'} id="dislikedbrands-section">
        <h2>Disliked Brands</h2>
        <div className="wrapper">
          <h2>Do you dislike any of the following brands?</h2>
          <div>
            <input
              type="checkbox"
              value="lg"
              id="checkbox-lg"
              checked={this.state.dislikedLg}
              onChange={this.lgChange}
            />
            <label htmlFor="checkbox-lg">LG</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="panasonic"
              id="checkbox-panasonic"
              checked={this.state.dislikedPanasonic}
              onChange={this.panasonicChange}
            />
            <label htmlFor="checkbox-panasonic">Panasonic</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="samsung"
              id="checkbox-samsung"
              checked={this.state.dislikedSamsung}
              onChange={this.samsungChange}
            />
            <label htmlFor="checkbox-samsung">Samsung</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="sony"
              id="checkbox-sony"
              checked={this.state.dislikedSony}
              onChange={this.sonyChange}
            />
            <label htmlFor="checkbox-sony">Sony</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="tcl"
              id="checkbox-tcl"
              checked={this.state.dislikedTcl}
              onChange={this.tclChange}
            />
            <label htmlFor="checkbox-tcl">TCL</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="tp vision"
              id="checkbox-tpv"
              checked={this.state.dislikedTpv}
              onChange={this.tpvChange}
            />
            <label htmlFor="checkbox-tpv">TP Vision</label>
          </div>
        </div>
      </div>
    );
  }
}

export default DislikedBrands;
