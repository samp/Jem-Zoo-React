import React from 'react';
import './Home.css';
import Hero from '../Hero/Hero'
import Card from '../Card/Card';
import Cards4 from '../Cards-4/Cards-4';
import Cards2 from '../Cards-2/Cards-2';
import Cards1 from '../Cards-1/Cards-1';

const home = (props) => {
    return (
        <div>
            <Hero />
            <main>
                <Cards4>
                    <Card title="Animals" content="<p>We have a large collection of animals from across the globe!</p>" 
                        image="images/giraffe-square-fallback.jpg" link="/animals" linkText="Meet the animals"/>
                    <Card title="Events" content="<p>We have an array of fun events year-round for all members of the family.</p>" image="images/garden-square-fallback.jpg" link="/things-to-do" 
                        linkText="See events"/>
                    <Card title="Conservation" content="<p>Jem Zoo is committed to providing a safe future for our planet, through 
                        research, education, and breeding programs.</p>" 
                        image="images/owl-square-fallback.jpg" link="/what-we-do" linkText="Learn more"/>
                    <Card title="Membership" content="<p>Membership grants you unlimited entry to the zoo and exclusive behind the 
                        scenes info through our Member's Magazine!</p>"
                        image="images/aquarium-square-fallback.jpg" link="/tickets" linkText="Join today"/>
                </Cards4>

                <Cards2>
                    <Card title="Tickets" content="<div>
                                <p>Adult: £20</p>
                                <p>Child (2-16): £10</p>
                                <p>Concession: £15</p>
                                <p>Under 2s go free</p>
                            </div>" image="images/ticket-square-fallback.jpg" link="/tickets" linkText="Buy Tickets"/>
                    
                    <Card title="Kid's Zone" content="<p>Visit our kid's page to learn about how you can help wildlife in your garden!</p>" 
                        image="images/kids-square-fallback.jpg" link="/kids" linkText="Visit"/>
                </Cards2>

                <Cards1>
                    <Card title="Animal Spotlight" content="<p className='headline'>Meet our adorable red panda, <strong>Frankie</strong>!</p>
                        <p>Red pandas can live to be 15 years old, and weigh up to 6kg. A red panda's diet is mostly bamboo, with fruit 
                        and eggs as a special treat. They are typically solitary, only meeting other red pandas during the breeding 
                        season.</p>" image="images/panda-fallback.jpg" link="/animals" linkText="Meet more animals"/>

                    <Card title="Donate" content="<p>Help us prevent extinction by donating to our zoo and conservation efforts. Your 
                        donation allows us to care for our 200+ species, maintain our grounds, and contributes to our conservation
                        program. You can also choose to buy treats and toys for your favourite animals!</p>" 
                        image="images/parrots-fallback.jpg" link="/tickets" linkText="Donate Today" />
                 
                    <Card title="Families" content="<p>Jem Zoo is proud to provide a family friendly environment. All of our pathways 
                        are wheelchair and pushchair accessible, and we have a parents' room near the restaurant with microwave and baby
                        changing facilities. Both our cafe and restaurant are well-stocked with high chairs and sell baby food.</p>
                        <p>We also have designated help points, clearly marked on our signs and maps, so that lost children have a place 
                        to regroup.</p>" image="images/deer-fallback.jpg" />
                </Cards1>
            </main>
        </div>
    )
};

export default home;
