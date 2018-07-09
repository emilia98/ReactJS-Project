import React,  { Component } from 'react';

class UserMenu extends Component {
   constructor(props) {
     super(props);

     // this.menuClicked = this.menuClicked.bind(this);
     this.setWrapperRef = this.setWrapperRef.bind(this);
     this.handleClickOutside = this.handleClickOutside.bind(this);

    
     this.state = {
       isOpened: false,
       iconClicked: this.props.iconClicked
     }

    // console.log(this.state);
   }

   componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

   setWrapperRef(node) {
     // console.log(node);
     // console.log('hello');
     this.wrapper = node;
   }

  
   
   handleClickOutside(event) {
    //console.log(event.target);
    //console.log(document.getElementById('user-info'));
    if ( (document.getElementById('user-info').contains(event.target)) ||
         (this.wrapper && this.wrapper.contains(event.target))) {
      this.setState({
        isOpened: true
      });
    } else {
      this.setState({
        isOpened: false
      });
    }

    //console.log(this.state);
     // if()
    // if(!this.wrapper.contains(event.target) )

    // If the wrapper exists and we
    // console.log(this.wrapper);
    // console.log(document.getElementById('#user-info'));
    // console.log(event.target);

   /*
    if(this.wrapper && this.wrapper.contains(event.target)) {
      
      console.log('hereee');
      this.setState({
        isOpened: true
      })
    } else if(this.state.iconClicked === true){ 
      this.props.closeMenu();
      console.log();
      
      this.setState({
        isOpened: false
      })
      
    }

    this.setState({
      iconClicked: false
    });
    // console.log(this.state);
    // if(this.wrapper && this.wrapper.contains())
  }
  */
}

    render() {
let classes = this.state.isOpened === true ? 'opened' : '';
      // console.log(this.props.menuOpened);
      // let classNames = this.props.menuOpened ? 'opened' : '';
        // let classNamees = this.state.isOpened === true || this.props.menuOpened ? 'opened' : '';
        return (
            <nav id="user" ref={this.setWrapperRef} 
            className={classes} 
            >
                    <span id="user-close">
                        <i className="fa fa-2x fa-times" aria-hidden="true"></i>
                    </span>
                  <ul> 
                    <li>
                      <div className="authenticate">
                        <a href="/user/register">
                          <button id="register">
                            Register
                          </button>
                        </a>
                      </div>
                    </li><li>
                      <div className="authenticate">
                        <a href="/user/login">
                          <button id="login">
                            Login
                          </button>
                        </a>
                      </div>
                    </li><li>
                        <div className="nav-social-login facebook">
                                    <p>
                                           <a href="#">Login with <i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    </p>
                        </div>
                    </li><li>
                     <div className="nav-social-login google">
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

export default UserMenu;
