import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './components/User/Authentication/Register';
import Login from './components/User/Authentication/Login';
import Navigation from './components/Navigation/Navigation';
import Map from './components/Country/Map';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <Navigation />
      <Route path='/user/register' component={Register} />
      <Route path='/user/login' component={Login} />
      <Route path='/country' component={Map} />
      </div>
    );
  }
}
//<Register/>
export default App;
