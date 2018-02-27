import React from 'react';
import Body from './Body'
import MyHeader from './MyHeader'

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <h1>Hi from App!!!</h1>
                <div>
                    <MyHeader />
                </div>
                <div>
                    <Body />
                </div>
            </div>
        );
    }
}

export default App
