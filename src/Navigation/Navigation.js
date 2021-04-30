import React from 'react';
import './Navigation.css';
import hippo from './hippo.svg';
import map from './map.svg';
import hand from './hand.svg';
import ticket from './ticket.svg';
import {
    BrowserRouter as Router,
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
                        <li><Link to="/things-to-do" style={{ backgroundImage: `url(${map})` }}>Things to do</Link></li>
                        <li><Link to="/what-we-do" style={{ backgroundImage: `url(${hand})` }}>What we do</Link></li>
                        <li><Link to="/tickets" style={{ backgroundImage: `url(${ticket})` }}>Tickets</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default navigation;