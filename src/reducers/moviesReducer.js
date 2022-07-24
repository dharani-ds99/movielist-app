const moviesIntialState = []

const movieReducer = (state=moviesIntialState,action) => {
    switch(action.type) {
        case 'ADD_MOVIE': {
            return [...state, action.payload]
        }

        case 'REMOVE_MOVIE': {
            return state.filter((ele) => {
                return ele.imdbID !== action.payload
            })
        }
        
        default:{
            return [...state]
        }
    }
}

export default movieReducer