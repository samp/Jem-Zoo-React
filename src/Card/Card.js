import React from 'react';
import './Card.css';

const card = (props) => {
    return (
        <div className="card">
            <img src={props._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url}></img>
            <div className="card-text">
                <h3>{props.title.rendered}</h3>

                <div dangerouslySetInnerHTML={{ __html: props.content.rendered }} ></div>
            </div>
        </div>
    )
};

export default card;