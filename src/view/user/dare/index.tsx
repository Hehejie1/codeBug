import React, {Component} from 'react';
import { Drag } from "../../../components/index"
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
            msg : '对战'
        }
    }
    render(){
        return (
            <div>
                <section>
                    <div>用户头像，用户信息</div>
                    <div>当前的时钟</div>
                    <div>对手的任务</div>
                </section>
                <section>
                    <Drag></Drag>
                </section>
            </div>
        )
    }
}