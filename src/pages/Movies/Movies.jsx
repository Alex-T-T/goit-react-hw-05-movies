import { useState, useEffect} from "react"
import { useLocation } from "react-router-dom";

import MoviesSearch from "../../components/MoviesSearch/MoviesSearch";
import { useSearchParams } from "react-router-dom";
import { Dna } from 'react-loader-spinner';
import { NavItem, Container, DefaultDiv } from "./Movies.styled";
import { toast } from "react-toastify";
import { getSearchMovies } from "utils";

const Movies = () => {
    const [movies, setMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSearch, setIsSearch] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const location = useLocation();

    useEffect(() => {

        if (query === '' || query === null) {
            return
        }
        setIsSearch(false);
        setIsLoading(true);
        
        getSearchMovies(query)
            .then((response) => {
                setMovies(response);
                
                setIsLoading(false);
                
            })
            .catch(error => {
                Promise.reject(new Error(`${error.message}`))
            })
    }, [query])

        const onFormSubmit = (searchValue) => {
            if (searchValue === query) {
            toast.error(`We have already found "${query}"! Please, enter new search value`)
        return
        }
        setSearchParams(searchValue !== '' ? { query: searchValue } : {})
    }

    return (
        <Container>
            <MoviesSearch onFormSubmit={onFormSubmit} value={query} />
            {isLoading && <div>
                <p>Loading... Please wait</p> 
                    <Dna/> 
            </div>}
            {isSearch && <DefaultDiv>Find a great film and relax</DefaultDiv>}
            <div>
                {movies && <ul>
                {movies.results.length !== 0
                    ? movies.results.map(({ id, title }) => {
                        return <li key={id}><NavItem to={`${id}`} state={{from: location}} end> {title }</NavItem></li>
                    })
                    : <p>Change your request</p>}
                </ul>}
            </div>
        </Container>
    )
}


export default Movies;