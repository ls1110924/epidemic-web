import { connect } from 'react-redux'
import { Condition } from './condition'
import { REPORT_ACTIONS } from '../../../stores/actions'

const mapStateToProps = (state) => {
    const report = state.report
    return {
        area: report.get('area'),
        loading: report.get('loading')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAreaSelected: (area) => {
            dispatch(REPORT_ACTIONS.selectArea(area))
        },
        query: () => {
            dispatch(REPORT_ACTIONS.query())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Condition)
