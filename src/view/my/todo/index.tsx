import React, {Component} from 'react';
import { Button,Modal } from 'antd';
import { CalendarOutlined, PlusCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';
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
    
      handleOk = (e: Event) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = (e: Event)  => {
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
                            extra={[<Button key="1" type="primary" shape="circle" icon={<CalendarOutlined />}></Button>]}
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
                                    <Button type="primary" shape="circle" icon={<InfoCircleOutlined />} />
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
                <Modal
                    title={
                        <div
                        style={{
                            width: '100%',
                            cursor: 'move',
                        }}
                        onMouseOver={() => {
                            if (this.state.disabled) {
                            this.setState({
                                disabled: false,
                            });
                            }
                        }}
                        onMouseOut={() => {
                            this.setState({
                            disabled: true,
                            });
                        }}
                        // fix eslintjsx-a11y/mouse-events-have-key-events
                        // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
                        onFocus={() => {}}
                        onBlur={() => {}}
                        // end
                        >
                        Draggable Modal
                        </div>
                    }
                    visible={this.state.visible}
                />
            </div>
        )
    }
}