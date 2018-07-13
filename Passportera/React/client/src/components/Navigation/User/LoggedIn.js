import React, { Component } from 'react';

class LoggedInUser extends Component {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  async onLogout(e) {
    let token = localStorage.getItem('token');
    let result = await fetch('http://localhost:8080/user/logout', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
        // [{'key':'Content-Type','value':'application/x-www-form-urlencoded','description':'','warning':''}]
      }
    });

    if (result.status === 200) {
      localStorage.clear();
      window.location.href = '/';
      return;
    }
    // console.log(result);
    // result = await result.json();
    // console.log(result);
  }

  async goToProfile() {
    
  }

  render() {
    return (
      <ul>
        <li id='personal-profile'>
          <a href='#'>
            <div>
              <img src={this.props.user.profilePicture} alt='Avatar' />
              <p>
                <i className='fa fa-hashtag' aria-hidden='true'></i> {this.props.user.username}
                </p>
            </div>
          </a>
        </li><li className='user-logged' onClick={this.goToProfile}>
          <a href='#'>
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
        </li> <li className='user-logged' onClick={this.onLogout}>

          <a href='#'>
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
