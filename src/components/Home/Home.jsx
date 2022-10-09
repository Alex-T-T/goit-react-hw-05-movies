import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Dna } from 'react-loader-spinner';
import { NavItem, Container } from "./Home.styled";

const fetchMovies = async () => {
    const API_KEY = '85df3ff8d6dde44e5fe9194c59be3b9a';
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
        if (response.ok) {
            return response.json();
            }
            return Promise.reject(new Error(`We have a problem`))
        }

const Home = () => {
    const [movies, setMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation();

    useEffect(() => {
        
        setIsLoading(true)

        fetchMovies()
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