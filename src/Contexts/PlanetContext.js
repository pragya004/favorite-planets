import React,{useState, createContext} from "react"

export const PlanetContext = createContext();

export const PlanetProvider = props => {
    const [planets, setPlanets] = useState(null);

    return(
        <PlanetContext.Provider value={[planets, setPlanets]}>
            {props.children}
        </PlanetContext.Provider>
    )
}