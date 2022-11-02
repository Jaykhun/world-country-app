import {Actions, ActionTypes} from "../types/actionTypes";
import {initialState} from "../types/stateTypes";

const countryState: initialState = {
    countries: [],
    loading: false,
    error: ''
}

const countryFetchReducer = (state = countryState, action: Actions) => {
    switch (action.type) {
        case ActionTypes.FETCH_COUNTRY_REQUEST:
            return {...state, loading: true}
        case ActionTypes.FETCH_COUNTRY_SUCCESS:
            return {...state, countries: action.payload.country, loading: false}
        case ActionTypes.FETCH_COUNTRY_FAILURE:
            return {...state, error: action.payload.error, loading: false}
        default:
            return state
    }
}

export default countryFetchReducer