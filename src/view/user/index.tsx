import React, {Component} from 'react';

export default class User extends Component{
    constructor(props: any){
        super(props);
        this.state = {
            msg : '用户界面'
        }
    }
    render(){
        return (
            <div className="hh-box">
                <section>
                    <div>搜索框</div>
                    <div>我的pk对象</div>
                    <div>推荐相当的人，推荐牛逼的人</div>
                </section>
                <section>
                    用户列表
                    用户信息，基本内容，添加pk
                </section>
            </div>
        )
    }
}