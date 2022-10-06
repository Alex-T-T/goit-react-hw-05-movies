import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";

const fetchRewiews = async (id) => {
    const API_KEY = '85df3ff8d6dde44e5fe9194c59be3b9a';
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`)
        if (response.ok) {
            return response.json();
            }
            return Promise.reject(new Error(`We have a problem`))
        }

const Reviews = () => {

    const [response, setResponse] = useState(null)
    const {movieId} = useParams();
    
    useEffect(() => {
        fetchRewiews(Number(movieId))
            .then(setResponse)
            .catch(error => {
                Promise.reject(new Error(`${error.message}`))
            })
    },[movieId])

    console.log(movieId)

    if (!response) {
        return null
    }

    const { results } = response
    console.log(response)


    return (<ul>
        {results.map(({id, author, content}) =>{
        return (
            results ? <li key={id}>
                <p>Author: {author}</p>
                <p> { content}</p>
                </li>
            : <p>Sorry, reviews aren`t leave</p>)
        })
        }
    </ul>)
}

export default Reviews;