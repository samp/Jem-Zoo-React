import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image}></img>
            <div className="card-text">
                <h3 dangerouslySetInnerHTML={{ __html: props.title }}></h3>

                <div dangerouslySetInnerHTML={{ __html: props.content }} ></div>

                {props.link &&
                    <a className="button" href={props.link}>{props.linkText}</a>
                }
            </div>
        </div>
    )
};

export default Card;