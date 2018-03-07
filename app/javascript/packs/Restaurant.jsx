import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

class Restaurant extends React.Component {

    render() {
        const {restaurant} = this.props;
        return (
            <div className="restaurant">
                <h4>{restaurant.name}</h4>
                <div>Max delivery time: {restaurant.max_delivery_time}</div>
                <div>Address: {restaurant.address}</div>
                {restaurant.tenbis && restaurant.tenbis && <div className="tenbis_img" ></div> }
                <div className="cuisine_font">{restaurant.cuisine.logo}</div>
                <Stars val={restaurant.get_rating}/>
            </div>
        );
    }
}

function Stars(numStars) {
    var stars = [];
    var numOfStars = numStars.val;

    for (var i = 0; i < numOfStars; i++) {
        stars.push(
            <i key={i} className="fas fa-star"></i>
        )
    }

    return (
        <div>
            {stars}
        </div>
    )
}

export default Restaurant