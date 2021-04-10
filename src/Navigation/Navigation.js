import React from 'react';
import './Navigation.css';
import hippo from './hippo.svg';
import map from './map.svg';
import hand from './hand.svg';
import ticket from './ticket.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const navigation = (props) => {
    return (
        <header className="navigation">
            <div className="nav-wrapper">
                <h1><Link to="/">Jem Zoo</Link></h1>
                <nav>
                    <ul id="menu">
                        <li><Link to="/animals" style={{ backgroundImage: `url(${hippo})` }}>Animals</Link></li>
                        <li><a href="things-to-do.html" style={{ backgroundImage: `url(${map})` }}>Things to do</a></li>
                        <li><a href="what-we-do.html" style={{ backgroundImage: `url(${hand})` }}>What we do</a></li>
                        <li><a href="tickets.html" style={{ backgroundImage: `url(${ticket})` }}>Tickets</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default navigation;