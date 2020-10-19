import React, {Component} from 'react';
import { Form, Input, Button, Carousel } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "./index.scss"

const { TextArea } = Input;
interface IProps{

}

interface IState{
    msg: string
}

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
  };

export default class Index extends Component<IProps, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            msg : '制定LOKR'
        }
    }
    onFinish(values: any){
        console.log('Received values of form:', values);
    }
    render(){
        return (
            <div className="hh-okr">
                <header className="hh-header">
                    <Carousel 
                        className="hh-time"
                        autoplay    
                    >
                        <div className="hh-time-item">
                        2019年9月 - 10月
                        </div>
                        <div className="hh-time-item">
                        2019年11月 - 12月
                        </div>
                        <div className="hh-time-item">
                        2020年1月 - 2月
                        </div>
                    </Carousel>
                </header>
                <section>
                    <Form className="hh-form" onFinish={this.onFinish}>
                        <div className="hh-form-item">
                            <TextArea
                                placeholder="请输入你的长期目标"
                                autoSize
                                bordered={false}
                            />
                        </div>
                        <div className="hh-form-item">
                            <div className="hh-form-nav">
                                <TextArea
                                    placeholder="添加Objective： 同一个目标反复出现，说明没有很好的分解"
                                    autoSize
                                    bordered={false}
                                />
                            </div>
                            <ul className="hh-form-list">
                                <li className="hh-form-list-item">
                                    <div className="hh-form-list-icon">🐶</div>
                                    <TextArea
                                        placeholder="添加 Key Result：尽量少用「参与」、「帮助」、「分析」这类难以衡量结果的词汇"
                                        autoSize
                                        bordered={false}
                                    />
                                </li>
                            </ul>
                            <div className="hh-form-add">
                                <PlusOutlined /> 添加 Key Result
                            </div>
                        </div>
                        <div  className="hh-form-item">
                            <PlusOutlined />
                            添加 Objective
                        </div>
                    </Form>
                </section>
            </div>
        )
    }
}