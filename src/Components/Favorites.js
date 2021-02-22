import React,{useContext, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import {FavPlanetContext} from "../Contexts/FavPlanetContext"
import {PlanetContext} from "../Contexts/PlanetContext"

export default function Favorites() {
    
    const [favPlanets, setFavPlanets] = useContext(FavPlanetContext)
    const [planets, setPlanets] = useContext(PlanetContext)


    function handleClick(planetToRemove){
        const newPlanets = favPlanets.filter(planet => planet !== planetToRemove.planet)
        setFavPlanets(newPlanets)
        let idx;
        planets.map(planet => {
            if(planet.name === planetToRemove.planet){
                idx = planet.id;
            }
        })
        document.getElementById(idx).style.fill = "black"
    }
    
    return (
        (favPlanets ? (favPlanets.length === 0 ? <div className="d-flex justify-content-center">No favorites to display</div> :
            <Container fluid className="d-flex flex-row flex-wrap">
                        {
                            favPlanets.map( (planet,idx) => (
                                <Card key={idx} className="m-2 p-2" style={{minWidth:"200px"}}>
                                    <Card.Body className=" d-flex justify-content-between">
                                        <Card.Text className="p-0 m-0">{planet}</Card.Text>
                                        <div className = "closeu" >
                                            <svg onClick={() => handleClick({planet})} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                            </svg>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))
                        } 
            </Container> ) : <div className="d-flex justify-content-center">No favorites to display</div>)
    )
}