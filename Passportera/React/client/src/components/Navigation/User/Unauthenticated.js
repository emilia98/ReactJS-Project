import React, { Component } from 'react';

class UnauthenticatedUser extends Component {
    render() {
        return (
        <ul>
          <li>
            <div className='authenticate'>
              <a href='/user/register'>
                <button id='register'>Register</button>
              </a>
            </div>
          </li><li>
            <div className='authenticate'>
              <a href='/user/login'>
                <button id='login'>Login</button>
              </a>
            </div>
          </li><li>
            <a href='/auth/google'>
              <div className='nav-social-login facebook'>
                <p>
                  Login with <i className='fa fa-facebook' aria-hidden='true'></i>
                </p>
              </div>
            </a>
          </li><li>
            <div className='nav-social-login google' onClick={this.googleLoginClicked}>
              <p>
                <a href='#'>Login with <i className='fa fa-google-plus' aria-hidden='true'></i></a>
              </p>
            </div>
          </li>
        </ul>
        )
    }
}

export default UnauthenticatedUser;
