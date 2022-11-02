import {ICountry} from "./stateTypes";

export interface CountryItemProps {
    country: ICountry
}

export interface HeaderProps {
    light: boolean,
    setLight: any
}