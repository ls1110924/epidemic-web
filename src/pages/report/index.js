import { connect } from 'react-redux'
import { ReportPage } from './page'
import { REPORT_ACTIONS } from '../../stores/actions'

const mapStateToProps = (state) => {
    const report = state.report

    return {
        area: report.get('area')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateArea: (area) => {
            dispatch(REPORT_ACTIONS.updateArea(area))
        },
        query: () => {
            dispatch(REPORT_ACTIONS.query())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReportPage)
