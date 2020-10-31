import React, {Component} from 'react';
import { Button } from 'antd';
import { CalendarOutlined, PlusCircleOutlined, ProfileTwoTone } from '@ant-design/icons';
import Header from '../../../components/common/module/PageHeader/index'

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
            msg : '帮助'
        }
    }
    render(){
        return (
            <div>
                <Header
                    title="帮助"
                    extra={[<Button key="1" type="default" shape="circle" icon={<CalendarOutlined style={{color:'#333'}} />}></Button>]}
                ></Header>
                搜索，提出问题
                缩放问题
            </div>
        )
    }
}