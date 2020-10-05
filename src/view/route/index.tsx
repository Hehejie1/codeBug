import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars'
import SwaggerUI from "swagger-ui-react"
import swaggerData from '../../mock/swaggerData'
import "swagger-ui-react/swagger-ui.css"
import "./index.scss"

interface IProps{

}

interface IState{
    msg: string
}





export default class RouteInfo  extends Component<IProps, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            msg : '接口定义'
        }
    }
    render(){
        return (
            <div className="hh-route">
                <Scrollbars>
                    <SwaggerUI spec={swaggerData} />
                </Scrollbars>
            </div>
        )
    }
}