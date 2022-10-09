import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import {RiErrorWarningLine} from 'react-icons/ri'
import { Title, Text, Item } from "./Reviews.styled";

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
    const { movieId } = useParams();
    
    
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
    console.log('response =>', response)


    return (<ul>
        {results.length !== 0
            ? results.map(({ id, author, content }) => {
                return (
                    <Item key={id}>
                        <Title>Author: {author}</Title>
                        <Text> { content}</Text>
                    </Item>
                    )
                })
            : <p> <RiErrorWarningLine/> Sorry, we haven`t reviews yet!</p>
        }
    </ul>)
}

export default Reviews;