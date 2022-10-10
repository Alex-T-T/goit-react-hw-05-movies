
const API_KEY = '85df3ff8d6dde44e5fe9194c59be3b9a';
const BASE_URL = 'https://api.themoviedb.org/3/';


    
    export const getTrendMovies = async () => {
    const response = await fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
        if (response.ok) {
            return response.json();
            }
            return Promise.reject(new Error(`We have a problem`))
    }
    
    export const getSearchMovies = async (searchQuery) => {
    const response = await fetch(`${BASE_URL}search/movie?query=${searchQuery}&api_key=${API_KEY}`)
        if (response.ok) {
            return response.json();
            }
            return Promise.reject(new Error(`We have a problem`))
    }
        
    export const getMovieById = async (id) => {
        const response = await fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`)
        if (response.ok) {
            return response.json();
            }
            return Promise.reject(new Error(`We have a problem`))
        }

    export const getCast = async (id) => {
        const response = await fetch(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`)
        if (response.ok) {
            return response.json();
            }
            return Promise.reject(new Error(`We have a problem`))
    }
        
    export const getRewiews = async (id) => {
        const response = await fetch(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`)
        if (response.ok) {
            return response.json();
            }
            return Promise.reject(new Error(`We have a problem`))
        }