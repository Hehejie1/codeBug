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
            msg : '帮助'
        }
    }
    render(){
        return (
            <div>
                搜索，提出问题
                缩放问题
            </div>
        )
    }
}