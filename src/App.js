import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name='Max' age='28'/>
        <Person name='Ashley' age='33'>My Hobbies: Reading</Person>
        <Person name='Jennifer' age='39'/>
      </div>
    );
  }
}

export default App;
