import React, { Component } from 'react';

import { connect } from 'react-redux';
class Test extends Component {
  

  renderMe () {
    switch (this.props.auth) {
      case null: {
        return <p>DO NOT KNOW</p>;
      }
      case false: {
        return <p>NOT AUTH</p>;
      }
      default: {
        return <p>LOGGED IN</p>;
      }
    }
  }
  render () {
    return (
      <div>
        {this.renderMe()}
      </div>
    );
  }
}

function mapStateToProps ({auth}) {
  // console.log(auth);
  return { auth };
}

export default connect(mapStateToProps)(Test);
