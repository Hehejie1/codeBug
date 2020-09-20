import React, {Component} from 'react';

import "./index.scss"


interface IProps{

}

interface IState{
    msg: string
}



export default class Index extends Component<IProps, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            msg : '我的'
        }
    }
    render(){
        return (
            <div className="hh-my">
                <section>
                    <div>3D用户头像</div>
                    <div><span>呵呵杰</span><span>水瓶座</span></div>
                </section>
                <section>
                    <ul>
                        <li><a href="/my/setting" className="hh-btn">设置</a></li>
                        <li><a href="/my/goal" className="hh-btn">我的目标</a></li>
                        <li><a href="/my/help" className="hh-btn">帮助</a></li>
                        <li><a href="/login" className="hh-btn">退出</a></li>
                    </ul>
                </section>
            </div>
        )
    }
}