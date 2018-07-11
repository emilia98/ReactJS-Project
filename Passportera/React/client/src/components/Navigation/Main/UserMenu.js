import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserMenu extends Component {
  constructor(props) {
    super(props);

    // this.menuClicked = this.menuClicked.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    // this.googleLoginClicked = this.googleLoginClicked.bind(this);

    this.buttonClicked = this.buttonClicked.bind(this);

    this.state = {
      isOpened: false,
      iconClicked: this.props.iconClicked
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapper = node;
  }

  async buttonClicked(e) {

    let token = localStorage.getItem('token');
    // console.log(token);
    // let token = user.token;
    // console.log(token);
    // console.log(JSON.parse(localStorage.getItem('user')))

    let result = await fetch('http://localhost:8080/user/profile/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
        // [{"key":"Content-Type","value":"application/x-www-form-urlencoded","description":"","warning":""}]
      }
    });

    /*
let result = await fetch('http://localhost:8080/visited/country/25', {
  method: 'GET',
  headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
      // [{"key":"Content-Type","value":"application/x-www-form-urlencoded","description":"","warning":""}]
  }
});

 console.log(e.target);
 let token = JSON.parse(localStorage.getItem('token'));
 console.log(token);
 let result = await fetch('http://localhost:8080/user/profile/me', {
   method: 'POST',
   headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
   body: JSON.stringify({token: token})
 });*/
    result = await result.json();
  }

  /* TODO:
  async googleLoginClicked(e) {
    
    e.preventDefault();
    window.open('http://localhost:8080/auth/google', '_blank');
;     
    let result = await fetch('http://localhost:8080/auth/google', {
    
    });
    
     result = await result.json();
  }
 */

  handleClickOutside(event) {
    if ((document.getElementById('user-info').contains(event.target)) ||
      (this.wrapper && this.wrapper.contains(event.target))) {
      this.setState({
        isOpened: true
      });
    } else {
      this.setState({
        isOpened: false
      });
    }
  }

  render() {
    // console.log(this.props);
    let classes = this.state.isOpened === true ? 'opened' : '';
    return (
      <nav id="user" ref={this.setWrapperRef}
        className={classes}>
        <span id="user-close">
          <i className="fa fa-2x fa-times" aria-hidden="true"></i>
        </span>
        <ul>
          <button onClick={this.buttonClicked}>Clicke me</button>
          <li>
            <div className="authenticate">
              <a href="/user/register">
                <button id="register">Register</button>
              </a>
            </div>
          </li><li>
            <div className="authenticate">
              <a href="/user/login">
                <button id="login">Login</button>
              </a>
            </div>
          </li><li>
            <a href="/auth/google">
              <div className="nav-social-login facebook">
                <p>
                  Login with <i className="fa fa-facebook" aria-hidden="true"></i>
                </p>
              </div>
            </a>
          </li><li>
            <div className="nav-social-login google" onClick={this.googleLoginClicked}>
              <p>
                <a href="#">Login with <i className="fa fa-google-plus" aria-hidden="true"></i></a>
              </p>
            </div>
          </li>
        </ul>

        <ul>
          <li id="profile">
            <a href="https://www.google.com">
              <div>
                <img src="img_avatar.png" alt="Avatar" />
                <p>
                  <i className="fa fa-hashtag" aria-hidden="true"></i> emilia98
                </p>
              </div>
            </a>
          </li><li className="user-logged">
            <a href="https://www.google.com">
              <h3>
                <p>
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>My profile</span>
                </p>
              </h3>
            </a>
          </li><li className="user-logged">
            <a href="https://www.google.com">
              <h3>
                <p>
                  <i className="fa fa-bar-chart" aria-hidden="true"></i>
                  <span>My Stats</span>
                </p>
              </h3>
            </a>
          </li><li className="user-logged">
            <a href="https://www.google.com">
              <h3>
                <p>
                  <i className="fa fa-cog" aria-hidden="true"></i>
                  <span>Settings</span>
                </p>
              </h3>
            </a>
          </li> <li className="user-logged">

            <a href="https://www.google.com">
              <h3>
                <p>
                  <i className="fa fa-sign-out" aria-hidden="true"></i>
                  <span>Logout</span>
                </p>

              </h3>
            </a>

          </li>
        </ul>
      </nav>
    )
  }
}

/*
Possible States: 
-> null -> if the app does not know if the user is logged in or not
-> object with userId -> if the app knows thaht the user is logged in
-> false -> if the user is not logged in

function mapStateToProps(state) {
  return { auth: state.auth};
}
*/

/* The "MODERN" Way */
function mapStateToProps ({auth}) {
  console.log(auth);
  return { auth };
}



export default connect(mapStateToProps)(UserMenu);
