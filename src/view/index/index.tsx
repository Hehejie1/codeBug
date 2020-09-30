import React, {Component} from 'react';
import "./index.scss"
import { momment } from '../../utils/date'
import avatarImg from '../../assert/images/user_one.jpg'
import { MessageOutlined } from '@ant-design/icons';
import Clock from "../../components/common/canvas/clock"
import { Badge } from 'antd';
import { Link } from 'react-router-dom'

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
        console.log(this.props);
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
                <Link to="/my" className="hh-avatar" >
                    <img src={avatarImg} alt="头像"/>
                    呵呵杰
                </Link>
                <Link to="/message" className="hh-message" >
                    <MessageOutlined />
                </Link>
                </header>
                <section>
                    <Clock
                        id="hh-index-clock"
                        className="hh-clock" 
                        style={{
                            display: "block",
                            width: "50%",
                            height: "50%",
                            margin: "10px auto",
                        }} 
                    />
                    <p style={{textAlign: "center"}}>距离死亡还有：{this.state.date}</p>
                </section>
                {/* <section>
                    用户完成任务的要求
                </section> */}
                <section>
                    <Link to="/my/todo" className="hh-btn-add" >创建计划</Link>
                    <Link to="/my/dare" className="hh-btn-add" >开始挑战</Link>
                </section>
            </div>  
        )
    }
}