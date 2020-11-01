import React, {Component, MouseEventHandler} from 'react';
import { Button,Modal, Input, Slider, InputNumber, Row, Col, Radio, Cascader, Tooltip, Calendar  } from 'antd';
import { CalendarOutlined, PlusCircleOutlined, ProfileTwoTone } from '@ant-design/icons';
import Header from '../../../components/common/module/PageHeader/index'
import TodoList from '../../../components/common/module/TodoList/index'
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

const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

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
            addText : '',
            inputValue: 1,
        }
        this.addClick = this.addClick.bind(this);
    }

    componentWillMount() {
        // 请求数据

    }
    onChange(value: number | string | undefined){
        this.setState({
          inputValue: value,
        });
    };
    onChange1(value: any) {
        console.log(value);
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

    onPanelChange(value: any, mode: any) {
        console.log(value, mode);
    }

    render(){
        return (
            <div className="hh-todo">
                <Header
                    title="创建清单"
                    subTitle={(<span style={{color : '#E6A23C'}}>(点击右边切换日期)</span>)}
                    extra={[
                        <Tooltip title={<Calendar fullscreen={false} onPanelChange={this.onPanelChange} />} placement="leftBottom" trigger="click" color='#fff'>
                            <Button key="1" type="default" shape="circle" icon={<CalendarOutlined style={{color:'#333'}}/>}></Button>
                        </Tooltip>
                    ]}
                ></Header>
                <div className="hh-todo-wrap">
                    <Input className="hh-todo-add" addonAfter={<ProfileTwoTone onClick={this.showModal} />} value={this.state.addText} placeholder="添加每日清单,回车即可保存" />
                    <TodoList list={this.state.todoLists}></TodoList>
                </div>
                <Modal
                    title="日期"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>优先级</p>
                    <Radio.Group defaultValue={1} buttonStyle="solid">
                        <Radio.Button value={4}>高优先级</Radio.Button>
                        <Radio.Button value={3}>中优先级</Radio.Button>
                        <Radio.Button value={2}>低优先级</Radio.Button>
                        <Radio.Button value={1}>无优先级</Radio.Button>
                    </Radio.Group>
                    <p>预计番茄时间</p>
                    <InputNumber min={1} max={10} defaultValue={3} onChange={this.onChange} />
                    <p>关联的OKR</p>
                    <Cascader options={options} onChange={this.onChange1} placeholder="Please select" />
                    <p>占比多少</p>
                    <Row>
                        <Col span={12}>
                        <Slider
                            min={1}
                            max={20}
                            onChange={this.onChange}
                            value={typeof this.state.inputValue === 'number' ? this.state.inputValue : 0}
                        />
                        </Col>
                        <Col span={4}>
                        <InputNumber
                            min={1}
                            max={20}
                            style={{ margin: '0 16px' }}
                            value={this.state.inputValue}
                            onChange={this.onChange}
                        />
                        </Col>
                    </Row>
                </Modal>
            </div>
        )
    }
}