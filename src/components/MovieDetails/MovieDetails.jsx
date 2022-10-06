import { useState, useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";


const fetchMovieById = async (id) => {
    const API_KEY = '85df3ff8d6dde44e5fe9194c59be3b9a';
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        if (response.ok) {
            return response.json();
            }
            return Promise.reject(new Error(`We have a problem`))
        }

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const {movieId} = useParams();
        
    useEffect(() => {
        
        fetchMovieById(movieId)
            .then(setMovie)
        .catch(error => {
        Promise.reject(new Error(`${error.message}`))
    } )
    }, [movieId])

    const { title, poster_path, popularity, overview, genres } = movie;
   
    const createPosterUrl = (poster_path) => {
        const posterUrl = poster_path
            ? `https://www.themoviedb.org/t/p/w500${poster_path}`
            : 'https://klike.net/uploads/posts/2020-02/1581672920_6.jpg'
        return posterUrl
    } 


console.log("genres =>", genres)

    return (
        <>
            <img src={createPosterUrl(poster_path)} alt={ title} width='240'/>
            <h2>{title}</h2>
            <p>{popularity}</p>
            <h2> Overview </h2>
            <p>{overview}</p>
            <h2> Genres </h2>
            {genres && <p>{ genres.map(({name}) => name ).join(', ')}</p>}

            <ul>
            <NavLink to="cast" > Cast</NavLink>
            <NavLink to="reviews" > Review</NavLink>
            </ul>
            <Outlet/>
        </>
    )
}

export default MovieDetails;