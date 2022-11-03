import axios from "axios";
import {call, put, all, takeLatest} from "typed-redux-saga"
import {ICountry} from "../types/stateTypes";
import {ActionTypes} from "../types/actionTypes";
import {fetchCountryFailure, fetchCountrySuccess} from "../actions/actions";

const getCountries = () =>
    axios.get<ICountry[]>('https://restcountries.com/v3.1/all')

function* fetchCountriesSaga() {
    try {
        const response = yield call(getCountries)
        yield put(fetchCountrySuccess({country: response.data}))
    } catch (e: typeof e) {
        yield put(fetchCountryFailure({error: e.message}))
    }
}

function* countrySaga() {
    yield all([takeLatest(ActionTypes.FETCH_COUNTRY_REQUEST, fetchCountriesSaga)])
}

export {countrySaga}