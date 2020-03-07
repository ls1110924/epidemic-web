import React from 'react'
import { Button, TreeSelect } from 'antd'
import './style.css'
import { cityOptions } from './constants'

export class Condition extends React.Component {

    render() {
        return (
            <div className={'condition-container'}>
                <span className={'condition-area-label'}>区域</span>
                <TreeSelect
                    className={'condition-area-selector'}
                    value={this.props.area}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="选择待查询的区域"
                    onChange={this.onAreaChange}>
                    {
                        this.recurseRenderChildTree(cityOptions)
                    }
                </TreeSelect>
                <Button className={'query-btn'}
                        type='primary'
                        shape={'round'}
                        size={'large'}
                        loading={this.props.loading}
                        onClick={this.onQueryBtnClick}>
                    <span className={'query-btn-text'}>{this.props.loading ? '查询中' : '查询'}</span>
                </Button>
            </div>
        )
    }

    /**
     * 递归渲染子树节点
     */
    recurseRenderChildTree = (cityOptions) => {
        if (!cityOptions || cityOptions.length === 0) {
            return null
        }
        return cityOptions.map(option => {
            return (
                <TreeSelect.TreeNode
                    key={option.value}
                    value={option.value}
                    title={option.label}>
                    {
                        this.recurseRenderChildTree(option.children)
                    }
                </TreeSelect.TreeNode>
            )
        })
    }


    onAreaChange = (value) => {
        const { onAreaSelected } = this.props
        onAreaSelected && onAreaSelected(value)
    }

    onQueryBtnClick = () => {
        const { query } = this.props
        query && query()
    }

}

