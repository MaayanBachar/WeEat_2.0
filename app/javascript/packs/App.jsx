import React from 'react';
import Body from './Body'
import MyHeader from './MyHeader'

class App extends React.Component {


    constructor() {
        super();
        this.state = {
            cuisines: []

        };
    }

    componentWillMount() {
        fetch('http://localhost:3000/cuisines.json')
            .then(response => response.json())
            .then((cuisines) => this.setState({cuisines: cuisines}));
    }

    render() {
        console.log(this.props.cuisines)
        return (
            <div className="app">
                { this.state.cuisines &&
                <div>
                    <MyHeader cuisines = {this.state.cuisines}/>
                </div>
                }
                <div>
                    <Body cuisines = {this.state.cuisines}/>
                </div>
            </div>
        );
    }
}

export default App


