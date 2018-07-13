import React, { Component } from 'react';
import { Route } from 'react-router';
import Menu from './Menu';
import CreateNewCountry from './Country/CreateNew';

class Admin extends Component {
    render() {
        return (
            <div id="admin-container">
                <Menu />
                
                <Route path='/admin/manage/country' exact component={CreateNewCountry}/>
                
            </div>
        )
    }
}

export default Admin;
