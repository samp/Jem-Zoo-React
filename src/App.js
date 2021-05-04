import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './Navigation/Navigation'
import Home from './Home/Home'
import Animals from './Animals/Animals'
import Tickets from './Tickets/Tickets'
import ThingsToDo from './Things-To-Do/Things-To-Do'
import WhatWeDo from './What-We-Do/What-We-Do'
import Footer from './Footer/Footer'
import Kids from './Kids/Kids'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App() {
    const [zoodata, setZooData] = useState([]);
    useEffect(() => {
        fetch("jemzoo.json").then(function (jresponse) {
            if (jresponse.ok) {
                jresponse.json().then(function (json) {
                    setZooData(json);
                });
            } else {
                console.log("Error getting file " + jresponse.status + ": " + jresponse.statusText);
            }
        });
    }, []);
    
    return (
        <div className="App">

            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/">
                        <Home zoodata={zoodata}/>
                    </Route>
                    <Route path="/animals">
                        <Animals />
                    </Route>
                    <Route path="/things-to-do">
                        <ThingsToDo />
                    </Route>
                    <Route path="/what-we-do">
                        <WhatWeDo />
                    </Route>
                    <Route path="/tickets">
                        <Tickets zoodata={zoodata} />
                    </Route>
                    <Route path="/kids">
                        <Kids />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
