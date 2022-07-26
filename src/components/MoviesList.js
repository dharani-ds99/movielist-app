import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const MoviesList = (props) => {
    const [search, setSearch] = useState('')
    const [filterBy, setFilterBy] = useState([])
    const [orderBy, setOrderBy] = useState('')

    const movies = useSelector((state) => {
        //console.log(state.movies)
        return state.movies
    })

    const handleChange = (e) => {
        const inputValue = e.target.value
        setSearch(inputValue)

        //filtering the movies based on the search value
        const filteredValue = movies.filter((movie) => {
            return movie.Title.toLowerCase().includes(inputValue)
        })
        setFilterBy(filteredValue)
    }

    const handleSelectChange = (e) => {
        setOrderBy(e.target.value)
    }

    const show = (movies) => {
        //sorting based on orderBy 
        switch (orderBy) {
            case 'a-z': return [].concat(movies).sort((a, b) => a.Title.localeCompare(b.Title))
            case 'z-a': return [].concat(movies).sort((a, b) => b.Title.localeCompare(a.Title))
            case '1-10': return [].concat(movies).sort((a, b) => a.imdbRating - b.imdbRating)
            case '10-1': return [].concat(movies).sort((a, b) => b.imdbRating - a.imdbRating)
            default: return [].concat(movies)

        }
    }



    return (
        <div className='container'>
            <div className='d-flex mb-3 '>
                <h1 style={{ textAlign: 'center',border:'solid lightgreen',backgroundColor:'white' }} >My Movie List</h1>
                <form style={{ float: 'right', marginRight: '35px',top:'80px',right:'5px',position:'absolute' }}>
                    <input type="text" placeholder='search by name' value={search} onChange={handleChange} className="mr-4"/>
                    <select value={orderBy} onChange={handleSelectChange} >
                        <option value="">orderBy</option>
                        <option value="a-z">a-z</option>
                        <option value="z-a">z-a</option>
                        <option value="1-10">1-10</option>
                        <option value="10-1">10-1</option>
                    </select>
                </form>
            </div>
            
            <div className="pt-2  justify-content-center " style={{textAlign:'center',width:'70%',display: "flex", flexWrap: "wrap", justifyContent: "center "}}>
               
                {
                    filterBy.length > 0 ? (
                        filterBy.map((movie) => {
                            return <MovieCard key={movie.imdbID} Poster={movie.Poster} Title={movie.Title} imdbRating={movie.imdbRating} imdbID={movie.imdbID} />
                        })
                    ) : (
                        show(movies).map((movie) => {
                            return <MovieCard key={movie.imdbID} {...movie} />
                        })
                    )
                }
            </div>

        </div >
    )
}

export default MoviesList