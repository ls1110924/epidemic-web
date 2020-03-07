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
    }
}, { prefix: 'report' })
