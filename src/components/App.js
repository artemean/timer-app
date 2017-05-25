import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Timer from './Timer';
import Countdown from './Countdown';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav className="ad1" />
                <Route path="/" exact component={Timer} />
                <Route path="/countdown" component={Countdown} />
            </div>
        );
    }
}

export default App;
