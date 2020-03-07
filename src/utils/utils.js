import { trim as trimByLodash } from 'lodash'

/**
 * 判断一个对象是否为null
 * @param v
 */
export const isNull = (v) => {
    return v === null || v === undefined
}

/**
 * 是否为空字符串
 *
 * @param v
 */
export const isEmptyStr = (v) => {
    return isNull(v) || v.length === 0
}

/**
 * 过滤前后空白字符
 *
 * @param v
 */
export const trim = (v) => {
    return isEmptyStr(v) ? v : trimByLodash(v)
}
