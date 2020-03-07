import React from 'react'
import { Provider } from 'react-redux'
import store from './stores'
import ReportPage from './pages/report'

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store} key={Math.random()}>
                <ReportPage />
            </Provider>
        )
    }
}
