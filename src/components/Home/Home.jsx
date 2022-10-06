import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


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

const fetchMovies = async () => {
    const API_KEY = '85df3ff8d6dde44e5fe9194c59be3b9a';
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
        if (response.ok) {
            return response.json();
            }
            return Promise.reject(new Error(`We have a problem`))
        }



const Home = () => {
    const [ movies, setMovies ] = useState(null)


    useEffect(() => {
        
        fetchMovies()
            .then(setMovies)
        .catch(error => {
        Promise.reject(new Error(`${error.message}`))
    } )
    }, [])
    
    return (
        // console.log(movies)
        movies && <ul>
            {movies.results.map(({id, title}) => {
                return <li key={id}> <NavItem to={`movies/${id}`}>{title }</NavItem></li>
            })}
        </ul>
    )
}


export default Home;