import React, {Component} from 'react';
import { Input, Drawer, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { UserList } from '../../components/index'
const { Search } = Input;

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
            <div className="hh-box">
                <section>
                    <div>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                    </div>
                    <div>
                    <Button type="primary" onClick={this.showDrawer}>
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