import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";

const fetchCast = async (id) => {
    const API_KEY = '85df3ff8d6dde44e5fe9194c59be3b9a';
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
        if (response.ok) {
            return response.json();
            }
            return Promise.reject(new Error(`We have a problem`))
        }

const Cast = () => {

    const [response, setResponse] = useState(null)
    const {movieId} = useParams();
    
    useEffect(() => {
        fetchCast(Number(movieId))
            .then(setResponse)
            .catch(error => {
                Promise.reject(new Error(`${error.message}`))
            })
    },[movieId])

    console.log(movieId)

    if (!response) {
        return null
    }

    const { cast } = response
    console.log(response)

     const createProfileUrl = (profile_path) => {
        const posterUrl = profile_path
            ? `https://www.themoviedb.org/t/p/w500${profile_path}`
            : 'https://klike.net/uploads/posts/2020-02/1581672938_2.jpg'
        return posterUrl
    } 

    return (<ul>
        {cast.map(({profile_path, original_name, character}) =>{
        return (
            <li key={original_name}>
                <img src={createProfileUrl(profile_path)} alt={original_name} width='90'/>
                <p>{original_name}</p>
                <p> Character: { character}</p>
            </li>)})
        }
    </ul>)
}

export default Cast;