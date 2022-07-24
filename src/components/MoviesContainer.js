import React from 'react' 
import MovieForm from './MovieForm'
import MoviesList from './MoviesList'
import MovieStats from './MovieStats'

const MoviesContainer = (props) => {
    
    return (
        <div>
            <MoviesList />
            <MovieForm />
            <MovieStats />
        </div>
    )
}

export default MoviesContainer