import {ICountry} from "./stateTypes";

export enum ActionTypes {
    FETCH_COUNTRY_REQUEST = 'FETCH_COUNTRY_REQUEST',
    FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS',
    FETCH_COUNTRY_FAILURE = 'FETCH_COUNTRY_FAILURE'
}

export interface FetchCountrySuccessPayload {
    country: ICountry[]
}

export interface FetchCountryFailurePayload {
    error: string
}

export interface FetchCountryRequest {
    type: ActionTypes.FETCH_COUNTRY_REQUEST
}

export interface FetchCountrySuccess {
    type: ActionTypes.FETCH_COUNTRY_SUCCESS,
    payload: FetchCountrySuccessPayload
}

export interface FetchCountryFailure {
    type: ActionTypes.FETCH_COUNTRY_FAILURE,
    payload: FetchCountryFailurePayload
}

export type Actions =
    | FetchCountryRequest
    | FetchCountrySuccess
    | FetchCountryFailure