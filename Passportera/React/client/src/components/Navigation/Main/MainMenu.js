import React, { Component } from 'react';
import MenuItem from '../subcomponents/MenuItem';

export default class MainMenu extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isResponsive: '',
            userMenuVisible: false
        }

        // this.changeVisibility = this.changeVisibility.bind(this);
        this.openMenu = this.openMenu.bind(this);
    }

  openMenu (value) {
    this.props.userItemClicked();
  }

    /*
    changeVisibility(e) {
        // console.log('dfaadadad');
        this.setState(prevState => ({
            userMenuVisible: !prevState.userMenuVisible
        }));
        // console.log(this.state);
        this.userClicked(e);
        //console.log('clicked');
    }
*/
  render () {
    return (
      <div id='nav-bar' className={this.props.responsiveClass}>
        <nav id='main-menu' className={this.props.responsiveClass}>

          <ul>
            <MenuItem iconClass='fa-home' href='/' link='Home' openMenu={null} />
            <MenuItem iconClass='fa-globe' href='/explore' link='Explore' />
            <MenuItem iconClass='fa-search' href='/search' link='Search' />
            <MenuItem iconClass='fa-compass' href='/activate/pro' link='Go Pro' itemClass='pro' />
            <MenuItem iconClass='fa-user' href='#' link='User' itemId='user-info' openMenu={this.openMenu} />
          </ul>
        </nav>

        <nav id='sub-menu' className={this.props.responsiveClass}>
          <ul>
            <li>About the Project</li>
            <li>Blog</li>
            {/* <li>FAQ</li> */}
            {/* <li>Pricing</li> */}
          </ul>
        </nav>
      </div>
    );
  }
}
