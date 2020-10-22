import React, {Component} from 'react';
import { WordCloud } from "../../components/common/echart/WordCloud"
import { NavLink } from "react-router-dom"
import "./index.scss"
import { Form, Input, Button, Checkbox, DatePicker } from 'antd';
import moment from 'moment';

const layout = {
    labelCol: { span:4 },
    wrapperCol: { span: 20 },
};
const tailLayout = {
    wrapperCol: { span: 16 },
};

interface IProps{
    history: any
}

interface IState{
    opacity: number,
}

class Login extends Component<IProps, IState>{
    constructor(props: IProps){
        super(props)
        this.state = {
            opacity: 0
        };
        setTimeout(()=>{
            this.setState({
                opacity: 1
            })
        },2000)
        this.onChange= this.onChange.bind(this);
    }
    onChange(values: any){
        console.log('Success:', values);
        console.log(this.props.history.push('/index'));
        
    };
    render(){
        return (
            <div className="hh-login">
                <WordCloud />
                <div className="hh-form" style={{opacity: this.state.opacity}}>
                    <Form
                        {...layout}
                        name="basic"
                        onFinish={this.onChange}
                    >
                        <Form.Item
                            label="昵称"
                            name="username"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="生日"
                            name="birthday"
                            initialValue={moment('1998-01-01', 'YYYY-MM-DD')}
                        >
                            <DatePicker style={{ width:'100%' }} />
                        </Form.Item>
                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Login