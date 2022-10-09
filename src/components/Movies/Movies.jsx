import { useState, useEffect} from "react"
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import MoviesSearch from "./MoviesSearch";
import { useSearchParams } from "react-router-dom";
import { Dna } from 'react-loader-spinner';

// import {TiArrowBack} from 'react-icons/ti'

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

    const [movies, setMovies] = useState(JSON.parse(window.localStorage.getItem('movies')) ?? null);
    // const [movies, setMovies] = useState(null);

    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const filter = searchParams.get('query') ?? '';
    console.log('filter =>', filter);

    useEffect(() => {
        
        // console.log(movies)
        // console.log('Refresh movies')
        window.localStorage.setItem('movies', JSON.stringify(movies))

    }, [movies])

    useEffect(() => {
        if (value === '') {
            return
        }

        setIsLoading(true);

        fetchSearchMovies(value)
            .then((response) => {
                setMovies(response)
                setIsLoading(false)
            })
            .catch(error => {
                Promise.reject(new Error(`${error.message}`))
            })
    }, [value])

    const onFormSubmit = (searchValue) => {
            if (searchValue === value) {
        alert("Enter new search value!");
        return
        }
        setValue(searchValue)
        setMovies(null)
        setSearchParams(searchValue !== '' ? { query: searchValue } : {})
    }

    return (
        <>
            <MoviesSearch onFormSubmit={ onFormSubmit} />
            {isLoading && <div>
                <p>Loading... Please wait</p> 
                    <Dna/> 
            </div>}
            {movies && <ul>
                {movies.results.length !== 0
                    ? movies.results.map(({ id, title }) => {
                        return <li key={id}><NavItem to={`${id}`} state={{from: location}} end> {title }</NavItem></li>
                    })
                    : <p>Change your request</p>}
                </ul>}
        </>
    )
}

export default Movies;