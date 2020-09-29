import React, {Component} from 'react';
import { CalendarOutlined, PlusCircleOutlined } from '@ant-design/icons';
import "./index.scss"


interface IProps{

}

interface IState{
    msg?: string
    todoLists: {
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
                    content: '请输入需要完成的事件',
                    isImportant: false,
                    count: 1
                }
            ]
        }
        this.addClick = this.addClick.bind(this);
    }

    addClick(e: any){
        console.log(e);
        this.setState({
            todoLists: this.state.todoLists.concat([{
                content: '',
                isImportant: false,
                count: 1
            }])
        })
    }

    render(){
        return (
            <div className="hh-todo">
                <div className="hh-todo-nav">
                    <span>今日计划的制定</span>
                    <CalendarOutlined className="hh-icon-calendar" />
                </div>
                <div className="hh-form">
                    <div className="hh-form-item hh-todo-head">
                        <div>任务列表</div>
                        <div>是否重要</div>
                        <div>预计番茄时间(25分钟一个番茄时)</div>
                    </div>
                    {
                        this.state.todoLists.map((item: any, index: number) => {
                            return (
                                <div className="hh-form-item hh-todo-item">
                                    <input type="text" value={item.content} /> 
                                    <select value={item.isImportant}>
                                        <option value="1">重要</option>
                                        <option value="0">次要</option>
                                    </select>
                                    <input type="number" value={item.count} /> 
                                </div>
                            )
                        })
                    }
                    <div className="hh-form-item hh-todo-add" onClick={this.addClick}>
                        <PlusCircleOutlined />添加
                    </div>
                    <div className="hh-form-item">
                        <textarea className="hh-textarea">总结</textarea>
                    </div>
                </div>
            </div>
        )
    }
}