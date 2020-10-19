/* eslint-disable max-len */
import React, {Component} from 'react';
import PropType from 'prop-types';

export default class Battery extends Component {
  static propType = {
    /* 百分比 */
    percent: PropType.number,
    /* 颜色 */
    color: PropType.string,
    /* 格子遮罩颜色 */
    gridColor: PropType.string,
    /* 大小 */
    size: PropType.string,
    /* default对应格子，nogrid对应没有格子 */
    type: PropType.oneOf(['default', 'nogrid']),
  }

  static defaultProps = {
    percent: 100,
    color: 'red',
    gridColor: '#fff',
    size: '50',
    type: 'default',
  }

  render() {
    const {percent, color, gridColor, size, type} = this.props;
    let offset = 0;
    if (percent % 20 === 0 && percent !== 0) {
      offset = -50;
    }
    return (
      <svg {...this.props} width={size} height={size} viewBox='0 0 1024 1024'>
        <rect x={140} y={350} width={type !== 'nogrid' ? 500 * percent / 100 + Math.floor(percent / 20) * 50 + offset : 700 * percent / 100} height={330} style={{fill: color}} />
        {type !== 'nogrid' && new Array(5).fill(0).map((item, index) =>
          <rect key={index} x={240 + index * 150} y={340} width={50} height={350} style={{fill: gridColor}} />)}
        <path style={{fill: color}} d="M938.666667 426.666667l0-85.333333c0-46.933333-38.4-85.333333-85.333333-85.333333L128 256c-46.933333 0-85.333333 38.4-85.333333 85.333333l0 341.333333c0 46.933333 38.4 85.333333 85.333333 85.333333l725.333333 0c46.933333 0 85.333333-38.4 85.333333-85.333333l0-85.333333c23.466667 0 42.666667-19.2 42.666667-42.666667l0-85.333333C981.333333 445.866667 962.133333 426.666667 938.666667 426.666667zM896 469.333333l0 85.333333 0 128c0 23.466667-19.2 42.666667-42.666667 42.666667L128 725.333333c-23.466667 0-42.666667-19.2-42.666667-42.666667L85.333333 341.333333c0-23.466667 19.2-42.666667 42.666667-42.666667l725.333333 0c23.466667 0 42.666667 19.2 42.666667 42.666667L896 469.333333z" />
      </svg>
    );
  }
}
