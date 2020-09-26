import React, {Component} from 'react';
import { WordCloud } from "../../components/common/echart/WordCloud"
import { NavLink } from "react-router-dom"
import "./index.scss"

const list=[
    "微信公众号liwusen00",
    "今晚有没有LOL的一块啊？",
    "这种烟真心不好抽",
    "星期天我想去爬长城",
    "边喝酒边看电影",
    "春天来咯一块爬山去，谁去啊？"
    ];
const colorConfig={
    random:false,
    colorList:['red']
}

export default class Login extends Component{
    constructor(props: any){
        super(props)
        this.state = {};
    }
    
    render(){
        return (
            <div className="hh-login">
                <WordCloud />
                <div className="hh-form">
                    <NavLink
                        to="/index"
                        className="hh-btn"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: "red",
                            background: '#fff',
                            padding: 10
                        }}
                        replace
                    >
                        跳转主页面
                    </NavLink>
                </div>
            </div>
        )
    }
}