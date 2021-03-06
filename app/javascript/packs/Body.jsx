import React from 'react';
import Restaurants from './Restaurants'
import Map from './Map'
import Filters from './Filters'

class Body extends React.Component {

    state = {
        restaurants: [],
        filterDeliveryTime: null,
        filterCuisine: null,
        filterMinimalRating: null
    };

    componentWillMount() {
        fetch('/restaurants')
            .then(response => response.json())
            .then((restaurants) => this.setState({restaurants: restaurants}));
    }

    handleChangeDeliveryTime = (val) =>{
        this.setState({filterDeliveryTime: val});
    };

    handleChangeCuisine = (val) => {
        this.setState({filterCuisine: val});
    };

    handleChangeMinimalRating = (val) => {
        this.setState({filterMinimalRating: val});
    };

    render() {
        let filteredRestList = this.state.restaurants;

        if (this.state.filterDeliveryTime) {
            filteredRestList = filteredRestList.filter(restaurant => restaurant.max_delivery_time <= this.state.filterDeliveryTime)
        }

        if (this.state.filterCuisine) {
            filteredRestList = filteredRestList.filter(restaurant => restaurant.cuisine.id == this.state.filterCuisine)
        }

        if (this.state.filterMinimalRating) {
            filteredRestList = filteredRestList.filter(restaurant => restaurant.get_rating >= this.state.filterMinimalRating)
        }

        return (
            <div className="body">
                <Filters cuisines = {this.props.cuisines}
                         onChangeDeliveryTime={this.handleChangeDeliveryTime}
                         onChangeCuisine={this.handleChangeCuisine}
                         onChangeMinimalRating={this.handleChangeMinimalRating}
                />
                <div className="map_and_rests">
                    <div className="restaurants">
                        { this.state.restaurants &&
                        <Restaurants restaurants = {filteredRestList}/>
                        }
                    </div>
                    <Map />
                </div>
            </div>
        );
    }
}

export default Body