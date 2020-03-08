import { createActions } from 'redux-actions'

export const REPORT_ACTIONS = createActions({
    selectArea: (area) => {
        return { area }
    },
    toggleLoading: (loading) => {
        return { loading }
    },
    query: () => {
        return {}
    },
    setChartData: (xAxis, normal, abnormal) => {
        return { xAxis, normal, abnormal }
    }
}, { prefix: 'report' })
