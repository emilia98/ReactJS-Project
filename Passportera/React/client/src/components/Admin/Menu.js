import React, { Component } from 'react';
import MenuItem from './subcomponents/MenuItem';

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.manageCountries = this.manageCountries.bind(this);
    }

    manageCountries(e) {
        console.log(e.target);
        window.history.pushState('no', 'here', '/admin/manage/country/new');
        //window.location.href = ;
    }

    render() {
        return (
            <div id="admin-nav">
                    <ul>
                        <MenuItem key='times' iconTitle='times' title='User Mode'/>
                        <MenuItem key='home' iconTitle='home' title='Home'/>
                        <MenuItem key='flag' iconTitle='flag' title='Country' clickFunc={this.manageCountries}/>
                        <MenuItem key='users' iconTitle='user' title='Users'/>
                    </ul>
                </div>
        );
    }
}
