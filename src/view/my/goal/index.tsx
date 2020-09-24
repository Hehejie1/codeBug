import { url } from 'inspector';
import React, {Component} from 'react';
import { PlusCircleOutlined, ArrowRightOutlined } from '@ant-design/icons';
import "./index.scss"


interface IProps{

}

interface IState{
    msg: string
    shift: boolean
}



export default class Index extends Component<IProps, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            msg : '目标页面',
            shift: true
        }
        this.change = this.change.bind(this);
    }
    change(){
        this.setState({
            shift : this.state.shift ?  false : true
        })
    }
    render(){
        return (
            <div className="hh-goal">
                <section className="hh-goal-nav">
                    <div className="hh-goal-title" onClick={this.change}><ArrowRightOutlined color="#E6A23C" />{this.state.shift ? "LOKR" : "TODO" }</div>
                    <div className="hh-goal-add"><PlusCircleOutlined/></div>
                </section>
                <section className="hh-goal-wrapper">
                    {this.state.shift ? (
                        <div className="hh-goal-lokr">
                            <div className="hh-goal-long-goal">我是长期目标</div>
                            <div className="hh-goal-okr-item">
                                <div className="hh-goal-o">我是Objective</div>
                                <div className="hh-goal-kr">
                                    <div className="hh-goal-kr-item">我是key result</div>
                                    <div className="hh-goal-kr-item">我是key result</div>
                                    <div className="hh-goal-kr-item">我是key result</div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="hh-goal-todo">
                            <div className="hh-goal-todo-title">2013年5月19日</div>
                            <div className="hh-goal-todo-wrapper">
                                <div className="hh-goal-todo-item">
                                    <div className="hh-radio"></div>我要打玩玩就按的
                                </div>
                                <div className="hh-goal-todo-item on">
                                    <div className="hh-radio"></div>我要打玩玩就按的
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        )
    }
}