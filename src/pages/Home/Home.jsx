import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Dna } from 'react-loader-spinner';
import { NavItem, Container } from "./Home.styled";
import { getTrendMovies } from "utils";

const Home = () => {
    const [movies, setMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation();

    useEffect(() => {
        
        setIsLoading(true)

        getTrendMovies()
            .then((response) => {
                setMovies(response);
                setIsLoading(false);
            })
        .catch(error => {
        Promise.reject(new Error(`${error.message}`))
    } )
    }, [])
    
    return (
        <Container>
            {isLoading && <div>
                <p>Loading... Please wait</p> 
                    <Dna/> 
            </div>}
            {movies && <ul>
            {movies.results.map(({id, title}) => {
                return <li key={id}> <NavItem to={`movies/${id}`}  state={{from: location}}>{title }</NavItem></li>
            })}
        </ul>}
        </Container>
    )
}


export default Home;