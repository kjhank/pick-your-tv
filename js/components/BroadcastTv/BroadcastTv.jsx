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

class BroadcastTv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dvbt: this.props.dvbt,
      dvbc: this.props.dvbc,
      dvbs: this.props.dvbs,
      twinTuner: this.props.twinTuner
    };
  }

  dvbtChange = event => this.setState({ dvbt: !this.state.dvbt });
  dvbcChange = event => this.setState({ dvbc: !this.state.dvbc });
  dvbsChange = event => this.setState({ dvbs: !this.state.dvbs });
  twinTunerChange = event =>
    this.setState({ twinTuner: !this.state.twinTuner });

  render() {
    return (
      <div
        className={this.props.initialClass + ' broadcasttv-section'}
        id="broadcasttv-section"
      >
        <h2>Broadcast TV</h2>
        <div className="wrapper">
          <h2>Which tuners?</h2>
          <div className="third">
            <input
              type="checkbox"
              value="dvb-t"
              id="checkbox-dvbt"
              name="broadcast"
              checked={this.state.dvbt}
              onChange={this.dvbtChange}
            />
            <label htmlFor="checkbox-dvbt">Terrestial</label>
          </div>
          <div className="third">
            <input
              type="checkbox"
              value="dvb-c"
              id="checkbox-dvbc"
              name="broadcast"
              checked={this.state.dvbc}
              onChange={this.dvbcChange}
            />
            <label htmlFor="checkbox-dvbc">Cable</label>
          </div>
          <div className="third">
            <input
              type="checkbox"
              value="dvb-s"
              id="checkbox-dvbs"
              name="broadcast"
              checked={this.state.dvbs}
              onChange={this.dvbsChange}
            />
            <label htmlFor="checkbox-dvbs">Satelite</label>
          </div>
        </div>
        <div className="wrapper">
          <h2>Do you need twin tuners?</h2>
          <div>
            <input
              type="checkbox"
              value="twin tuner"
              id="checkbox-twintuner"
              name="broadcast"
              checked={this.state.twinTuner}
              onChange={this.twinTunerChange}
            />
            <label htmlFor="checkbox-twintuner">Twin tuner</label>
          </div>
        </div>
      </div>
    );
  }
}

export default BroadcastTv;
