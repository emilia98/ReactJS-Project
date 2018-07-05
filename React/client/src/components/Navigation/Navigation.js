import React, { Component } from 'react';
import './navigation.css';
import MainMenu from './Main/MainMenu';
// import '../../jquery-3.3.1.min.js';
import $ from 'jquery';

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        console.log('construct');

        this.state = {
            responsive: ''
        };

        this.looksForResizing = this.looksForResizing.bind(this);
       //this.subMenu = $('#sub-menu');
       // this.mainMenu = $('#main-menu');
    }

    looksForResizing(e) {
        let width = e.target.innerWidth;

        // console.log(this.state);
        if (width < 700) {
            this.setState({
                responsive: 'responsive'
            });
            $('#main-menu').insertBefore($('#sub-menu'));
        } else {
            this.setState({
                responsive: ''
            });

            $('#sub-menu').insertBefore($('#main-menu'));
        }
    }

    componentDidMount() {
        let width = window.innerWidth;
        if (width >= 700) {
            $('#sub-menu').insertBefore($('#main-menu'));
        }
        else {
            console.log(this.state);
            this.setState({
                responsive: 'responsive'
            });
        }
        //console.log($(this.state.subMenu));
        // console.log(window.i)
        // console.log('da');
       window.addEventListener('resize', this.looksForResizing);
        
    }

/*
    componentWillUnmount() {
        window.removeEventListener('resize', this.looksForResizing);
    }
*/
    /*
    componentWillUpdate() {
        //console.log('here');
        window.addEventListener('resize', (e) => {
            let width = e.innerWidth;
            if (width < 700) {
                this.setState({
                    responsive: 'responsive'
                });
            } else {
                this.setState({
                    responsive: ''
                });
            }
        });
    }
    */

    render() {
        return (
            <MainMenu responsiveClass={this.state.responsive}/>
        )
    }
}
