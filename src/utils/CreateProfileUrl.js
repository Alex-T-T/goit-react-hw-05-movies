
export const CreateProfileUrl = (profile_path) => {
        const posterUrl = profile_path
            ? `https://www.themoviedb.org/t/p/w500${profile_path}`
            : 'https://klike.net/uploads/posts/2020-02/1581672938_2.jpg'
        return posterUrl
    } 