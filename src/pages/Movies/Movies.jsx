import { useState, useEffect} from "react"
import { useLocation } from "react-router-dom";

import MoviesSearch from "../../components/MoviesSearch/MoviesSearch";
import { useSearchParams } from "react-router-dom";
import { Dna } from 'react-loader-spinner';
import { NavItem, Container } from "./Movies.styled";
import { toast } from "react-toastify";
import { getSearchMovies } from "utils";

// const Movies = () => {

//     // const [movies, setMovies] = useState(JSON.parse(window.localStorage.getItem('movies')) ?? null);
//     const [movies, setMovies] = useState(null);

//     const [value, setValue] = useState('');
    // const [isLoading, setIsLoading] = useState(false);
//     const [searchParams, setSearchParams] = useSearchParams();
//     const location = useLocation();
//     const filter = searchParams.get('query') ?? '';
//     console.log('filter =>', filter);

    // useEffect(() => {
    //     if (value === '') {
    //         return
    //     }

    //     setIsLoading(true);

    //     getSearchMovies(value)
    //         .then((response) => {
    //             setMovies(response)
    //             setIsLoading(false)

    //         })
    //         .catch(error => {
    //             Promise.reject(new Error(`${error.message}`))
    //         })
    // }, [value])

    // const onFormSubmit = (searchValue) => {
    //     console.log(searchValue)
    //         if (searchValue === value) {
    //     toast.error("Enter new search value!");
    //     return
    //     }
    //     setValue(searchValue)
    //     console.log(searchValue)
    //     console.log(value)
    //     // setMovies(null)
    //     setSearchParams(searchValue !== '' ? { query: searchValue } : {})
    //     console.log(searchParams)
    // }

//     return (
//         <Container>
//             <MoviesSearch onFormSubmit={onFormSubmit} searchValue={filter} />
//             {isLoading && <div>
//                 <p>Loading... Please wait</p> 
//                     <Dna/> 
//             </div>}
//             {movies && <ul>
//                 {movies.results.length !== 0
//                     ? movies.results.map(({ id, title }) => {
//                         return <li key={id}><NavItem to={`${id}`} state={{from: location}} end> {title }</NavItem></li>
//                     })
//                     : <p>Change your request</p>}
//                 </ul>}
//         </Container>
//     )
// }

const Movies = () => {
    const [movies, setMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const location = useLocation();

    useEffect(() => {

        console.log('query =>', query)
        if (query === '' || query === null) {
            return
        }
        console.log('query =>', query)

        setIsLoading(true);

        getSearchMovies(query)
            .then((response) => {
                setMovies(response)
                setIsLoading(false)

            })
            .catch(error => {
                Promise.reject(new Error(`${error.message}`))
            })
    }, [query])

        const onFormSubmit = (searchValue) => {
            console.log(searchValue)
            console.log(query)
            if (searchValue === query) {
            toast.error(`We have already found "${query}"! Please, enter new search value`)
        return
        }
        setSearchParams(searchValue !== '' ? { query: searchValue } : {})
        // console.log(searchParams)
    }

    return (
        <Container>
            <MoviesSearch onFormSubmit={onFormSubmit} value={query} />
            {isLoading && <div>
                <p>Loading... Please wait</p> 
                    <Dna/> 
            </div>}
            {/* <img src="../../image/cinema.jpg" alt="cinema" width="100%"/> */}
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