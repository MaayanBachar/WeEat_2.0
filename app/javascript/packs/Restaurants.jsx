import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import Restaurant from './Restaurant'

class Restaurants extends React.Component {

    render() {
        return (
            <div className="restaurants">
                <h1>Restaurants list:</h1>
                { this.props.restaurants &&
                    <div>
                        {this.props.restaurants.map(function (restaurant) {
                            return <Restaurant key={restaurant.id} restaurant = {restaurant}/>
                        })}
                    </div>
                }
            </div>
        );
    }
}

export default Restaurants
