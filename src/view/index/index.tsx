<<<<<<< HEAD
import React, {Component} from 'react';

export default class Index extends Component{
=======
import React from 'react';

export default class Index extends React.Component{
>>>>>>> feat: eslint,router finished
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