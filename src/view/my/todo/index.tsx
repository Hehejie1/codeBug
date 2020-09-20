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
            msg : '今日计划'
        }
    }
    render(){
        return (
            <div>
                今日计划的制定和修改

                历史轮播计划

                表单：
                任务：<input type="text"/> 
                <select name="" id="">
                    <option value="">重要</option>
                    <option value="">次要</option>
                </select>
                完成度
                预计完成时间： 25
                总结
                添加
                {this.state.msg}
            </div>
        )
    }
}