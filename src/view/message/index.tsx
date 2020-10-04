import React, {Component} from 'react';
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;
import "./index.scss"
import Crabsh from '../../assert/images/rabsh.png'
import Empty from '../../assert/images/empty.png'

interface IProps{

}

interface IState{
    msg: string
}

const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
`;
export default class Index extends Component<IProps, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            msg : '消息页面'
        }
    }
    callback(key: string | string[]) {
        console.log(key);
    }
    render(){
        return (
            <div className="hh-message">
                <section className="hh-header">
                    <Button type="primary">全部已读</Button>
                </section>
                <section className="hh-message-container">
                    <Collapse onChange={this.callback}>
                        <Panel header="This is panel header 1" key="1">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 2" key="2">
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel header 3" key="3">
                        <p>{text}</p>
                        </Panel>
                    </Collapse>
                </section>
                <section className="hh-carbash">
                    <img src={Crabsh} alt="垃圾箱"/>
                </section>
            </div>
        )
    }
}