import {ICountry} from "./stateTypes";

export enum ActionTypes {
    FETCH_COUNTRY_REQUEST = 'FETCH_COUNTRY_REQUEST',
    FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS',
    FETCH_COUNTRY_FAILURE = 'FETCH_COUNTRY_FAILURE',
    FETCH_COUNTRY_INFO_REQUEST = 'FETCH_COUNTRY_INFO_REQUEST',
    FETCH_COUNTRY_INFO_SUCCESS = 'FETCH_COUNTRY_INFO_SUCCESS',
    DARK_MODE = 'DARK_MODE'
}

export interface FetchCountrySuccessPayload {
    country: ICountry[] | ICountry
}

export interface FetchCountryFailurePayload {
    error: string
}

export interface FetchCountryInfoPayload {
    countryInfo: ICountry
}

export interface DarkModePayload {
    isDark: boolean
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

export interface FetchCountryInfoRequest {
    type: ActionTypes.FETCH_COUNTRY_INFO_REQUEST
}

export interface FetchCountryInfoSuccess {
    type: ActionTypes.FETCH_COUNTRY_INFO_SUCCESS,
    payload: FetchCountryInfoPayload
}

export interface DarkMode {
    type: ActionTypes.DARK_MODE,
    payload: DarkModePayload
}

export type ActionInfo =
    | FetchCountryInfoSuccess
    | FetchCountryInfoRequest

export type Actions =
    | FetchCountryRequest
    | FetchCountrySuccess
    | FetchCountryFailure
    | DarkMode