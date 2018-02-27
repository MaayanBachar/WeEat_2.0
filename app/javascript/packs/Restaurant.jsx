import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'


class Restaurant extends React.Component {


    render() {
        const {restaurant} = this.props;
        let tenbis = "";
        if (restaurant.tenbis) {
            tenbis = <img src="../../assets/tenbis_img.jpg" height="40" width="40"/>
        }
        return (
            <div className="restaurant">
                <h4>{restaurant.name}</h4>
                <div>Max delivery time: {restaurant.max_delivery_time}</div>
                <div>Address: {restaurant.address}</div>
                {tenbis}
                <div className="cuisine_font">{restaurant.cuisine.logo}</div>

                <div>Rating: {restaurant.get_rating}</div>
                <a href="https://www.w3schools.com">Visit W3Schools.com!</a>

            </div>
        );
    }
}





export default Restaurant
