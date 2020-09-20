import React from 'react';

import "./index.scss"

interface IProp{

}
interface IState{
    xAxis: number,
    yAxis: number,
}

export default class Index extends React.Component<IProp, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            xAxis : 65.5599,
            yAxis : 2.07756
        }
        this.move = this.move.bind(this);
    }
    move(event: any){
        let pageX = window.innerWidth;
        let pageY = window.innerWidth;
        let mouseY = event.pageY;
        let yAxis = (pageY/2-mouseY) / pageY*300;
        let mouseX = event.pageX / -pageX;
        let xAxis = -mouseX * 100 - 100;
        this.setState({
            yAxis,
            xAxis
        })
    }

    componentDidMount(){
        window.addEventListener('mousemove', this.move)
    }
    componentWillUnmount(){
        window.removeEventListener('mousemove', this.move)
    }
    render(){
        return (
            <div className="hh-error">
                <div className="box__ghost">
                    <div className="symbol"></div>
                    <div className="symbol"></div>
                    <div className="symbol"></div>
                    <div className="symbol"></div>
                    <div className="symbol"></div>
                    <div className="symbol"></div>
                    
                    <div className="box__ghost-container">
                        <div className="box__ghost-eyes" style={{transform: `translate(-${this.state.xAxis}%, -${this.state.yAxis}%)`}}>
                            <div className="box__eye-left"></div>
                            <div className="box__eye-right"></div>
                        </div>
                        <div className="box__ghost-bottom">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="box__ghost-shadow"></div>
                </div>
                <div className="box__description">
                    <div className="box__description-container">
                    <div className="box__description-title">404错误！</div>
                    <div className="box__description-text">看来我们找不到你要找的那一页</div>
                    </div>
                    <a href="/index" className="hh-btn">返回</a>
                </div>
            </div>
        )
    }
}