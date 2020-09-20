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
            msg : '主页'
        }
    }
    render(){
        return (
            <div>
                用户头像展示

                用户的OOKR

                PK

                总的计划数，
                计划完成度
                总的学习时长，
                PK胜利数
                {this.state.msg}
            </div>
        )
    }
}