import { all, put, select, takeLatest } from 'redux-saga/effects'
import { message } from 'antd'
import { REPORT_ACTIONS } from '../actions'

function* handleQuery() {
    try {
        const state = yield select()
        const report = state.report
        if (report.get('querying')) {
            // 已经在请求中，则跳过
            return
        }

        yield put(REPORT_ACTIONS.toggleQuerying(true))

        // 校验参数


        // TODO 网络请求


        message.info('查询成功')
        yield put(REPORT_ACTIONS.toggleQuerying(false))
    } catch (e) {
        if (e.message) {
            message.info(e.message)
        }
        yield put(REPORT_ACTIONS.toggleQuerying(false))
    }
}

function* rootSaga() {
    yield all([
        takeLatest('report/query', handleQuery),
    ])
}

export default rootSaga
