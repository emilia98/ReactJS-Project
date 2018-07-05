import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './components/User/Authentication/Register';
import Navigation from './components/Navigation/Navigation';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <Navigation />
      <Route path='/user/register' component={Register} />
      
      </div>
    );
  }
}
//<Register/>
export default App;
