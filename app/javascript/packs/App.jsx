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
        // function myFetch(url, options) {
        //     const finalUrl = IS_BROWSER ? url : `http://myservice.com/${url}`;
        //     fetch(url, options);
        // }



        fetch('/cuisines.json')
            .then(response => response.json())
            .then((cuisines) => this.setState({cuisines: cuisines}))
            .catch((error) => console.log("Failed cuisines request: " + error));
    }

    render() {
        return (
            <div className="app">
                { this.state.cuisines &&
                    <MyHeader cuisines={this.state.cuisines}/>
                }
                <Body cuisines={this.state.cuisines}/>
            </div>
        );
    }
}

export default App
