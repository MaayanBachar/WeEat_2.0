import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import Restaurants from './Restaurants'

class Body extends React.Component {

    constructor() {
        super();
        this.state = {
            restaurants: []
        };
    }

    componentWillMount() {
        fetch('http://localhost:3000/restaurants.json')
            .then(response => response.json())
            .then((restaurants) => this.setState({restaurants: restaurants}));
    }

    render() {
        return (
            <div className="body">
                <h1>Body!!!!!</h1>
                { this.state.restaurants &&
                <div>
                    <Restaurants restaurants = {this.state.restaurants}/>
                </div>
                }
            </div>
        );
    }
}

export default Body
