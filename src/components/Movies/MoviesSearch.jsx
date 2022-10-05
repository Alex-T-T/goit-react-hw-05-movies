import { useState } from "react";

const MoviesSearch = ({onFormSubmit}) => {
const [searchQuery, setSearchQuery] = useState('');

const handleChange = (event) => {
        console.log(event.target.value)

        if (event.target.value.trim() === '') {
            return
        }
        
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
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    name="value"
                    value={searchQuery}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Search</button>
        </form>
}

export default MoviesSearch;