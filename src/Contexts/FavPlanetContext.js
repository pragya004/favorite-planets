import React,{useState, createContext} from "react"

export const FavPlanetContext = createContext();

export const FavPlanetProvider = props => {
    const [favPlanets, setFavPlanets] = useState(null);

    return(
        <FavPlanetContext.Provider value={[favPlanets,setFavPlanets]}>
            {props.children}
        </FavPlanetContext.Provider>
    )

}