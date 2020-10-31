import React, {Component, MouseEventHandler} from 'react';
import { Button,Modal } from 'antd';
import { CalendarOutlined, PlusCircleOutlined, ProfileTwoTone } from '@ant-design/icons';
import Header from '../../../components/common/module/PageHeader/index'
import "./index.scss"

interface IProps{

}

interface IState{
    [key: string]: any
    msg?: string
    todoLists: {
        id: number
        content: string,
        isImportant: boolean,
        count: number
    }[]
}



export default class Index extends Component<IProps, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            todoLists : [
                {
                    id: 2,
                    content: '请输入需要完成的事件',
                    isImportant: false,
                    count: 1
                }
            ],
            visible: false,
            disabled: true,
        }
        this.addClick = this.addClick.bind(this);
    }
    addClick(e: any){
        console.log(e);
        this.setState({
            todoLists: this.state.todoLists.concat([{
                id:2,
                content: '',
                isImportant: false,
                count: 1
            }])
        })
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
    };
    
    handleOk = (e: React.MouseEvent<HTMLElement>): void => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    
    handleCancel = (e: React.MouseEvent<HTMLElement>): void  => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render(){
        return (
            <div className="hh-todo">
                <div className="hh-todo-header">
                    <div className="hh-todo-nav">
                        <Header
                            title="创建今日计划"
                            extra={[<Button key="1" type="default" shape="circle" icon={<CalendarOutlined style={{color:'#333'}} />}></Button>]}
                        ></Header>
                    </div>
                    <p></p>
                    <p></p>
                    
                </div>
                <div className="hh-form">
                    <div className="hh-form-item hh-todo-head">
                        <div>任务列表</div>
                        <PlusCircleOutlined className="hh-todo-add" onClick={this.addClick} />
                    </div>
                    {
                        this.state.todoLists.map((item: any, index: number) => {
                            return (
                                <div className="hh-form-item hh-todo-item" key={item.id}>
                                    <input type="text" value={item.content} placeholder="请输入今天代办事项" />
                                    <Button type="primary" onClick={this.showModal} shape="circle" icon={<ProfileTwoTone style={{fontSize: 18}} />} />
                                </div>
                            )
                        })
                    }
                    <div className="hh-form-item">
                        <textarea className="hh-textarea">总结</textarea>
                    </div>
                    <div className="hh-form-item">
                        <Button className="hh-btn-finish" type="primary">创建完成</Button>
                    </div>
                </div>
                <Button type="primary" onClick={this.showModal}>
                Open Modal
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}