import React from 'react';
import './Cards-1.css';

const Cards1 = (props) => {
    return (
        <div className="cards-1">
            {props.children}
        </div>
    )
};

export default Cards1;