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
            msg : '设置'
        }
    }
    render(){
        return (
            <div className="hh-goal">
                <section>
                    <ul>
                        <li>是否被别人检索</li>
                        <li>是否被别人查看okr</li>
                        <li>全局主题</li>
                        <li>版本信息</li>
                    </ul>
                </section>
            </div>
        )
    }
}