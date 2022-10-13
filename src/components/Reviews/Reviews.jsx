import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import {RiErrorWarningLine} from 'react-icons/ri'
import { Title, Text, Item } from "./Reviews.styled";
import { getRewiews } from "utils";


const Reviews = () => {

    const [response, setResponse] = useState(null)
    const { movieId } = useParams();
    
    useEffect(() => {
        getRewiews(Number(movieId))
            .then(setResponse)
            .catch(error => {
                Promise.reject(new Error(`${error.message}`))
            })
    },[movieId])

    if (!response) {
        return null
    }

    const { results } = response

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