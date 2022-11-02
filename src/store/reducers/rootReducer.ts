import {combineReducers} from "redux";
import countryFetchReducer from "./countryFetchReducer";

export const rootReducer = combineReducers({
    country: countryFetchReducer
})