import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {startGetMovie} from '../actions/moviesAction'

const MovieForm = (props) => {
    const [movieName,setMoviename] = useState('')
    const [formErrors,setFormerrors] = useState ({})
    const errors={}
    const dispatch=useDispatch()

    const handleChange = (e) => {
        setMoviename(e.target.value)
    }

    const runValidation = () => {
        if(movieName.trim().length === 0){
            errors.movieName='movie name can not be blank'
        }
    }

    const handleSubmit= (e) => {
        e.preventDefault()
        runValidation()
        // if validation pased the moviename dispatched 
        if(Object.keys(errors).length === 0){
            setFormerrors({})
            dispatch(startGetMovie(movieName))
            setMoviename('')
        }
        //else set error state variable
        else{
            console.log('form errors',errors)
            setFormerrors(errors)
        }


    }
    return (<div className=' border-dark border-3' style={{border:'2px solid',borderRadius:'2px',margin:'2%',padding:'2%',width:'22%',display:'inline-block',float: 'right',position:'absolute',right:0,top:95,alignItems:'center',borderColor:'#6f42c1',backgroundColor:'#BFB9FA'}}>
        <h2>Add Movie</h2>
        <form onSubmit={handleSubmit} >
            <input type='text' placeholder='enter the movie name' value={movieName} onChange={handleChange} name='movieName' /><br />
            {formErrors.movieName && <span>{formErrors.movieName}</span>}

            <input type='submit' style={{color:'black',backgroundColor:'#6f42c1'}} value='Add' />
            
        </form>

    </div>)
}

export default MovieForm