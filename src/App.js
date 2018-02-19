import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Ashley', age: 33 },
      { name: 'Jennifer', age: 39}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Ashley', age: 33 },
        { name: 'Jennifer', age: 39}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 33 },
        { name: 'Jennifer', age: 39}
      ]
    })
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (

        <div>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Lincoln")}
          input={this.nameChangedHandler}>My Hobbies: Reading</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
      
      )
    }

    return (
      <div className="App">
        <button onClick={() => this.togglePersonsHandler()}>Toggle</button>
        {persons}
      </div>
    );
  }
}

export default App;
