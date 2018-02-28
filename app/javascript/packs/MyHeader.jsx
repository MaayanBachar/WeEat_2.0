import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import AddNewRestPopup from './AddNewRestPopup'

class MyHeader extends React.Component {

    render() {
        return (
            <div className="app">
                <h1>Hi from Header!</h1>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Add New Restaurant
                </button>
                <div>
                    <AddNewRestPopup cuisines = {this.props.cuisines}/>
                </div>
            </div>
        );
    }
}

export default MyHeader
