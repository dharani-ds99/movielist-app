import React from 'react'
import { useSelector } from 'react-redux'

const MovieStats = (props) => {

    const movies = useSelector((state) => {
        return state.movies
    })

    const topRank = movies.sort((a,b) => a.imdbRating - b.imdbRating).reverse()
    
    //displaying the no.of movies and top rated movie
    return (
        <div style={{width:'22%',display:'inline-block',float: 'right',position:'absolute',bottom:15,right:0,border:'2px solid',margin:'2%',padding:'2%',borderRadius:'2px',alignContent:'center',borderColor:'#6f42c1',backgroundColor:'#BFB9FA'}}>
            <h1>Movie Stats</h1>
            <h2>Total Movies - {movies.length}</h2>
            {topRank.length > 0 && <h3>Top Ranked Movie - {topRank[0].Title}</h3>}
        </div>
    )
}

export default MovieStats