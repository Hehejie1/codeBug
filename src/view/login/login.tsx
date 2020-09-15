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
    }
}