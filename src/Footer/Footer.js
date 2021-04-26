import React from 'react';
import './Footer.css';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import youtube from './youtube.svg';

const footer = (props) => {
    return (
        <footer>
            <div className="footer-row">
                <a href="http://www.example.com"><img src={facebook} alt="Facebook logo."></img></a>
                <a href="http://www.example.com"><img src={twitter} alt="Twitter logo."></img></a>
                <a href="http://www.example.com"><img src={instagram} alt="Instagram logo."></img></a>
                <a href="http://www.example.com"><img src={youtube} alt="YouTube logo."></img></a>
            </div>
            <div className="footer-wrapper">
                <ul className="footer-column">
                    <li><a href="http://www.example.com">Contact us</a></li>
                    <li><a href="http://www.example.com">Press</a></li>
                    <li><a href="http://www.example.com">Site map</a></li>
                    <li><a href="http://www.example.com">Careers</a></li>
                </ul>
                <ul className="footer-column">
                    <li><a href="https://fontawesome.com/license">Icons by Font Awesome</a></li>
                    <li><a href="https://unsplash.com/">Images by Unsplash</a></li>
                </ul>

            </div>
        </footer>
    )
};

export default footer;