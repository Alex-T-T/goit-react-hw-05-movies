import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import { Container } from "./Cast.styled";
import { CreateProfileUrl, getCast } from "utils";
import  PropTypes  from 'prop-types';


const Cast = () => {
    const [response, setResponse] = useState(null)
    const {movieId} = useParams();
    
    useEffect(() => {
        getCast(Number(movieId))
            .then(setResponse)
            .catch(error => {
                Promise.reject(new Error(`${error.message}`))
            })
    },[movieId])

    // console.log(movieId)

    if (!response) {
        return null
    }

    const { cast } = response
    // console.log(response)

    return (<Container>
        {cast.length !== 0 ? cast.map(({id, profile_path, original_name, character}) =>{
        return (
            <li key={id}>
                <img src={CreateProfileUrl(profile_path)} alt={original_name} width='90'/>
                <p>{original_name}</p>
                <p> Character: { character}</p>
                </li>)
        })
            : <p>We haven't info about cast!</p>
        }
    </Container>)
}

export default Cast;

Cast.propTypes = {
    movieId: PropTypes.string,
    response: PropTypes.shape({
        cast: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                profile_path: PropTypes.string.isRequired,
                original_name: PropTypes.string.isRequired,
                character: PropTypes.string.isRequired,
            })
      )
    })
}