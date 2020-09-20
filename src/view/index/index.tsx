import React, {Component} from 'react';
import "./index.scss"
import { momment } from '../../utils/date'
import avatarImg from '../../assert/images/user_one.jpg'
import { MessageOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

interface IProps{

}

interface IState{
    date: string,
    timer: any
}

export default class Index extends Component<IProps, IState>{
    constructor(props: IProps){
        super(props);
        this.state = {
            date: '',
            timer: null
        }
    }
    componentWillMount() {
        let _date = ''; 
        let _timer = setInterval(() => {
            _date = momment('hh:mm:ss S')
            this.setState({
                date: _date,
                timer: _timer,
            })
        },1)
    }

    render(){
        return (
            <div className="hh-index">
                <header>
                    <a href="/my" className="hh-avatar">
                        <img src={avatarImg} alt="头像"/>
                        呵呵杰
                    </a>
                    <a href="/message" className="hh-message">
                        <Badge count={5}>
                            <MessageOutlined />
                        </Badge>
                    </a>
                </header>
                <section>
                    <div className="hh-clock">时钟</div>
                    <p>距离死亡还有：{this.state.date}</p>
                </section>
                <section>
                    用户完成任务的要求
                </section>
                <section>
                    <a href="user/dare" className="hh-btn">创建计划</a>
                    <a href="user/dare" className="hh-btn">开始挑战</a>
                </section>
            </div>  
        )
    }
}