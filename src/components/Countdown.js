import React, { Component } from 'react';
import Clock from './Clock';
import CountDownForm from './CountDownForm';

class Countdown extends Component {
    state = {
        count: 0
    };

    handleSetCountdown = (seconds) => {
        this.setState({
            count: seconds
        });
    };

    render() {
        const {count} = this.state;

        return (
            <div className="countdown">
                <Clock totalSeconds={count} />
                <CountDownForm onSetCountdown={this.handleSetCountdown} />
            </div>
        );
    }
}

export default Countdown;
