import React from 'react'
import Condition from './condition'
import BarChart from './bar-chart'
import './style.css'

export class ReportPage extends React.Component {

    constructor(props) {
        super(props)
        // setTimeout(() => {
        //     this.setState({
        //         xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        //         normal: [120, 132, 101, 134, 90, 230, 210],
        //         abnormal: [220, 182, 191, 234, 290, 330, 310]
        //     })
        // }, 5000)
    }

    render() {
        return (
            <div className={'root-container'}>
                <Condition />
                <BarChart />
            </div>
        )
    }

}
