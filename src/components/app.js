import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>JOEL DEANS PORTFOLIO</h1>
        <h2>Last time I changed something the whole thing broke!</h2>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
      </div>
    );
  }
}
