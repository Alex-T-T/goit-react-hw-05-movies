import { useState } from "react";
import { Input, SearchBtn } from './MoviesSearch.styled'

const MoviesSearch = ({onFormSubmit}) => {
const [searchQuery, setSearchQuery] = useState('');

const handleChange = (event) => {
    console.log('event.target.value =>', event.target.value)

    setSearchQuery(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if (searchQuery.trim() === '') {
            alert('Enter search value')
            return
        } 

        onFormSubmit(searchQuery)

        resetForm();
    }
        

    const resetForm = () => {
        setSearchQuery('');
    }

    return <form onSubmit={handleSubmit}>
            <label>
                <Input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    name="value"
                    value={searchQuery}
                    onChange={handleChange}
                />
            </label>
            <SearchBtn type="submit">Search</SearchBtn>
        </form>
}

export default MoviesSearch;