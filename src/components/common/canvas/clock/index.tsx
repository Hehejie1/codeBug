// <reference path="../../../../types/all.d.ts">
import React, { useEffect, useState } from 'react';
// const Clock = require('react-clock');
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

export const MyClock = (props: any) => {
  const [value, setValue] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);
 
  return (
    <div {...props}>
      {/* {value} */}
      <Clock 
        renderNumbers={true}
        value={value} 
      />
    </div>
  )
}









// import React, { useEffect } from "react";
// import { ICommonCanvas } from "../../../../types/canvas";
// import { getPixelRatio } from "../../../../utils/flexiable"
// import { getTime } from "../../../../utils/date"


// interface IProps extends ICommonCanvas {
//   id: string
//   style: any
//   className: string
// }
// interface IState {
// }


// interface IDate{
//   "Y": number
//   "M": number
//   "q": number
//   "d": number
//   "D": number
//   "h": number
//   "m": number
//   "s": number
//   "S": number
// }
// /*
//  * @desc 
//  */

// export default class Clock extends React.Component<IProps, IState> {
//   constructor(props: IProps){
//     super(props)
//     this.state = {}
//   }
//   componentDidMount() {
//     this.init(this.props.id, this.props.style)
//   }
  
//   componentDidUpdate() {
//     this.init(this.props.id, this.props.style)
//   }
//   init(id: string, style: any){
//     let _date: any = getTime();
//     this.draw(id, _date)
//   }
//   draw(id:string, _date: any){
//     const canvas: any = document.getElementById(id);
//     const ctx: any = canvas.getContext("2d");
//     const ratio = getPixelRatio(ctx);
//     const width = window.innerWidth > 786 ? 350 * 0.25 : window.innerWidth * 0.25;
//     canvas.width = width * ratio;
//     canvas.height = width * ratio;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     // 绘制圆圈
//     ctx.beginPath();
//     ctx.strokeStyle = "#000";
//     ctx.lineWidth = 3;
//     ctx.arc(canvas.width / 2,canvas.height / 2,canvas.width / 2 - 3,0,2*Math.PI);
//     ctx.stroke();
//     ctx.closePath();
//     // 绘制文字
//     ctx.beginPath();
//     ctx.font="20px Arial"
//     ctx.strokeStyle = "#000";
//     ctx.lineWidth = 0.5;
//     ctx.strokeText(`${_date.h}:${_date.m}:${_date.s} ${_date.S}`, canvas.width / 6, canvas.height * 2 / 3);
//     ctx.closePath();
//     // 绘制指针
//     // 时针
//     ctx.beginPath();
//     ctx.strokeStyle="rgb(0,0,255)"
//     ctx.lineWidth = 3;
//     ctx.moveTo(canvas.width / 2, canvas.height / 2);
//     ctx.lineTo(canvas.width / 2 + canvas.width * Math.sin(((_date.h % 12) / 6 + _date.m / 360 + _date.s / 180800) * Math.PI) * 3 / 10, canvas.width / 2 -canvas.width * Math.sin((_date.h / 6 + _date.m / 360 + _date.s / 180800) * Math.PI) * 3 / 10);
//     ctx.stroke();
//     ctx.closePath();
//     // 分针
//     ctx.beginPath();
//     ctx.strokeStyle="rgb(255,0,0)"
//     ctx.lineWidth = 2;
//     ctx.moveTo(canvas.width / 2, canvas.height / 2);
//     ctx.lineTo(canvas.width / 2 + canvas.width * Math.sin((_date.m / 30 + _date.s / 1800)  * Math.PI) / 2, canvas.width / 2 - canvas.width * Math.sin((_date.m / 30 + _date.s / 1800)  * Math.PI) / 2);
//     ctx.stroke();
//     ctx.closePath();
//     // 秒针
//     ctx.beginPath();
//     ctx.strokeStyle="rgb(0,255,0)"
//     ctx.lineWidth = 1;
//     ctx.moveTo(canvas.width / 2, canvas.height / 2);
//     ctx.lineTo(canvas.width / 2 + canvas.width * Math.sin(_date.s * Math.PI / 30) * 2 / 5, canvas.width / 2 - canvas.width * Math.cos(_date.s * Math.PI / 30) * 2 / 5);
//     ctx.stroke();
//     ctx.closePath();
//   }
//   render() {
//     return (
//       <canvas
//         id={this.props.id}
//         style={this.props.style}
//         className={this.props.className}
//       ></canvas>
//     );
//   }
// }
