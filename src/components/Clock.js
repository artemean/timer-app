import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Clock.css';

const ClockTitle = ({title, className}) => {
  return (
      <div className={className}>
        <div className="text-center clock-title">{title}</div>
      </div>
  )
};

class Clock extends Component {

    static props = {
        totalSeconds: 0
    };

    formatSeconds(totalSeconds) {
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60);

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        return `${minutes}:${seconds}`;
    }

    render() {
        const {totalSeconds} = this.props;
        return (
            <div>
                <ClockTitle className="some" title="My Clock" />
                <div className="clock">
                    <span className="clock-text">
                    {this.formatSeconds(totalSeconds)}
                </span>
                </div>
            </div>

        );
    }
}

Clock.propTypes = {
    totalSeconds: PropTypes.number
};

export default Clock;
