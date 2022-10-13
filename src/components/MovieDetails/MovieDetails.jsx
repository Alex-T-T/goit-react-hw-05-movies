import { useState, useEffect, Suspense } from "react";
import { Outlet, useParams, useLocation} from "react-router-dom";
import { TiArrowBack } from 'react-icons/ti'
import { Container, NavItem, Wrapper, Title, Text, AdditionalLinks } from "./MovieDetails.styled";
import { FormatDate, FormatUserScore, CreatePosterUrl, getMovieById } from "utils";


const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();
    const location = useLocation();

    useEffect(() => {
        getMovieById(Number(movieId))
            .then(setMovie)
            .catch(error => {
            Promise.reject(new Error(`${error.message}`))
    } )
    }, [movieId])

    const { title, poster_path, vote_average, overview, genres, release_date } = movie;
    const posterUrl = CreatePosterUrl(poster_path);
    const date = FormatDate(release_date);
    const userScores = FormatUserScore(vote_average);

    return (
        <>
            <NavItem to={location.state?.from ?? '/movies'} end> <TiArrowBack/>Go Back</NavItem>
            <Container>
                <img src={posterUrl} alt={ title} width='240'/>
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
