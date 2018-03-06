import React from 'react';

class AddNewRestPopup extends React.Component {

    state = {
        name: "",
        address: "",
        tenbis: false,
        max_delivery_time: 10,
        cuisine: ""
    };

    updateChange= (e) => {
        const eventId = e.target.id;
        const event_value = e.target.value;

        if (eventId === "restaurant_name") {
            this.setState({name: event_value});
        }
        else if (eventId === "restaurant_address") {
            this.setState({address: event_value});
        }
        else if (eventId === "restaurant_tenbis") {
            this.setState({tenbis: event_value});
        }
        else if (eventId === "restaurant_maxDeliveryTime") {
            this.setState({max_delivery_time: event_value});
        }
        else if (eventId == "cuisine_id") {
            this.setState({cuisine: event_value});
        }
    };

    newRestaurantSubmit = (e) => {
        fetch('/restaurants', {
            method: 'post',
            body: JSON.stringify({restaurant: {
                    name: this.state.name,
                    cuisine: this.state.cuisine,
                    address: this.state.address,
                    max_delivery_time: this.state.max_delivery_time,
                    tenbis: this.state.tenbis
                },}),
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': Rails.csrfToken()
            },
            credentials: 'same-origin'
        }).then(function(response) {
            console.log("success!!!");
            console.log(response.status);
        });
    };

    render() {
        return (
            <div className="popup">
                <div>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Add a Restaurant</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <div className="row">
                                        <div className="col-xs-12 col-sm-10">
                                            <label>Restaurant name:</label>
                                            <input id="restaurant_name"
                                                   type="text"
                                                   className="form-control"
                                                   placeholder="Restaurant's name"
                                                   value={this.state.name}
                                                   onChange={this.updateChange}
                                                   />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-12 col-sm-10">
                                            <label>Address:</label>
                                            <input id="restaurant_address" type="text" className="form-control"
                                                   value={this.state.address} onChange={this.updateChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-12 col-sm-10">
                                            <label>Accepts 10bis?<input id="restaurant_tenbis" className="form-check-input" type="checkbox"
                                                                        value={this.state.tenbis} onChange={this.updateChange}
                                                                         /></label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-12 col-sm-10">
                                            Max Delivery Time (in minutes):
                                            <input id="restaurant_maxDeliveryTime" type="number" min={10} max={120} step={10}
                                                   value={this.state.max_delivery_time} onChange={this.updateChange} required/>
                                        </div>
                                    </div>

                                    <div>Cuisines:</div>
                                    <br/>
                                    <select className="custom-select col-xs-12 col-sm-10" id="cuisine_id" value={this.state.cuisine}
                                            onChange={this.updateChange} required>
                                        <option value="" defaultValue>Choose cuisine</option>
                                        {this.props.cuisines.map((item, key) => {
                                            return (<option key={item.name} value={item.id}>{item.name}</option>)
                                        })}
                                    </select>


                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={this.newRestaurantSubmit} data-dismiss="modal">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNewRestPopup
