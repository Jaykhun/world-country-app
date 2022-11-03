import {
    ActionTypes,
    FetchCountryRequest,
    FetchCountryFailure,
    FetchCountrySuccess,
    FetchCountryFailurePayload,
    FetchCountrySuccessPayload, DarkMode, DarkModePayload
} from "../types/actionTypes";

export const fetchCountryRequest = (): FetchCountryRequest => ({
    type: ActionTypes.FETCH_COUNTRY_REQUEST
})

export const fetchCountrySuccess = (payload: FetchCountrySuccessPayload): FetchCountrySuccess => ({
    type: ActionTypes.FETCH_COUNTRY_SUCCESS,
    payload
})

export const fetchCountryFailure = (payload: FetchCountryFailurePayload): FetchCountryFailure => ({
    type: ActionTypes.FETCH_COUNTRY_FAILURE,
    payload
})

export const darkMode = (payload: DarkModePayload): DarkMode => ({
        type: ActionTypes.DARK_MODE,
        payload
    }
)