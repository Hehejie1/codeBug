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
            msg : '制定LOKR'
        }
    }
    render(){
        return (
            <div>
                <section>历史LOKR，顶部轮播展示</section>
                <section>
                    <form action="">
                        <div>长期目标：</div>
                        <div>Object：</div>
                        <div>Key Result：</div>
                        <div>supplyment：</div>
                        <div>添加LOKR</div>
                    </form>
                </section>
            </div>
        )
    }
}