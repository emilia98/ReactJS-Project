import React from 'react';

const MenuItem = (props) => {
  let classNames = `fa fa-2x ${props.iconClass}`;
  let itemClass = props.itemClass !== undefined ? props.itemClass : '';
  let itemId = props.itemId !== undefined ? props.itemId : '';
  
  return <li id={itemId} class={itemClass}>
    <i class={classNames} aria-hidden='true'></i>
    <p>
      <a href={props.href}>{props.link}</a>
    </p>
  </li>;
};

export default MenuItem;
