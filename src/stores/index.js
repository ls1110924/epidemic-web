import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleWare = createSagaMiddleware()

let store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(rootSaga)

export default store
