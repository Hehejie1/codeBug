import React, {Component} from 'react';
import { Input, Drawer, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { UserList } from '../../components/index';
import { Link } from 'react-router-dom';
const { Search } = Input;
import "./index.scss"

interface IProps{

}

interface IState{
    visible: boolean,
    userList: {
        [key: string]: string,
    }[]
}

export default class User extends Component<IProps, IState>{
    constructor(props: IProps){
        super(props);
        this.state = {
            visible : false,
            userList : [
                {
                    name: ''
                },{

                }, {
                    name: ''
                },{
                    
                }
            ]
        }
        this.showDrawer = this.showDrawer.bind(this)
        this.onClose = this.onClose.bind(this)
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
            <div className="hh-user">
                <section className="hh-user-nav">
                    <div className="hh-user-search">
                        <Search
                            className="hh-form-ipt"
                            placeholder="请输入对手的昵称"
                            onSearch={value => console.log(value)}
                        />
                    </div>
                    <div>
                    <Button className="hh-user-btn" type="dashed" onClick={this.showDrawer}>
                        Open
                    </Button>
                    <Drawer
                        title="Basic Drawer"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Drawer>
                    </div>
                </section>
                <section>
                    <UserList option={this.state.userList}></UserList>
                </section>
            </div>
        )
    }
}