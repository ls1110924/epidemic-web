import React from 'react'
import ReactECharts from 'echarts-for-react'
import './style.css'

const DEFAULT_BAR_OPTION = {
    title: {
        text: '健康程度分布'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['健康', '异常']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '健康',
            type: 'bar',
            stack: '总量',
            areaStyle: { normal: {} },
            data: []
        },
        {
            name: '异常',
            type: 'bar',
            stack: '总量',
            areaStyle: { normal: {} },
            data: []
        }
    ]
}

export class BarChart extends React.Component {

    // 柱状图React元素
    barChartReactEle = null

    constructor(props) {
        super(props)
        this.state = {
            loading: this.props.loading
        }
    }

    componentDidMount() {
        const { loading } = this.props
        if (loading) {
            this.toggleLoading(true)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const newLoading = this.props.loading
        const oldLoading = this.state.loading
        if (newLoading !== oldLoading) {
            this.setState({
                loading: newLoading
            }, () => {
                this.toggleLoading(newLoading)
            })
        }
    }

    toggleLoading = (loading) => {
        const eChartsInstance = this.barChartReactEle.getEchartsInstance()
        if (eChartsInstance) {
            if (loading && eChartsInstance.showLoading) {
                eChartsInstance.showLoading()
            } else if (!loading && eChartsInstance.hideLoading) {
                eChartsInstance.hideLoading()
            }
        }
    }

    render() {
        return (
            <div className={'bar-chart-container'}>
                <ReactECharts
                    ref={e => this.barChartReactEle = e}
                    className='bar-chart'
                    option={this.buildEChartsOption()} />
            </div>
        )
    }

    buildEChartsOption = () => {
        const { xAxis, normal, abnormal } = this.props
        if (xAxis && normal && abnormal && xAxis.length === normal.length && normal.length === abnormal.length) {
            const copy = JSON.parse(JSON.stringify(DEFAULT_BAR_OPTION))
            copy.xAxis.data = xAxis
            copy.series[0].data = normal
            copy.series[1].data = abnormal
            return copy
        } else {
            return DEFAULT_BAR_OPTION
        }
    }

}


