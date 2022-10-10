import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import {RiErrorWarningLine} from 'react-icons/ri'
import { Title, Text, Item } from "./Reviews.styled";
import { getRewiews } from "utils";
import  PropTypes  from 'prop-types';


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

    // console.log(movieId)

    if (!response) {
        return null
    }

    const { results } = response
    // console.log('response =>', response)

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

Reviews.propTypes = {
    movieId: PropTypes.string,
    response: PropTypes.shape({
        results: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                author: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired,
            })
        )
    })
}