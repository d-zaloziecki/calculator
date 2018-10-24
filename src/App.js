import React, { Component } from 'react';
import './App.css';
import Screen from './components/Screen'
import Buttons from './components/Buttons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Screen />
        <Buttons />
      </div>
    );
  }
}

export default App;
