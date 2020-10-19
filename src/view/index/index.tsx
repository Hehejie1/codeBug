// <reference path="../../types/all.d.ts">
import React, {Component} from 'react';
import "./index.scss"
import { momment } from '../../utils/date'
import avatarImg from '../../assert/images/user_one.jpg'
import { MessageOutlined } from '@ant-design/icons';
import { MyClock } from "../../components/common/canvas/clock"
import { Badge,Drawer } from 'antd';
import { Link } from 'react-router-dom'
import My from '../my/index'
import Battery from '../../components/common/module/Battery/index'


interface IProps{
}

interface IState{
    date: string,
    timer: any,
    visible: boolean
}

export default class Index extends Component<IProps, IState>{
    constructor(props: IProps){
        super(props);
        this.state = {
            date: '',
            timer: null,
            visible: false
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
    showDrawer(){
      this.setState({
        visible: true
      });
    };
    onClose(){
        this.setState({
            visible: false
        });
    };
    render(){
        return (
            <div className="hh-index">
                <header>
                <div className="hh-avatar"  onClick={this.showDrawer.bind(this)}>
                    <img src={avatarImg} alt="头像"/>
                    呵呵杰
                </div>
                <Drawer
                    placement="left"
                    closable={true}
                    onClose={this.onClose.bind(this)}
                    visible={this.state.visible}
                >
                    <My />
                </Drawer>
                <Link to="/message" className="hh-message" >
                    <Badge count={5} size="small">
                        <MessageOutlined className="hh-icon" />
                    </Badge>
                </Link>
                </header>
                <section className="hh-clock-content">
                    <MyClock
                        id="hh-index-clock"
                        className="hh-clock" 
                        style={{
                            display: "block",
                            width: "50%",
                            height: "50%",
                            margin: "10px auto",
                        }} 
                    />
                    <p style={{textAlign: "center",lineHeight:'24px'}}>
                        你的余生大约还剩下 
                        <span style={{verticalAlign:'middle',lineHeight:'18px',margin:'0 5px'}}>
                            <Battery type='nogrid' percent={72} size={18} color={'#000'}></Battery>
                        </span>
                        72%
                    </p>
                    <div className="hh-last-time">
                        <div>
                            <div className="hh-last">13223553</div>
                            <div>秒</div>
                        </div>
                        <div>
                            <div className="hh-last">222222</div>
                            <div>天</div>
                        </div>
                        <div>
                            <div className="hh-last">1111</div>
                            <div>月</div>
                        </div>
                        <div>
                            <div className="hh-last">75</div>
                            <div>年</div>
                        </div>
                    </div>
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