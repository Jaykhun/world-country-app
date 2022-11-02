import {createStore, applyMiddleware} from "redux";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import {rootReducer} from "./reducers/rootReducer";

const sagaMiddleWare = createSagaMiddleWare()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(rootSaga)

export {store}