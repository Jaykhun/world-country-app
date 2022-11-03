import {Actions, ActionTypes} from "../types/actionTypes";
import {initialState} from "../types/stateTypes";

export const countryState: initialState = {
    countries: [],
    loading: false,
    error: '',
    isDark: false
}

const countryReducer = (state = countryState, action: Actions) => {
    switch (action.type) {
        case ActionTypes.FETCH_COUNTRY_REQUEST:
            return {...state, loading: true}
        case ActionTypes.FETCH_COUNTRY_SUCCESS:
            return {...state, countries: action.payload.country, loading: false}
        case ActionTypes.FETCH_COUNTRY_FAILURE:
            return {...state, error: action.payload.error, loading: false}
        case ActionTypes.DARK_MODE:
            return {...state, isDark: action.payload.isDark}
        default:
            return state
    }
}

export default countryReducer;