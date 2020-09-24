import React, { useEffect } from "react";
import { ICommonCanvas } from "../../../../types/canvas";
import { getPixelRatio } from "../../../../utils/flexiable"
import { getTime } from "../../../../utils/date"


interface IProps extends ICommonCanvas {
  id: string
  style: any
  className: string
}
interface IState {
}


interface IDate{
  "Y": number
  "M": number
  "q": number
  "d": number
  "D": number
  "h": number
  "m": number
  "s": number
  "S": number
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
    this.init(this.props.id, this.props.style)
  }
  
  componentDidUpdate() {
    this.init(this.props.id, this.props.style)
  }
  init(id: string, style: any){
    let _date: any = getTime();
    this.draw(id, _date)
  }
  draw(id:string, _date: any){
    const canvas: any = document.getElementById(id);
    const ctx: any = canvas.getContext("2d");
    const ratio = getPixelRatio(ctx);
    const width = window.innerWidth > 786 ? 350 * 0.25 : window.innerWidth * 0.25;
    canvas.width = width * ratio;
    canvas.height = width * ratio;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 绘制圆圈
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;
    ctx.arc(canvas.width / 2,canvas.height / 2,canvas.width / 2 - 3,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    // 绘制文字
    // ctx.beginPath();
    // ctx.font="8px Arial"
    // ctx.strokeStyle = "#fff";
    // ctx.fillStyle = "#fff";
    // ctx.fillText("距离死亡", 20, 20);
    // ctx.closePath();
    // 绘制指针
    // 时针
    // console.log(_date);
    // D: 3
    // M: 9
    // S: 77
    // Y: 2020
    // d: 23
    // h: 8
    // m: 52
    // q: 3
    // s: 3
    // 8 * 3600 + 52 * 60 + 3 = 31923
    // 12 * 3600 360
    
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + canvas.width * Math.sin((_date.h * 3600 + _date.m * 60 + _date.s) / 120) / 5, canvas.width / 2 + canvas.width * Math.sin((_date.h * 3600 + _date.m * 60 + _date.s) / 120) / 5);
    ctx.stroke();
    ctx.closePath();
    // 分针
    // ctx.beginPath();
    // ctx.lineWidth = 2;
    // ctx.moveTo(canvas.width / 2, canvas.height / 2);
    // ctx.lineTo(canvas.width / 2 + canvas.width * Math.sin((_date.m * 60 + _date.s) / 10) / 4, canvas.width / 2 + canvas.width * Math.sin((_date.m * 60 + _date.s) / 10) / 4);
    // ctx.stroke();
    // ctx.closePath();
    // 秒针
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + canvas.width * Math.sin(_date.s * Math.PI / -60) * 2 / 5, canvas.width / 2 + canvas.width * Math.cos(_date.s * Math.PI / -60) * 2 / 5);
    ctx.stroke();
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
