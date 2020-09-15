import React from 'react';

export default class Index extends React.Component{
    constructor(props: any){
        super(props);
        this.state = {
            msg : '404页面'
        }
    }
    render(){
        return (
            <h1>404</h1>
        )
    }
}