import React, {Component, ReactNode} from 'react';
import { Drag } from "../../../components/index"
import "./index.scss"

interface IProps{

}
interface IState{
    msg: string
}

const FirstChild: React.ReactNode = (
    <>
        <div>
            个人头像
        </div>
        <div>
            展开内容
            <ul>
                <li>我今天也要做什么</li>
            </ul>
        </div>
    </>
)

const SecondChild: React.ReactNode = (
    <>
        <div>你好</div>
    </>
)




export default class Index extends Component<IProps, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            msg : '对战'
        }
    }
    render(){
        return (
            <div className="hh-dare">
                <Drag firstChild={FirstChild} secondChild={SecondChild} initSate={{x1:10,x2:200,y1:10,y2:10}}></Drag>
            </div>
        )
    }
}