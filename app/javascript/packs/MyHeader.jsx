import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import AddNewRestPopup from './AddNewRestPopup'

class MyHeader extends React.Component {

    render() {
        return (
            <div className="my_header">
                <div className="header_text">
                    <h1 className="main_title">WeEat!</h1>
                    <h2 className="subtitle">It's 12:00 and you are hungry.</h2>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Add New Restaurant
                    </button>
                </div>
                <AddNewRestPopup cuisines = {this.props.cuisines}/>
            </div>
        );
    }
}

export default MyHeader
