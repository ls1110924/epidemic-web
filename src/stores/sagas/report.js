import { all, put, select, takeLatest } from 'redux-saga/effects'
import { message } from 'antd'
import { REPORT_ACTIONS } from '../actions'
import { isEmptyStr } from '../../utils'

function* handleQuery() {
    try {
        const state = yield select()
        const report = state.report
        if (report.get('loading')) {
            // 已经在请求中，则跳过
            return
        }

        yield put(REPORT_ACTIONS.toggleLoading(true))

        // 校验参数
        const area = report.get('area')
        if (isEmptyStr(area)) {
            throw new Error('地区选择不得为空')
        }

        // TODO 网络请求


        message.info('查询成功')
        yield put(REPORT_ACTIONS.toggleLoading(false))
    } catch (e) {
        if (e.message) {
            message.info(e.message)
        }
        yield put(REPORT_ACTIONS.toggleLoading(false))
    }
}

function* rootSaga() {
    yield all([
        takeLatest('report/query', handleQuery),
    ])
}

export default rootSaga
