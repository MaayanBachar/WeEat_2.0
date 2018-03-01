import React from 'react';


class Filters extends React.Component {

    constructor() {
        super();
        this.state = {
            maxDeliveryTime: "120",
            cuisine:"",
            minimalRating: ""
        };
    }

    render() {
        return (
            <div className="filters">
                <h4>
                    Filters:
                </h4>

                <div className="cuisine_filter">
                    <div className="col-xs-12 col-sm-10">
                        Filter by cuisine:
                        <select id="restaurants_cuisine" value={this.state.cuisine} className="custom-select col-xs-12 col-sm-10" onChange={(e) => {
                            this.setState({cuisine: e.target.value});
                            this.props.onChangeCuisine(e.target.value);
                        }}>
                            <option value="" defaultValue>Filter by cuisine</option>
                            {this.props.cuisines.map((item, key) => {
                                return (<option key={item.name} value={item.id}>{item.name}</option>)
                            })}
                        </select>
                    </div>
                </div>


                <br/>
                <div className="max_delivery_time_filter">
                    <div className="col-xs-12 col-sm-10">
                        Max delivery time:
                        <select id="restaurants_maxDeliveryTime" value={this.state.maxDeliveryTime} className="custom-select col-xs-12 col-sm-10" onChange={(e) => {
                            this.setState({maxDeliveryTime: e.target.value});
                            this.props.onChangeDeliveryTime(e.target.value);
                        }}>
                            <option value="" defaultValue>Filter by cuisine</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                            <option value="60">60</option>
                            <option value="70">70</option>
                            <option value="80">80</option>
                            <option value="90">90</option>
                            <option value="100">100</option>
                            <option value="110">110</option>
                            <option value="120">120</option>
                        </select>
                    </div>
                </div>


                <br/>
                <div className="minimal_rating_filter">
                    <div className="col-xs-12 col-sm-10">
                        Minimal rating:
                        <select id="restaurants_minimalRating" value={this.state.minimalRating} className="custom-select col-xs-12 col-sm-10" onChange={(e) => {
                            this.setState({minimalRating: e.target.value});
                            this.props.onChangeMinimalRating(e.target.value);
                        }}>
                            <option value="" defaultValue>Filter by minimal rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>

            </div>
            
        );
    }
}

export default Filters