import { useState, useEffect, Suspense } from "react";
import { Outlet, useParams, useLocation} from "react-router-dom";
import { TiArrowBack } from 'react-icons/ti'
import { Container, NavItem, Wrapper, Title, Text, AdditionalLinks } from "./MovieDetails.styled";
import { format } from 'date-fns'

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
    const { movieId } = useParams();
    const location = useLocation();

        
    useEffect(() => {
        fetchMovieById(Number(movieId))
            .then(setMovie)
        .catch(error => {
        Promise.reject(new Error(`${error.message}`))
    } )
    }, [movieId])

    const { title, poster_path, vote_average, overview, genres, release_date } = movie;
   
    const createPosterUrl = (poster_path) => {
        const posterUrl = poster_path
            ? `https://www.themoviedb.org/t/p/w500${poster_path}`
            : 'https://klike.net/uploads/posts/2020-02/1581672920_6.jpg'
        return posterUrl
    } 

    const FormatedDate = (date) => {
        const finalDate = date
            ? `(${format(new Date(date), 'yyyy')})`
            : '';
        return finalDate;
    };

    const date = FormatedDate(release_date)

    const formatUserScore = (value) => {
        const transformValue = (value * 10).toFixed(0); 
        const userScore = value
            ? `${transformValue}%`
            : 'There is no user scores.';
        return userScore
    }

    const userScores = formatUserScore(vote_average)

    console.log("FormatedDate =>", date);

    return (
        <>
            <NavItem to={location.state?.from ?? '/movies'} end> <TiArrowBack/>Go Back</NavItem>
            <Container>
                <img src={createPosterUrl(poster_path)} alt={ title} width='240'/>
                <Wrapper>
                <Title>{title} {date}</Title>
                <Text> User score: {userScores}</Text>
                <Title> Overview </Title>
                <Text>{overview}</Text>
                <Title> Genres </Title>
                {genres && <Text>{ genres.map(({name}) => name ).join(', ')}</Text>}
                </Wrapper>
            </Container>
            <AdditionalLinks>
                <NavItem to="cast" state={{from: location.state?.from ?? '/movies'}} end> Cast</NavItem>
                <NavItem to="reviews" state={{from: location.state?.from ?? '/movies'}} end> Review</NavItem>
            </AdditionalLinks>

            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </>
    )
}

export default MovieDetails;