import { combineReducers } from 'redux'
import reportReducers from './report'

export default combineReducers({
    report: reportReducers
})
