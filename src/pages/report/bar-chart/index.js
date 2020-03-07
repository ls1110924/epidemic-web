import { connect } from 'react-redux'
import { BarChart } from './bar-chart'

const mapStateToProps = (state) => {
    const report = state.report
    return {
        xAxis: report.get('xAxis'),
        normal: report.get('normal'),
        abnormal: report.get('abnormal'),
        loading: report.get('loading')
    }
}

const mapDispatchToProps = () => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(BarChart)
