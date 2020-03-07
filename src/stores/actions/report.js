import { createActions } from 'redux-actions'

export const REPORT_ACTIONS = createActions({
    updateArea: (area) => {
        return { area }
    },
    toggleQuerying: (querying) => {
        return { querying }
    },
    query: () => {
        return {}
    }
}, { prefix: 'report' })
