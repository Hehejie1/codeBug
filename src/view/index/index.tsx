import React, {Component} from 'react';

export default class Index extends Component{
    constructor(props: any){
        super(props);
        this.state = {
            msg : '主页'
        }
    }
    render(){
        return (
        <h1>首页</h1>
        )
    }
}