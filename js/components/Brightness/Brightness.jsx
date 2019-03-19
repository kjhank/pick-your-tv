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

class Brightness extends React.Component {
  render() {
    return (
      <div>
        <h2>Room brightness</h2>
        <label htmlFor="radio-bright">
          <input
            type="radio"
            value="bright"
            name="room-brightness"
            id="radio-bright"
          />
          Lots of light &amp; sunshine
        </label>
        <label htmlFor="radio-moderate">
          <input
            type="radio"
            value="moderate"
            name="room-brightness"
            id="radio-moderate"
          />
          Moderate light
        </label>
        <label htmlFor="radio-black">
          <input
            type="radio"
            value="black"
            name="room-brightness"
            id="radio-black"
          />
          Pitch-black room
        </label>
        <label htmlFor="radio-blinds">
          <input
            type="radio"
            value="blinds"
            name="room-brightness"
            id="radio-blinds"
          />
          Don't care - using blinds
        </label>
      </div>
    );
  }
}

export default Brightness;
