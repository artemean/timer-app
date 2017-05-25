import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer App</li>
                        <li><NavLink activeClassName="active" exact to="/">Timer</NavLink></li>
                        <li><NavLink activeClassName="active" to="/countdown">Countdown</NavLink></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li className="menu-text">Created by aartemenko</li>
                        </ul>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Nav;
