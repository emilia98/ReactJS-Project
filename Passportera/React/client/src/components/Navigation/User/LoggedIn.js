import React, { Component } from 'react';

class LoggedInUser extends Component {
    render () {
        return (
            <ul>
          <li id='profile'>
            <a href='https://www.google.com'>
              <div>
                <img src='img_avatar.png' alt='Avatar' />
                <p>
                  <i className='fa fa-hashtag' aria-hidden='true'></i> emilia98
                </p>
              </div>
            </a>
          </li><li className='user-logged'>
            <a href='https://www.google.com'>
              <h3>
                <p>
                  <i className='fa fa-user' aria-hidden='true'></i>
                  <span>My profile</span>
                </p>
              </h3>
            </a>
          </li><li className='user-logged'>
            <a href='https://www.google.com'>
              <h3>
                <p>
                  <i className='fa fa-bar-chart' aria-hidden='true'></i>
                  <span>My Stats</span>
                </p>
              </h3>
            </a>
          </li><li className='user-logged'>
            <a href='https://www.google.com'>
              <h3>
                <p>
                  <i className='fa fa-cog' aria-hidden='true'></i>
                  <span>Settings</span>
                </p>
              </h3>
            </a>
          </li> <li className='user-logged'>

            <a href='https://www.google.com'>
              <h3>
                <p>
                  <i className='fa fa-sign-out' aria-hidden='true'></i>
                  <span>Logout</span>
                </p>

              </h3>
            </a>

          </li>
        </ul>
        )
    }
}

export default LoggedInUser;
