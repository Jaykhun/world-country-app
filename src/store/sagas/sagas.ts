import axios from "axios";
import {call, put, fork, takeEvery} from "typed-redux-saga"
import {ICountry} from "../types/stateTypes";
import {ActionTypes} from "../types/actionTypes";
import {fetchCountrySuccess} from "../actions/actions";

const getCountries = () =>
    axios.get<ICountry[]>('https://restcountries.com/v3.1/all')

function* fetchCountriesSaga(): Generator<object> {
    const response = yield  call(getCountries)
    const typeofResponse: any = response as any
    yield put(fetchCountrySuccess({country: typeofResponse.data}))
}

function* countrySaga() {
    yield takeEvery(ActionTypes.FETCH_COUNTRY_REQUEST, fetchCountriesSaga)
}

export function* rootSaga() {
    yield fork(countrySaga)
}

export {countrySaga}