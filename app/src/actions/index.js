import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS"
export const FETCHING_FAILURE = "FETCHING_FAILURE"

const API_URL = 'https://digimon-api.herokuapp.com/api/digimon'


export const fetchDigimon = () => (dispatch) => {
    dispatch({type: FETCHING_START});
    axios.get(API_URL)
        .then((res =>{
            console.log('API date:', res.data);
            dispatch({ type: FETCHING_SUCCESS, payload: res.data})
        }))
        .catch(err =>{
            console.log(err);
            dispatch({type: FETCHING_FAILURE, payload: err})
        })
}