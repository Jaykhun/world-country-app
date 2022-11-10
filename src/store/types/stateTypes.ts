import {rootReducer} from "../reducers/rootReducer";

export interface initialState {
    countries: ICountry[],
    loading: boolean,
    error: string,
    isDark: boolean
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
    alpha3Code: string
    population: number,
    region: string,
    subregion: string,
    capital: string[],
    languages: object,
    flags: {
        png: string
    },
    borders: string[],
    cca3: string
}

export type countryState = ReturnType<typeof rootReducer>
