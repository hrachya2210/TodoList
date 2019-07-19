import React, {Component} from 'react';
import ToDoList from '../ToDoList/ToDoList';

class App extends Component {
  constructor () {
    super()
    
  }
  render () {
    return (
      <div>
        <h2>Todo list  <span>`{5} things to do, done {3}`</span></h2>
        <ToDoList />
      </div>
      
    )
  }
}

export default App;
