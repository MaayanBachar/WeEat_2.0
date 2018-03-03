import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import AddNewRestPopup from './AddNewRestPopup'

class MyHeader extends React.Component {

    render() {
        return (
            <div className="my_header">
                <div className="header_text">
                    <div className="main_title">WeEat!</div>
                    <div className="subtitle">It's 12:00 and you are hungry.</div>
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
