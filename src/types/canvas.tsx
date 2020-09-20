import React from 'react'

/**
 * @export
 * @interface ICommonCanvas
 */

export interface ICommonCanvas{
    width?: number | string          // canvas的宽度
    height?: number | string         // canvas的高度
    wrapStyle?: React.CSSProperties  //自定义包裹样式
}