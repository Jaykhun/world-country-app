import {rootReducer} from "../reducers/rootReducer";

export interface initialState {
    countries: ICountry[],
    loading: boolean,
    error: string
}

export interface ICountry {
    name: {
        common: string
        official: string
    },

    currencies: {
        [key: string]: {
            name: string,
            symbol: string
        }
    },
    population: number,
    region: string,
    subregion: string,
    capital: string[],
    languages: object,
    flags: {
        png: string
    },
    borders: string[]
}

export type countryState = ReturnType<typeof rootReducer>