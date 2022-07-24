import React from 'react'
import { useDispatch } from 'react-redux'
import { removeMovie } from '../actions/moviesAction'


const MovieCard = (props) => {
    const { Title, Poster, imdbRating, imdbID } = props
    const dispatch = useDispatch()

    return (
        <div className="card mt-2 p-2 bd-highlight border shadow rounded" style={{ width: '16rem' }}>
            <img className="card-img-left pt-2" src={Poster} alt={Title} style={{ width: '200px', height: '200px' }} />
            <div className="card-body">
                <h4 className="card-title">Name : {Title}</h4>
                <h5 className="card-title">Ranking : #{imdbRating}</h5>
                <ion-icon name="trash" style={{ color: 'red' }} onClick={() => {
                    dispatch(removeMovie(imdbID))
                }}>
                </ion-icon>
            </div>
        </div>
        

    )
}

export default MovieCard