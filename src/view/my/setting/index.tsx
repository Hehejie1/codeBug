import React, {Component} from 'react';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';


import "./index.scss"


interface IProps{

}

interface IState{
    msg: string
}



export default class Index extends Component<IProps, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            msg : '设置'
        }
    }
    render(){
        return (
            <div className="hh-goal">
                <section>
                    <ul className="hh-groups">
                        <li className="hh-row">
                            span是否被别人检索
                            <Switch
                                className="fr"
                                checkedChildren={<CheckOutlined />}
                                unCheckedChildren={<CloseOutlined />}
                                defaultChecked
                            />    
                        </li>
                        <li className="hh-row">是否被别人查看okr <Switch
                                className="fr"
                                checkedChildren={<CheckOutlined />}
                                unCheckedChildren={<CloseOutlined />}
                                defaultChecked
                            />    </li>
                        <li className="hh-row">全局主题
                            <input type="color" className="fr"/>
                        </li>
                        <li className="hh-row">版本信息 <Switch
                                className="fr"
                                checkedChildren={<CheckOutlined />}
                                unCheckedChildren={<CloseOutlined />}
                                defaultChecked
                            />    </li>
                    </ul>
                </section>
            </div>
        )
    }
}