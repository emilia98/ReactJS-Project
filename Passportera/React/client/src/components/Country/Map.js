import React, { Component } from 'react';


class Map extends Component {
    constructor(props) {
        super(props);

        this.showMap = this.showMap.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    async showMap() {
        let user = JSON.parse(localStorage.getItem('user'));
        let token = user.token;
        // console.log(token);
        // console.log(JSON.parse(localStorage.getItem('user')))
        
        let result = await fetch('http://localhost:8080/visited/country/25', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
                // [{"key":"Content-Type","value":"application/x-www-form-urlencoded","description":"","warning":""}]
            }
        });

        result = await result.json();
        console.log(result);
    
    }

    buttonClicked() {
        console.log('clicked');
        this.showMap();
    }
    render() {
        return(
            <div>
                <h1> A map stands here </h1>
                <button onClick={this.buttonClicked}>Click</button>
                </div>
        )
    }
}

export default Map;
