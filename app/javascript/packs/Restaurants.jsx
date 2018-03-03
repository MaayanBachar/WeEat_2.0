import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import Restaurant from './Restaurant'

class Restaurants extends React.Component {

    render() {
        return (
            <div>
                { this.props.restaurants &&
                    <div className="rest">
                        {this.props.restaurants.map(function (restaurant) {
                            return <Restaurant key={restaurant.id} restaurant={restaurant}/>

                        })}
                    </div>
                }
            </div>
        );
    }
}

export default Restaurants
