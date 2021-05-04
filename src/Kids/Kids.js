import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import Card from '../Card/Card';
import Cards2 from '../Cards-2/Cards-2';
import './Kids.css';

const WhatWeDo = (props) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost/jemzoo/wp-json/wp/v2/posts?_embed&categories=8").then(function (jresponse) {
            if (jresponse.ok) {
                jresponse.json().then(function (json) {
                    setPosts(json);
                });
            } else {
                console.log("Error getting file " + jresponse.status + ": " + jresponse.statusText);
            }
        });
    }, []);


    return (

        <main className="kids">
            <Helmet>
                <title>Jem Zoo - Kid's Zone</title>
                <body className="kids-body" />
            </Helmet>
            <div id="kids-hero">
                <div id="kids-hero-main" className="kids-hero-card card">

                    <img src="images/kingfisher-square-fallback.jpg" alt="A kingfisher sitting on a branch."></img>

                    <div className="hero-text">
                        <h2>Learn how YOU can help wildlife!</h2>
                    </div>
                </div>
                <div className="kids-hero-group">
                    <div className="kids-hero-card card grow-rotate"><a href="/kids">
                        <div className="card-text">
                            <h3>Badger fact</h3>
                            <p>Badgers are nocturnal - this means they sleep in the daytime!</p>
                            <p>Click for more</p>
                        </div>
                    </a>
                    </div>
                    <div className="kids-hero-card card grow-rotate">
                        <a href="/kids">

                            <img src="images/badger-square-fallback.jpg" alt="A badger with one paw raised."></img>

                        </a>
                    </div>
                </div>
                <div className="kids-hero-group">
                    <div className="kids-hero-card card grow-rotate"><a href="/kids">
                        <div className="card-text">
                            <h3>Did you know...</h3>
                            <p>A group of foxes is called a skulk!</p>
                            <p>Click for more</p>
                        </div>
                    </a>
                    </div>
                    <div className="kids-hero-card card grow-rotate">
                        <a href="/kids">

                            <img src="images/fox-square-fallback.jpg" alt="A fox looking at the camera."></img>

                        </a>
                    </div>
                </div>
                <div className="kids-hero-group">
                    <div className="kids-hero-card card grow-rotate">
                        <a href="/kids">
                            <div className="card-text">
                                <p>There are an estimated 1,550,000 hedgehogs in Great Britain</p>
                                <p>Click for more</p>
                            </div>
                        </a>
                    </div>
                    <div className="kids-hero-card card grow-rotate">
                        <a href="/kids">

                            <img src="images/hedgehog-square-fallback.jpg"
                                alt="Close up shot of a hedgehog among leaves."></img>

                        </a>
                    </div>
                </div>
            </div>
            <Cards2>
                {posts.map((post, i) => (
                    <Card className="card" key={i} title={post.title.rendered} content={post.excerpt.rendered} image={post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} link="#" linkText="Read more" />
                ))}
            </Cards2>
        </main>
    )
};

export default WhatWeDo;