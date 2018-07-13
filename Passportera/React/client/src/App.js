import React, { Component } from 'react';
import './App.css';
import './styles/admin.css';
import Register from './components/User/Authentication/Register';
import Login from './components/User/Authentication/Login';
import Navigation from './components/Navigation/Navigation';
import Map from './components/Country/Map';

import Profile from './components/User/Profile/Profile';

import Admin from './components/Admin/Admin';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import * as actions from './actions';

// import Test from './components/Test';
class App extends Component {
  constructor (props) {
    super(props);

    this.restrictAuthContent = this.restrictAuthContent.bind(this);
    this.restrictAdminContent = this.restrictAdminContent.bind(this);
    // this.renderThis = this.renderThis.bind(this);
  }

  componentDidMount () {
    // console.log(this.props);
    this.props.fetchUser();
    this.props.administrate();
  }

  restrictAuthContent (path, component) {
    return <Route path={path} exact
      render={() => this.props.auth ? (<Redirect to='/' />) : (component)} /> 
  }

  restrictAdminContent (path, component) {
   // let isAdmin = this.props.admin !== null && this.props.admin.isAdmin;
    // console.log(this.props.admin);

    let isAdmin = this.props.admin;
    //console.log(isAdmin);
    if (isAdmin !== null) {
      //console.log(isAdmin);
      return <Route path={path} exact
        render={() => isAdmin ? (component) : (<Redirect to='/' />)}/> 
    }
   
    // console.log(this.props.admin);
  }

  render () {
    
    // this.restiricAdminContent();
    
    return (
      <div>
        <Navigation />
        
        <Route path='/country' exact component={Map} />
        {this.restrictAuthContent('/user/login', <Login />)}
        {this.restrictAuthContent('/user/register', <Register />)}
        {this.restrictAdminContent('/admin', <Admin />)}
      </div>
    );
  }
}

function mapStateToProps (state) {
  // console.log(state);
  return {auth: state.auth, admin: state.admin};
}

export default connect(mapStateToProps, actions)(App);

/**
 * 
 */