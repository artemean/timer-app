import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Controls extends Component {
    onStatusChange = (newStatus) => {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    };

    renderStartStopButton() {
        if (this.props.countdownStatus === 'started') {
            return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
        } else {
            return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
        }
    };

    render() {
        return (
            <div className="controls">
                <div className="text-center">
                    {this.renderStartStopButton()}
                    <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
                </div>
            </div>
        )
    }
}

Controls.propTypes = {
    countdownStatus: PropTypes.string.isRequired,
    onStatusChange: PropTypes.func.isRequired
};

export default Controls;
