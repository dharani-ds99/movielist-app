import axios from 'axios'

export const startGetMovie = (movieName) => {
    let movie = movieName.toLowerCase().trim()
    return ((dispatch) => {
        axios.get(`https://www.omdbapi.com/?t=${movie}&apikey=c7af133`)
            .then(res => {
                const result=res.data 
                dispatch(addMovie(result))
            })
            .catch(err => console.log(err.message))
    })
    
}

export const addMovie = (movieName) => {
    return {
        type:'ADD_MOVIE',
        payload:movieName
    }
}

export const removeMovie = (id) => {
    //console.log(id)
    return {
        type:'REMOVE_MOVIE',
        payload:id
    }
}