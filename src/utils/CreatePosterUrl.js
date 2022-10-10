
export const CreatePosterUrl = (poster_path) => {
        const posterUrl = poster_path
            ? `https://www.themoviedb.org/t/p/w500${poster_path}`
            : 'https://klike.net/uploads/posts/2020-02/1581672920_6.jpg'
        return posterUrl
    } 