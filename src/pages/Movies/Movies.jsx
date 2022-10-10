import { useState, useEffect} from "react"
import { useLocation } from "react-router-dom";

import MoviesSearch from "../../components/MoviesSearch/MoviesSearch";
import { useSearchParams } from "react-router-dom";
import { Dna } from 'react-loader-spinner';
import { NavItem, Container } from "./Movies.styled";
import { toast } from "react-toastify";
import { getSearchMovies } from "utils";

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

        getSearchMovies(value)
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
        toast.error("Enter new search value!");
        return
        }
        setValue(searchValue)
        setMovies(null)
        setSearchParams(searchValue !== '' ? { query: searchValue } : {})
    }

    return (
        <Container>
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
        </Container>
    )
}

export default Movies;