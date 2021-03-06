import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Cards2 from '../Cards-2/Cards-2';
import Cards4 from '../Cards-4/Cards-4';
import Helmet from "react-helmet";

const WhatWeDo = (props) => {
    const [eventposts, setEventPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost/jemzoo/wp-json/wp/v2/event?_embed").then(function (jresponse) {
            if (jresponse.ok) {
                jresponse.json().then(function (json) {
                    setEventPosts(json);
                });
            } else {
                console.log("Error getting file " + jresponse.status + ": " + jresponse.statusText);
            }
        });
    }, []);

    const [annualposts, setAnnualPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost/jemzoo/wp-json/wp/v2/posts?_embed&categories=3&tags=7").then(function (jresponse) {
            if (jresponse.ok) {
                jresponse.json().then(function (json) {
                    setAnnualPosts(json);
                });
            } else {
                console.log("Error getting file " + jresponse.status + ": " + jresponse.statusText);
            }
        });
    }, []);

    return (
        <main>
            <Helmet>
                <title>Jem Zoo - Things to do</title>
            </Helmet>
            <Cards2>
                {eventposts.map((post, i) => (
                    <Card key={i} title={post.title.rendered} content={"<h4>" + post.acf.date + "</h4><h4>" + post.acf.price + " - " + post.acf.age_range + "</h4>" + post.acf.description } image={post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} link="#" linkText="Book" />
                ))}
            </Cards2>
            <Cards4>
                {annualposts.map((post, i) => (
                    <Card key={i} title={post.title.rendered} content={"<h4>" + post.acf.date_range + "</h4>"} image={post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} link="#" linkText="Read more" />
                ))}
            </Cards4>
        </main>
    )
};

export default WhatWeDo;