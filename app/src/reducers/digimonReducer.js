import { FETCHING_FAILURE, FETCHING_START, FETCHING_SUCCESS } from "../actions"

const initialState ={
    digimon: [],
    error:'',
    loading: false
}

export const digimonReducer =(state = initialState, action) => {
    switch(action.type) {
        case FETCHING_START:
            return {...state, loading: true}
        case FETCHING_SUCCESS:
            return {...state, loading: false, digimon: action.payload}
        case FETCHING_FAILURE:
            return {...state, loading: false, error: action.payload}
        
        default:
            return state;
    }
}