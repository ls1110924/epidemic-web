import { all } from 'redux-saga/effects'
import reportSaga from './report'

/**
 * ROOT SAGA
 */
export default function* rootSaga() {
    yield all([
        reportSaga()
    ])
}
