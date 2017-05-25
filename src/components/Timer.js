import React, { Component } from 'react';
import Clock from './Clock';

class Timer extends Component {
    render() {
        const sec = 810;
        return (
            <div className="timer">
                <Clock totalSeconds={sec} />
            </div>
        );
    }
}

export default Timer;
