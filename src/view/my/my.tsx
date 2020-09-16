import React, {Component} from 'react';

export default class My extends Component{
    constructor(props: any){
        super(props);
        this.state = {
            msg : '我的界面'
        }
    }
    render(){
        return (
        <h1>我的界面</h1>
        )
    }
}