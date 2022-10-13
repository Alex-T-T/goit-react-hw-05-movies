
import { Input, SearchBtn } from './MoviesSearch.styled'
import { toast } from "react-toastify";
import PropTypes from 'prop-types';


const MoviesSearch = ({onFormSubmit, value}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.elements.search.value.trim() === '') {
            toast.error('Enter search value')
            return
        } 
        onFormSubmit(form.elements.search.value)
        
    }


    return <>
        <form onSubmit={handleSubmit}>
            <label>
                <Input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    name='search'
                    defaultValue={value}
            
                />
            </label>
            <SearchBtn type="submit">Search</SearchBtn>
    </form>

    </>
}


export default MoviesSearch;

MoviesSearch.propTypes = {
    onFormSubmit: PropTypes.func,
}