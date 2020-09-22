import React, {Component} from 'react';
import { SettingOutlined, HighlightOutlined, CloseCircleOutlined, QuestionCircleOutlined, ImportOutlined, RightOutlined } from '@ant-design/icons';
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
            msg : '我的'
        }
    }
    render(){
        return (
            <div className="hh-my">
                <section>
                    <CloseCircleOutlined className="hh-close" />
                </section>
                <section className="hh-avatar">
                    <div className="hh-avatar-gl">3D用户头像</div>
                    <div className="hh-avatar-info">
                        <span>呵呵杰</span>
                        <span>水瓶座</span>
                    </div>
                </section>
                <section className="hh-options">
                    <ul className="hh-groups">
                        <li className="hh-row"><a href="/my/setting" className="hh-btn-item"><SettingOutlined className="icon" />设置<RightOutlined className="fr" /></a></li>
                        <li className="hh-row"><a href="/my/goal" className="hh-btn-item"><HighlightOutlined className="icon" />我的目标<RightOutlined className="fr" /></a></li>
                        <li className="hh-row"><a href="/my/help" className="hh-btn-item"><QuestionCircleOutlined className="icon" />帮助<RightOutlined className="fr" /></a></li>
                        <li className="hh-row"><a href="/login" className="hh-btn-item"><ImportOutlined className="icon" />退出<RightOutlined className="fr" /></a></li>
                    </ul>
                </section>
            </div>
        )
    }
}