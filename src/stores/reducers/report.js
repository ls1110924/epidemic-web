import { handleActions } from 'redux-actions'
import { Record } from 'immutable'

export const INIT_REPORT_STATE = Record({
    area: [],

    querying: false
})()

export default handleActions({

    ['report/updateArea']: (state, action) => {
        return state.set('area', action.payload.area)
    },
    ['report/toggleQuerying']: (state, action) => {
        return state.set('querying', action.payload.querying)
    }

}, INIT_REPORT_STATE)
