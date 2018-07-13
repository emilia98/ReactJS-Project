import React, { Component } from 'react';

class CountryCell extends Component {
    renderButtons() {
        if (this.props.isLoggedIn) {
            return (
                <div className='country-buttons'>
                <button className='first-btn' title="Visited"><i className="fa fa-2x fa-check" aria-hidden="true"></i>
                </button>
                <button className='second-btn'><i className="fa fa-2x fa-plane" aria-hidden="true"></i>
                </button>
                <button className='third-btn'><i className="fa fa-2x fa-heart" aria-hidden="true"></i>
                </button>
            </div>
            )
        }

        return null;
    }
    render() {
        return (
            <div className='explore-cell'>
                <div className='country-data'>
                    <input type='hidden' value={this.props.id}/>
                    <h2>{this.props.countryName}</h2>
                    <span className={`country-icon flag-icon flag-icon-${this.props.isoCode}`}></span>
                    <h2>{this.props.isoCode}</h2>
                </div>
                {this.renderButtons()}
            </div>
        )
    }
}

export default CountryCell;
