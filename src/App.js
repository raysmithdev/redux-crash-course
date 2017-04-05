import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import UserList from './components/UserList/UserList'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <UserList />
      </div>
    );
  }
}

export default App;
