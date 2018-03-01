import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import Restaurants from './Restaurants'
import Map from './Map'
import Filters from './Filters'

class Body extends React.Component {

    constructor() {
        super();
        this.state = {
            restaurants: [],
            filterDeliveryTime: null,
            filterCuisine: null
        };
        this.handleChangeDeliveryTime = this.handleChangeDeliveryTime.bind(this);
        this.handleChangeCuisine = this.handleChangeCuisine.bind(this);
    }

    componentWillMount() {
        fetch('http://localhost:3000/restaurants.json')
            .then(response => response.json())
            .then((restaurants) => this.setState({restaurants: restaurants}));
    }

    handleChangeDeliveryTime(val) {
        this.setState({filterDeliveryTime: val});
    }

    handleChangeCuisine(val) {
        this.setState({filterCuisine: val});
    }



    render() {
        let filteredRestList = this.state.restaurants;

        if (this.state.filterDeliveryTime) {
            filteredRestList = filteredRestList.filter(restaurant => restaurant.max_delivery_time <= this.state.filterDeliveryTime)
        }

        if (this.state.filterCuisine) {
            filteredRestList = filteredRestList.filter(restaurant => restaurant.cuisine.id == this.state.filterCuisine)
        }





        return (
            <div className="body">
                <h3>Body</h3>
                <div>
                    <div>Max delivery time: {this.state.max_delivery_time}</div>
                    <Filters cuisines = {this.props.cuisines}
                             onChangeDeliveryTime={this.handleChangeDeliveryTime}
                             onChangeCuisine={this.handleChangeCuisine}
                    />
                </div>

                <Map />
                { this.state.restaurants &&
                    <div>
                        <Restaurants restaurants = {filteredRestList}/>
                    </div>
                }
            </div>
        );
    }
}

export default Body