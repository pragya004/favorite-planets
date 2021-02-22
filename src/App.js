import React, {useState} from "react"
import './App.css';
import Container from "react-bootstrap/Container"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Planet from "./Components/Planet";
import Favorites from "./Components/Favorites";
import {FavPlanetProvider} from "./Contexts/FavPlanetContext"
import {PlanetProvider} from "./Contexts/PlanetContext"

function App() {

    return (
        <PlanetProvider>
        <FavPlanetProvider>
            <div className="d-flex justify-content-start mt-5 flex-column" style={{width:"100%", height:"80%"}}>
                <Container className="p-0 w-75" style={{backgroundColor:"white"}}>
                    <Tabs
                    id="planets-tab"
                    defaultActiveKey="planets"
                    
                    >
                        <Tab eventKey="planets"  title="Planets" className="border-left border-right border-bottom p-4">
                            <Planet />
                        </Tab>
                        <Tab eventKey="favorites" title="Favorites"  className=" border-left border-right border-bottom  p-4">
                            <Favorites />
                        </Tab>
                    </Tabs>
                </Container>
                
            </div>
        </FavPlanetProvider>
        </PlanetProvider>
        
    )

}

export default App;
