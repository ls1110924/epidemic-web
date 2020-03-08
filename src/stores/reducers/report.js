import { handleActions } from 'redux-actions'
import { Record } from 'immutable'

export const INIT_REPORT_STATE = Record({
    area: '',

    xAxis: [],
    normal: [],
    abnormal: [],

    loading: false
})()

export default handleActions({

    ['report/selectArea']: (state, action) => {
        return state.set('area', action.payload.area)
    },
    ['report/toggleLoading']: (state, action) => {
        return state.set('loading', action.payload.loading)
    },
    ['report/setChartData']: (state, action) => {
        return state.set('xAxis', action.payload.xAxis)
            .set('normal', action.payload.normal)
            .set('abnormal', action.payload.abnormal)
    }

}, INIT_REPORT_STATE)
