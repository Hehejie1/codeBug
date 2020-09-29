import React, {Component} from 'react';

import "./index.scss"


interface IProps{

}

interface IState{
    msg: string
}



export default class finishIndex extends Component<IProps, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            msg : '对战结束'
        }
    }
    render(){
        return (
            <div>
                <section>
                    任务头像，胜利
                </section>
                {this.state.msg}
            </div>
        )
    }
}