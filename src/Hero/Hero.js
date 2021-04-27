import React from 'react';
import './Hero.css';

const hero = (props) => {
    return (
        <div className="hero">
            <picture>
                <source srcSet="images/leopard-wide-1920.webp" media="(min-width: 600px)" />
                <source srcSet="images/leopard-square-550.webp" media="(max-width: 600px)" />
                <img src="images/leopard-wide-fallback.jpg" alt="A leopard sits on a rock at looks to the right."></img>
            </picture>
            <div className="hero-text">
                <h2>Welcome <br />to Jem Zoo</h2>
            </div>
        </div>
    )
};

export default hero;