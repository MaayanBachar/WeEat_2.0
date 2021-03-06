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
                <div className="subtitle">Filter by...</div>
                <div className="all_filters">
                    <div className="filter">
                        <div className="col-xs-12 col-sm-10">
                            Cuisine:
                            <select id="restaurants_cuisine" value={this.state.cuisine} className="custom-select col-xs-12 col-sm-10" onChange={(e) => {
                                this.setState({cuisine: e.target.value});
                                this.props.onChangeCuisine(e.target.value);
                            }}>
                                <option value="" defaultValue>Choose cuisine</option>
                                {this.props.cuisines.map((item, key) => {
                                    return (<option key={item.name} value={item.id}>{item.name}</option>)
                                })}
                            </select>
                        </div>
                    </div>


                    <div className="filter">
                        <div className="col-xs-12 col-sm-10">
                            Max delivery time:
                            <select id="restaurants_maxDeliveryTime" value={this.state.maxDeliveryTime} className="custom-select col-xs-12 col-sm-10" onChange={(e) => {
                                this.setState({maxDeliveryTime: e.target.value});
                                this.props.onChangeDeliveryTime(e.target.value);
                            }}>
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


                    <div className="filter">
                        <div className="col-xs-12 col-sm-10">
                            Minimal rating:
                            <select id="restaurants_minimalRating" value={this.state.minimalRating} className="custom-select col-xs-12 col-sm-10" onChange={(e) => {
                                this.setState({minimalRating: e.target.value});
                                this.props.onChangeMinimalRating(e.target.value);
                            }}>
                                <option value="" defaultValue>Choose minimal rating</option>
                                <option value="1">1 star</option>
                                <option value="2">2 stars</option>
                                <option value="3">3 stars</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filters