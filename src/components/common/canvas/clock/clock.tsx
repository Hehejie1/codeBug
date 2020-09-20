import * as React from "react";
import { ICommonCanvas } from "../../../../types/canvas";
import Particles from "reactparticles.js";

interface IProps extends ICommonCanvas {
  id: string;
  config?: string;
  style?: {
      width?: string | number
      height?: string | number
  };
  className?: string;
}
interface IState {
}
/*
 * @desc 
 */

export default class Clock extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log("=== componentDidMount Polygon ===")
    this.init(this.props.id, this.props.style)
  }
  
  componentDidUpdate() {
    console.log("=== componentDidUpdate Polygon ===")
    this.init(this.props.id, this.props.style)
  }

  init(id: string, style: any){
    const canvas: any = document.getElementById(id);
    const size = {
        width: parseInt(style.width),
        height: parseInt(style.height),
    }
    canvas.width = size.width;
    canvas.height = size.height;
    const ctx: any = canvas.getContext("2d");
    // 绘制圆圈
    ctx.beginPath();

    ctx.closePath();
    // 绘制文字
    ctx.beginPath();
    ctx.font="14px Arial"
    ctx.strokeStyle = "#fff";
    ctx.fillStyle = "#fff";
    ctx.fillText("距离死亡", 20, 20);
    ctx.closePath();
    // 绘制指针
    ctx.beginPath();

    ctx.closePath();
  }

  render() {
    return (
      <canvas
        id={this.props.id}
        style={this.props.style}
        className={this.props.className}
      ></canvas>
    );
  }
}
