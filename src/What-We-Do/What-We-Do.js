import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Cards2 from '../Cards-2/Cards-2';
import Cards1 from '../Cards-1/Cards-1';

const WhatWeDo = (props) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost/jemzoo/wp-json/wp/v2/posts?_embed&categories=4").then(function (jresponse) {
            if (jresponse.ok) {
                jresponse.json().then(function (json) {
                    setPosts(json);
                });
            } else {
                console.log("Error getting file " + jresponse.status + ": " + jresponse.statusText);
            }
        });
    });

    return (
        <main>
            <Cards2>
                <Card title="Our animals" content="<p>We have a team of highly skilled zookeepers that work around the clock to provide 
                our animals with the highest quality care.</p>" image="images/tiger-square-fallback.jpg" link="#" linkText="Read more"/>
                <Card title="Conservation" content="<p>We are dedicated to providing a safe future for all animals. Our conservation 
                focuses on wildlife rescue and rehabilitation in the UK, as well as funding nature reserves and other wild spaces.</p>"
                image="images/puffin-square-fallback.jpg" link="#" linkText="Read more"/>
            </Cards2>
            <Cards1>
                {posts.map((post, i) => (
                    <Card key={i} title={post.title.rendered} content={post.excerpt.rendered} image={post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} link="#" linkText="Read more"/>
                ))}
            </Cards1>
        </main>
    )
};

export default WhatWeDo;