import { handleActions } from 'redux-actions'
import { Record } from 'immutable'

export const INIT_REPORT_STATE = Record({
    area: '',

    loading: false
})()

export default handleActions({

    ['report/selectArea']: (state, action) => {
        return state.set('area', action.payload.area)
    },
    ['report/toggleLoading']: (state, action) => {
        return state.set('loading', action.payload.loading)
    }

}, INIT_REPORT_STATE)
