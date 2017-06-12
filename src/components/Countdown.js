import React, { Component } from 'react';
import Clock from './Clock';
import CountdownForm from './CountDownForm';
import Controls from './Controls';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Countdown extends Component {
    state = {
        count: 0,
        countdownStatus: 'stopped'
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer)
                    this.timer = undefined;
                    break;
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    }

    startTimer() {
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });

            if (newCount === 0) {
                this.setState({countdownStatus: 'stopped'});
            }
        }, 1000);
    }

    handleSetCountdown = (seconds) => {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    };

    handleStatusChange = (newStatus) => {
        this.setState({countdownStatus: newStatus});
    };

    renderControlArea = () => {
        if (this.state.countdownStatus !== 'stopped') {
            return <Controls countdownStatus={this.state.countdownStatus} onStatusChange={this.handleStatusChange}/>;
        } else {
            return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
        }
    };

    render() {
        const {count} = this.state;

        return (
            <div className="countdown text-center">
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <h1 className="page-title">Countdown App</h1>
                    <Clock totalSeconds={count}/>
                    {this.renderControlArea()}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default Countdown;
