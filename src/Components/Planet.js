import React,{useState, useEffect, useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import {FavPlanetContext} from "../Contexts/FavPlanetContext"
import {PlanetContext} from "../Contexts/PlanetContext"


export default function Planet() {
    const [favPlanets, setFavPlanets] = useContext(FavPlanetContext)
    const [planets, setPlanets] = useContext(PlanetContext)

    async function getPlanets(){
        const data = await fetch("https://assignment-machstatz.herokuapp.com/planet");
        const json = await data.json()
        setPlanets(json)
    }

    useEffect(() => {
        getPlanets()
    }, [])

    function handleClick(idx,e){

        let flag = 0
        const planetPassed = planets.filter(item => item.id === idx)
    
        if(favPlanets){
            favPlanets.map( planet => {
                if(planet === planetPassed[0].name){
                    flag = 1
                    removeFavPlanet(planetPassed[0].name)
                    if(e.target.parentElement.className === "heartu"){

                        e.target.style.fill = "black"
                    }
                    else{
                        e.target.parentElement.style.fill = "black"
                    }
                    
                }
            })
            if(flag === 0){
                setFavPlanets( prevState => {
                        return [...prevState, planetPassed[0].name]
                })


                if(e.target.parentElement.className === "heartu"){
                    e.target.style.fill = "blue"
                }
                else{
                    e.target.parentElement.style.fill = "blue"
                }
                
            }
        }
        else{
            setFavPlanets([planetPassed[0].name])
            if(e.target.parentElement.className === "heartu"){
                e.target.style.fill = "blue"
            }
            else{
                e.target.parentElement.style.fill = "blue"
            }
        }
        
    }

    function removeFavPlanet(planetToRemove){
        const newPlanets = favPlanets.filter(planet => planet !== planetToRemove)
        setFavPlanets(newPlanets)
    }

    return ( 
               (planets ? ( planets.length === 0 ? <div>No data received</div> :
                    <Container fluid className="d-flex flex-row flex-wrap">
                        {
                            planets.map( planet => (
                                <Card key={planet.id} className="m-2 p-2" style={{minWidth:"200px"}}>
                                    <Card.Body className=" d-flex justify-content-between">
                                        <Card.Text className="p-0 m-0">{planet.name}</Card.Text>
                                        <div className = "heartu" >
                                            <svg onClick={(e) => handleClick(planet.id,e)} id={planet.id} xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                            </svg>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))
                        } 
                    </Container>
                ) : <div className="d-flex justify-content-center"><Spinner animation="grow" /></div>)
        )
}
