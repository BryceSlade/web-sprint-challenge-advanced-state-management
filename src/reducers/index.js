import axios from 'axios';
import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR, ADD_SMURF, SET_ERROR} from './../actions';

export const initialState = {
    smurfs: [],
    isLoading: false,
    errorMessage: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCH_START):
            return ({
                ...state,
                smurfs: [],
                isLoading: true,
                errorMessage: ''
            })
        case (FETCH_SUCCESS):
            return ({
                ...state,
                smurfs: action.payload,
                isLoading: false,
                errorMessage: ''
            })
        case (FETCH_ERROR):
            return ({
                ...state,
                smurfs: [],
                isLoading: false,
                errorMessage: action.payload
            })
        case (ADD_SMURF):
            const newSmurf = {...action.payload, id: Date.now()}
            axios.post('http://localhost:3333/smurfs', newSmurf)
            return ({
                ...state,
            })
        case (SET_ERROR):
            return ({
                ...state,
                errorMessage: action.payload
            })
        default:
            return state;
    }
}

export default reducer;