import axios from "axios";
import {call, put, fork, takeLatest} from "typed-redux-saga"
import {ICountry} from "../types/stateTypes";
import {ActionTypes} from "../types/actionTypes";
import {fetchCountrySuccess} from "../actions/actions";

const getCountries = () =>
    axios.get<ICountry[]>('https://restcountries.com/v3.1/all')

function* fetchCountriesSaga(): Generator<object> {
    const response: any = yield  call(getCountries)
    yield put(fetchCountrySuccess({country: response.data}))
}

function* countrySaga() {
    yield takeLatest(ActionTypes.FETCH_COUNTRY_REQUEST, fetchCountriesSaga)
}

export function* rootSaga() {
    yield fork(countrySaga)
}

export {countrySaga}