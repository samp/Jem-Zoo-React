import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Cards4 from '../Cards-4/Cards-4';

const Animals = (props) => {
    const [animals, setAnimals] = useState([]);
    useEffect(() => {
        fetch("http://localhost/jemzoo/wp-json/wp/v2/posts?_embed&categories=6").then(function (jresponse) {
            if (jresponse.ok) {
                jresponse.json().then(function (json) {
                    setAnimals(json);
                });
            } else {
                console.log("Error getting file " + jresponse.status + ": " + jresponse.statusText);
            }
        });
    });

    return (
        <main>
            <Cards4>
                {animals.map((animal, i) => (
                    <Card key={i} title={animal.title.rendered} content={animal.content.rendered} image={animal._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url}/>
                ))}
            </Cards4>
        </main>
    )
};

export default Animals;