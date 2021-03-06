import React, {Component} from 'react';
import { connect } from 'react-redux';
import CountriesGrid from './CountriesGrid';
import '../../styles/explore.css';


class Explore extends Component {
    constructor(props) {
        super(props);

        this.state = {}

        this.onOptionSelected = this.onOptionSelected.bind(this);
    }

    async onOptionSelected(e) {
        let url = `http://localhost:8080/explore/country/all?sort=${e.target.value}`;
        let getAll = await fetch(url, {
            method: 'GET'
        });

        getAll = await getAll.json();
        this.setState({
            countries: getAll.countries
        });
    }

    async componentDidMount() {
        let url = `http://localhost:8080/explore/country/all?sort=alphabetically`;
        let getAll = await fetch(url, {
            method: 'GET'
        });

        getAll = await getAll.json();
        this.setState({
            countries: getAll.countries
        });
    }

    render() {
        return (
            <div id="expolore-container">
            <div class='page-title'>
              <div class='explore'>
                 <h1> Explore </h1>
              </div>
              
              <div class='explore right'>
                <select>
                  <option value='most-popular' onClick={this.onOptionSelected}>Most Popular</option>
                  <option value='alphabetically' selected='true' onClick={this.onOptionSelected}>Alphabetically</option>
                  <option value='alphabetically-reversed' onClick={this.onOptionSelected}>Alphabetically (reversed)</option>
                  
                 </select>
              </div>
              
               
            </div>
           <div id='explore-info'>
                 <p>Results: <span class='explore-results'>144 (alphabetically)</span></p>
              </div>

             <CountriesGrid countries={this.state.countries} />
          </div>
        )
    }
}

function mapStateToProps ({auth}) {
    return { auth };
  }

export default connect(mapStateToProps)(Explore);
