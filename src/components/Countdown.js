import React, { Component } from 'react';
import Clock from './Clock';

class Countdown extends Component {
    render() {
        return (
            <div className="countdown">
                <Clock totalSeconds={820} />
            </div>
        );
    }
}

export default Countdown;
