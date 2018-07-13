import React, { Component } from 'react';

class MenuItem extends Component {
  constructor (props) {
    super(props);

    this.iconClicked = this.iconClicked.bind(this);
  }

  iconClicked (e) {
    if (this.props.openMenu) {
      this.props.openMenu();
    }
  }

  render () {
    let classNames = `fa fa-2x ${this.props.iconClass}`;
    let itemClass = this.props.itemClass !== undefined ? this.props.itemClass : '';
    let itemId = this.props.itemId !== undefined ? this.props.itemId : '';

    return (
      <li id={itemId} className={itemClass} onClick={this.iconClicked}>
        <i className={classNames} aria-hidden='true'></i>
        <p>
          <a href={this.props.href}>{this.props.link}</a>
        </p>
      </li>
    );
  }
}

export default MenuItem;
