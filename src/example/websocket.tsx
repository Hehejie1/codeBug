import * as React from 'react';
import Socket from '../utils/websocket';


class websocket extends React.Component {
    constructor() {
        super();
        this.taskRemindInterval = null;
    }
    componentDidMount = () => {
        //    判断专家是否登录
        this.socket = new Socket({
            socketUrl: 'ws://123.207.167.163:9010/ajaxchattest',
            timeout: 5000,
            socketMessage: (receive) => {
                console.log(receive);  //后端返回的数据，渲染页面
            },
            socketClose: (msg) => {
                console.log(msg);
            },
            socketError: () => {
                console.log(this.state.taskStage + '连接建立失败');
            },
            socketOpen: () => {
                console.log('连接建立成功');
                // 心跳机制 定时向后端发数据
                this.taskRemindInterval = setInterval(() => {
                    this.socket.sendMessage({ "msgType": 0 })
                }, 30000)
            }
        });
　　　　　重试创建socket连接
        try {
            this.socket.connection();
        } catch (e) {
            // 捕获异常，防止js error
            // donothing
        }
    }

}

export default websocket;