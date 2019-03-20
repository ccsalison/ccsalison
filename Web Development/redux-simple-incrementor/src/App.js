import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store = {store}/>
      </div>
    );
  }
}

export default App;
