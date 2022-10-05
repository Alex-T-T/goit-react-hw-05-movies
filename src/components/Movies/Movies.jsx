import { useState} from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MoviesSearch from "./MoviesSearch";
import { useSearchParams } from "react-router-dom";

// styles for NavLink
const NavItem = styled(NavLink)`
display: block;
width: 300px;
padding: 8px;
border-radius: 4px;
text-decoration: none;
color: #000;

    :hover,
    :focus-visible {
        color: #fff;
        background: linear-gradient(to right, #1488cc, #2b32b2);
    }
`


// Fetch to search movies
const fetchSearchMovies = async (searchQuery) => {
    const API_KEY = '85df3ff8d6dde44e5fe9194c59be3b9a';
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${API_KEY}`)
        if (response.ok) {
            return response.json();
            }
            return Promise.reject(new Error(`We have a problem`))
        }


const Movies = () => {

    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const onFormSubmit = (value) => {
        
        setSearchParams(value !== '' ? { query: value } : {})

        fetchSearchMovies(value)
            .then(setMovies)
    }

    return (
        <>
        <MoviesSearch onFormSubmit={ onFormSubmit} />

        {movies && <ul>
            {movies.results.map(({id, title}) => {
                return <li key={id}><NavItem to={`${id}`} end> {title }</NavItem></li>
            })}
            </ul>}
            
        </>
    )
}

export default Movies;