import React, {Component} from 'react';
import { Drag } from "../../../components/index"
import "./index.scss"

interface IProps{

}
interface IState{
    msg: string
}

const firstChild = () => {

    return (
        <>
            
        </>
    )
}




export default class Index extends Component<IProps, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            msg : '对战'
        }
    }
    render(){
        return (
            <div className="hh-dare">
                <Drag firstChild={firstChild}></Drag>
            </div>
        )
    }
}