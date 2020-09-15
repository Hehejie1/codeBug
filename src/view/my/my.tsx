<<<<<<< HEAD
import React, {Component} from 'react';

export default class My extends Component{
=======
import * as React from 'react';

export default class My extends React.Component{
>>>>>>> feat: eslint,router finished
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