import {all, fork} from "typed-redux-saga";
import {countrySaga} from "./sagas";

function* rootSaga() {
    yield all([fork(countrySaga)])
}

export default rootSaga