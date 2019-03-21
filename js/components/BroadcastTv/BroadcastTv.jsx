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

class BroadcastTv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dvbt: false,
      dvbc: false,
      dvbs: false,
      twinTuner: false
    };
  }

  dvbtChange = event => this.setState({ dvbt: !this.state.dvbt });
  dvbcChange = event => this.setState({ dvbc: !this.state.dvbc });
  dvbsChange = event => this.setState({ dvbs: !this.state.dvbs });
  twinTunerChange = event =>
    this.setState({ twinTuner: !this.state.twinTuner });

  render() {
    const { Consumer } = specsCtx;
    const update = this.updateCtx;

    return (
      <Consumer>
        {({ update, specs }) => (
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
                  onChange={event => {
                    update(event);
                    this.dvbtChange(event);
                  }}
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
                  onChange={event => {
                    update(event);
                    this.dvbcChange(event);
                  }}
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
                  onChange={event => {
                    update(event);
                    this.dvbsChange(event);
                  }}
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
                  onChange={event => {
                    update(event);
                    this.twinTunerChange(event);
                  }}
                />
                <label htmlFor="checkbox-twintuner">Twin tuner</label>
              </div>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default BroadcastTv;
