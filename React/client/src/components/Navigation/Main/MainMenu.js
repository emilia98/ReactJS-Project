import React, { Component } from 'react';
import MenuItem from './MenuItem';

export default class MainMenu extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isResponsive: ''
        }
    }

    render() {
        return (
            //responsive
            
            <div id="nav-bar" className={this.props.responsiveClass}>
            <nav id="main-menu" className={this.props.responsiveClass}>

            <ul>
                <MenuItem iconClass='fa-home' href='/' link='Home'/>
                <MenuItem iconClass='fa-globe' href='/explore' link='Explore'/>
                <MenuItem iconClass='fa-search' href='/search' link='Search'/>
                <MenuItem iconClass='fa-compass' href='/activate/pro' link='Go Pro' itemClass='pro'/>
                <MenuItem iconClass='fa-user' href='#' link='User' itemId='user-info' /* onClick={this.}*/ />
            </ul>
        </nav>

        <nav id="sub-menu" class={this.props.responsiveClass}>
                <ul>
                    <li>About the Project</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>Pricing</li>
                </ul>
            </nav>
        </div>
        )
    }
};