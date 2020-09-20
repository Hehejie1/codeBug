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
            msg : '消息页面'
        }
    }
    render(){
        return (
            <div className="hh-message">
                全部已读，下面有删除框
                <section>
                    每一项可以拖拽
                    每一项现实标题，然后进行缩放
                </section>
                <section>
                    垃圾篓
                </section>
            </div>
        )
    }
}