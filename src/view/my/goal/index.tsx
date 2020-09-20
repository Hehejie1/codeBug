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
            msg : '目标页面'
        }
    }
    render(){
        return (
            <div className="hh-goal">
                <section>
                    <div>LOKR</div>
                    <div>TODO</div>
                </section>
                <section>
                    <div><a href="/my/okr" className="hh-btn">制定lokr</a>，树状图展示</div>
                    <div><a href="/my/todo" className="hh-btn">制作今日目标</a>， 历史目标转化</div>
                </section>
            </div>
        )
    }
}