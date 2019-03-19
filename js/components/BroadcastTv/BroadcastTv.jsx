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
  render() {
    return (
      <div>
        <h2>Broadcast TV</h2>
        <label htmlFor="radio-none">
          <input type="radio" value="none" id="radio-none" name="broadcast" />none
        </label>
        <label htmlFor="checkbox-dvbt">
          <input
            type="checkbox"
            value="dvb-t"
            id="checkbox-dvbt"
            name="broadcast"
          />Terrestial
        </label>
        <label htmlFor="checkbox-dvbc">
          <input
            type="checkbox"
            value="dvb-c"
            id="checkbox-dvbc"
            name="broadcast"
          />Cable
        </label>
        <label htmlFor="checkbox-dvbs">
          <input
            type="checkbox"
            value="dvb-s"
            id="checkbox-dvbs"
            name="broadcast"
          />Satelite
        </label>
        <label htmlFor="checkbox-twintuner"><input type="checkbox" value="twin tuner" id="checkbox-twintuner" name="broadcast"/>Twin tuner</label>
      </div>
    );
  }
}

export default BroadcastTv;
