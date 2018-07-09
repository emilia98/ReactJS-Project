import React, { Component } from 'react';
import axios from 'axios';
import FormTitle from './common/FormTitle';
import InputData from './common/InputData';
import Buttons from './common/Buttons';
import SocialLogin from './common/SocialLogin';
import Validation from './common/Validation';
import '../authentication.css';

import { Redirect } from 'react-router-dom';



class Login extends Component {
    constructor (props) {
        super(props);

        // console.log('here');
        this.state = {
            errors: {},
            result: {},
            hasSuccess: false
        };

        this.onFormSubmitted = this.onFormSubmitted.bind(this);
        this.returnError = this.returnError.bind(this);
    }
    
    async onFormSubmitted(event) {
        
        // console.log(event.target);
        event.preventDefault();
        const data = new FormData(event.target);
        // console.log(data);

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        // console.log(headers);
        /*
        var headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
        */
       
        let result = await fetch('http://localhost:8080/user/login', {
            method: 'POST',
            
             // mode: "cors",
           
             // credentials: 'include',
             
             /*headers: {
                 'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                 'Accept': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/x-www-form-urlencoded'
             }*,*/
             body: data
             //headers
        });

       result = await result.json();
       console.log(result);
       

       // console.log(data);
       /*
      let result = await axios('http://localhost:8080/user/login', {
        method: 'POST',
        
         // mode: "cors",
        // withCredentials: true,
         // credentials: 'include',
         /* headers: {
             'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
      },
         body: JSON.stringify(data)
         //headers
    });

*/
    // result =await result.json();
    // console.log();

    /*

      let result = await axios("http://mysite.com/api/things/", {
        method: "post",
        data: someJsonData,
        withCredentials: true
      })
*/
       this.setState({
           result: result,
           errors: result.errors
       });

       if (result.token) {
           localStorage.setItem('user', JSON.stringify({
               user: result.user,
               token: result.token
           }));
       }

       // console.log(this.state);
    };


    returnError (inputField) {
        console.log(this.state);
        return this.state.errors[inputField] !== undefined
    }

    render() {
        if(this.state.hasSuccess) {
            return <Redirect to='/' />;
        }

        return (
            <div id="auth-container">
                <form id="authenticate" onSubmit={this.onFormSubmitted}>
                    <FormTitle title = "Login" />

                    <InputData
                    id="username" 
                    inputType="text" 
                    label="Username" 
                    name="username" 
                    hasError={this.returnError('username')}/>
                    <Validation message={this.state.errors.username} />
                    <InputData 
                    id="password" 
                    inputType="password" 
                    label="Password" 
                    name="password"
                    hasError={this.returnError('password')}
                    />
                    <Validation message={this.state.errors.password} />

                    <Buttons />
                   
                </form>

                <SocialLogin />
            </div>
        )
    }
}

export default Login;
