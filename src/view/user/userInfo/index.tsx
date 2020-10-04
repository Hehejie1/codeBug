import React, {Component} from 'react';
import avatarImg from '../../../assert/images/user_one.jpg'
import { Link } from 'react-router-dom'
import "./index.scss"
import { LineEcharts } from '../../../components/common/echart/LineEcharts'
import { RaderEcharts } from '../../../components/common/echart/RaderEcharts'

interface IProps{

}

interface IState{
    msg: string
}



export default class Index extends Component<IProps, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            msg : '主页'
        }
    }
    render(){
        return (
            <div className="hh-userInfo">
                <section className="hh-avatar">
                    <div id="react-gl-avatar" className="hh-avatar-gl">
                        <img src={avatarImg} />
                    </div>
                    <div className="hh-avatar-info">
                        <span>呵呵杰</span>
                        <span>水瓶座</span>
                    </div>
                </section>
                <section className="hh-userInfo-echarts">
                    {/* 总的计划数，
                    计划完成度
                    总的学习时长，
                    PK胜利数 */}
                    <LineEcharts style={{width:'100%',height: '150px'}}></LineEcharts>
                    <RaderEcharts style={{width:'100%',height: '150px'}}></RaderEcharts>
                </section>
 
                {this.state.msg}
            </div>
        )
    }
}