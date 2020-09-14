import React, {Component} from 'react';

export default class User extends Component{
    constructor(props: any){
        super(props);
        this.state = {
            msg : '用户界面'
        }
    }
    render(){
        return (
        <h1>用户界面</h1>
        )
    }
}