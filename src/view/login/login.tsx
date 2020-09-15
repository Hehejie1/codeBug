<<<<<<< HEAD
import React, {Component} from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


export default class Login extends Component{
    constructor(props: any){
        super(props)
        this.state = {}
    }
    render(){
        return (
            <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
        )
=======
import React from 'react';


export default class Login extends React.Component{
    constructor(props: any){
        super(props)
        this.state = {
            date: new Date()
        };
    }
    render(){
        return (
            <div>
              <h1>登陆页面</h1>
            </div>
        );
>>>>>>> feat: eslint,router finished
    }
}