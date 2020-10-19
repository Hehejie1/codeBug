/* eslint-disable max-len */
import React, {Component} from 'react';
import PropType from 'prop-types';
import style from './style.scss';

export default class Timer extends Component {
  static propType = {
    /* 大小 */
    size: PropType.string,
    /* 颜色 */
    color: PropType.string,
    /* 字体颜色 */
    fontColor: PropType.string,
    /* 倒计时结束触发 */
    callback: PropType.func,
    /* 数字改变触发 */
    onChange: PropType.func,
    /* 倒计时时间 */
    countDown: PropType.number,
    /* 强制结束运行 */
    running: PropType.bool,
    /* 是否禁用手动点击 */
    disableClick: PropType.bool,
    /* 显示文字 */
    showText: PropType.bool,
  }

  static defaultProps = {
    size: '50px',
    color: 'red',
    fontColor: 'red',
    callback: async() => {},
    onChange: time => {},
    countDown: 3,
    running: true,
    disableClick: false,
    showText: true,
  }

  constructor(props) {
    super(props);
    this.timer = void 0;
    this.lock = false;
    this.state = {
      countDown: props.countDown,
      pathClass: style.rotateInit,
    };
  }

  componentDidMount() {
    this.runTimer();
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.countDown !== this.props.countDown) {
      this.timer && clearTimeout(this.timer);
      this.setState({countDown: nextProps.countDown},
        () => { this.runTimer(); });
    }
  }

  runTimer = async() => {
    let {countDown} = this.state;
    const {callback, running, onChange, countDown: propCount} = this.props;

    /* 强制结束运行 */
    if (!running) return;

    /* 倒计时事件 */
    onChange(countDown);

    if (countDown === 0) {
      /* 加锁 */
      this.lock = true;
      /* 开启动画 */
      this.setState({pathClass: style.rotate, countDown: ''});
      /* 触发回调 */
      await callback();
      /* 去除锁 */
      this.lock = false;
      /* 结束动画，初始化倒计时 */
      this.setState({pathClass: style.rotateInit, countDown: propCount});
      /* 开始倒计时 */
      this.runTimer();
    } else {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.setState({countDown: --countDown});
        this.runTimer();
      }, 1000);
    }
  }

  onClick = () => {
    const {disableClick, running} = this.props;
    if (!running || disableClick || this.lock) return;

    this.timer && clearTimeout(this.timer);

    this.setState({countDown: 0}, () => {
      this.runTimer();
    });
  }

  render() {
    const {size, color, fontColor, showText} = this.props;
    const {pathClass, countDown} = this.state;
    return (
      <svg width={size} height={size} viewBox='0 0 1024 1024' onClick={this.onClick} style={{cursor: 'pointer', userSelect: 'none'}}>
        {showText && <text x="50%" y="50%" textAnchor="middle" dy=".4em" fontSize={1024 / 3} fontWeight="bold" fill={fontColor}>{countDown}</text>}
        <path className={pathClass} style={{fill: color}} d='M913.408 384H732.16c-23.04 0-41.984-18.944-41.984-41.984 0-23.04 18.944-41.984 41.984-41.984h72.704c-65.536-92.672-173.568-153.088-295.936-153.088-200.192 0-362.496 162.304-362.496 362.496 0 200.192 162.304 362.496 362.496 362.496 200.192 0 362.496-162.304 362.496-362.496 0-23.04 18.944-41.984 41.984-41.984 23.04 0 41.984 18.944 41.984 41.984 0 246.272-199.68 445.952-445.952 445.952-246.272 0-445.952-199.68-445.952-445.952 0-246.272 199.68-445.952 445.952-445.952 149.504 0 281.6 73.728 362.496 186.368V175.104c0-23.04 18.944-41.984 41.984-41.984 23.04 0 41.984 18.944 41.984 41.984v167.424c-1.024 23.04-19.456 41.472-42.496 41.472z' />
      </svg>
    );
  }
}
