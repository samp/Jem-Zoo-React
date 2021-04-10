import React from 'react';
import './Home.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const home = (props) => {
    return (
        <main>
            <div class="cards-4">
                <div class="card">
                    <Link to="/animals" class="card-link-wrapper">
                        <picture>
                            <source srcset="images/giraffe-square-500.webp" />
                            <img src="images/giraffe-square-fallback.jpg" alt="A giraffe looks over a fence."></img>
                        </picture>

                        <div class="card-text">
                            <h3>Animals</h3>
                            <p>We have a large collection of animals from across the globe - click here to meet them!</p>
                        </div>
                    </Link>
                </div>

                <div class="card">
                    <a href="things-to-do.html" class="card-link-wrapper">
                        <picture>
                            <source srcset="images/garden-square-500.webp" />
                            <img src="images/garden-square-fallback.jpg"
                                alt="A group of people walk through a colourful garden."></img>
                        </picture>

                        <div class="card-text">
                            <h3>Events</h3>
                            <p>We have an array of fun events year-round for all members of the family. Click here to see
                            what's coming soon.</p>
                        </div>
                    </a>
                </div>
                <div class="card">
                    <a href="what-we-do.html" class="card-link-wrapper">
                        <picture>
                            <source srcset="images/owl-square-500.webp" />
                            <img src="images/owl-square-fallback.jpg" alt="A barn owl takes off from a tree branch."></img>
                        </picture>

                        <div class="card-text">
                            <h3>Conservation</h3>
                            <p>Jem Zoo is committed to providing a safe future for our planet, through research, education,
                            and breeding programs. Click here to to learn more about what we do.</p>
                        </div>
                    </a>
                </div>
                <div class="card">
                    <a href="tickets.html" class="card-link-wrapper">
                        <picture>
                            <source srcset="images/aquarium-square-500.webp" />
                            <img src="images/aquarium-square-fallback.jpg" alt="A family view a large aquarium."></img>
                        </picture>
                        <div class="card-text">
                            <h3>Membership</h3>
                            <p>Membership grants you unlimited entry to the zoo and exclusive behind the scenes info through
                            our Member's Magazine! Click here to learn more about being a member of Jem Zoo.</p>
                        </div>
                    </a>
                </div>
            </div>

            <div class="cards-2">
                <div class="card">
                    <picture>
                        <source srcset="images/ticket-square-500.webp" media="(min-width: 1200px)" />
                        <source srcset="images/ticket-wide-500.webp" />
                        <img src="images/ticket-square-fallback.jpg" alt="A hand holds up a ticket."></img>
                    </picture>

                    <div class="card-text">
                        <h3>Tickets</h3>
                        <div>
                            <p>Adult: £20</p>
                            <p>Child (2-16): £10</p>
                            <p>Concession: £15</p>
                            <p>Under 2s go free</p>
                        </div>
                        <a class="button" href="tickets.html">Buy tickets</a>
                    </div>

                </div>
                <div class="card">

                    <picture>
                        <source srcset="images/kids-square-500.webp" media="(min-width: 1200px)" />
                        <source srcset="images/kids-wide-500.webp" />
                        <img src="images/kids-square-fallback.jpg" alt="Three children stand next to each other."></img>
                    </picture>
                    <div class="card-text">
                        <h3>Kid's Zone</h3>
                        <p>Visit our kid's page to learn about how you can help wildlife in your garden!</p>
                        <a class="button" href="kids.html">Visit</a>
                    </div>

                </div>
            </div>

            <div class="cards-1">
                <div class="card">
                    <picture>
                        <source srcset="images/panda-750.webp" />
                        <img class="object-right" src="images/panda-fallback.jpg"
                            alt="Close up shot of Kenny the red panda"></img>
                    </picture>
                    <div class="card-text">
                        <h3>Animal Spotlight</h3>
                        <p class="headline">Meet our adorable red panda, <strong>Frankie</strong>!</p>
                        <p>Red pandas can live to be 15 years old, and weigh up to 6kg. A red panda's diet is mostly bamboo,
                        with fruit and eggs as a special treat. They are typically
                        solitary, only meeting other red pandas during the breeding season. </p>
                        <a class="button" href="animals.html">Meet more animals</a>
                    </div>
                </div>

                <div class="card">
                    <picture>
                        <source srcset="images/parrots-750.webp" />
                        <img src="images/parrots-fallback.jpg" alt="Two blue parrots look to the left."></img>
                    </picture>
                    <div class="card-text">
                        <h3>Donate</h3>
                        <p>Help us prevent extinction by donating to our zoo and conservation efforts. Your donation allows
                        us to care for our 200+ species, maintain our grounds, and contributes to our conservation
                        program. You can also choose to buy treats and toys for your favourite animals!</p>
                        <a class="button" href="tickets.html">Donate today</a>
                    </div>
                </div>
                <div class="card">
                    <picture>
                        <source srcset="images/deer-750.webp" />
                        <img src="images/deer-fallback.jpg" alt="A child feeds deer through a fence."></img>
                    </picture>

                    <div class="card-text">
                        <h3>Families</h3>
                        <p>Jem Zoo is proud to provide a family friendly environment. All of our pathways are wheelchair and
                        pushchair accessible, and we have a parents' room near the restaurant with microwave and baby
                        changing facilities. Both our cafe and restaurant are well-stocked with high chairs and sell
                        baby food.</p>
                        <p>We also have designated help points, clearly marked on our signs and maps, so that lost children
                        have a place to regroup.</p>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default home;
