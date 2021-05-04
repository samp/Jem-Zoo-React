import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Cards2 from '../Cards-2/Cards-2';
import Helmet from "react-helmet";
import '../jemzoo.json';

const Tickets = (props) => {
    return (
        <main>
            <Helmet>
                <title>Jem Zoo - Tickets</title>
            </Helmet>
            <Cards2>
                <Card title="Tickets" content={"<p>Adult: £" + props.zoodata.adult + "</p><p>Child (2-16): £" + props.zoodata.child + "</p><p>Concession: £" + props.zoodata.concession + "</p><p>Under 2s go free</p><p>Save up to 20% by booking ahead!</p>"} image="images/ticket-square-fallback.jpg" link="#" linkText="Book now" />
                <Card title="Brochures, Tours  More" content="<p>You can buy guides, maps, and food for the petting zoo on-site at our gift shop. Prices start from £2.50.</p>
                        <p>Guided tours start at £10 per person. These can be purchased at the front gate or when booking your ticket.</p>" image="images/garden-square-fallback.jpg" />
                <Card title="Donate" content="<p>Donate more than £5 and you can choose your favourite animal to recieve a special treat!</p>" image="images/lion-square-fallback.jpg" link="#" linkText="Donate" />
                <Card title="Membership" content="<p>Our membership starts at £60 a year per person and grants unlimited entry to the zoo, discounted prices on tours, events, 
                        and gifts, and a quarterly member's magazine with exclusive behind-the-scenes info from Jem Zoo.</p>" image="images/aquarium-square-fallback.jpg" link="#" linkText="Sign up today" />
            </Cards2>
        </main>
    )
};

export default Tickets;