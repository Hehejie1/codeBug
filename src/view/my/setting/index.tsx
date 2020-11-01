import React, { useState } from 'react';
import { Switch, Button, Drawer, Radio, Space } from 'antd';
import { CloseOutlined, CheckOutlined, CalendarOutlined } from '@ant-design/icons';
import Header from '../../../components/common/module/PageHeader/index'

import "./index.scss"

interface IProps{

}
const Index = (props: IProps) => {
    const [visible, setVisible] = useState<boolean>(false)
    const showDrawer = () => {
        setVisible(true)
    };
    const onClose = () => {
        setVisible(false)
    };
    return (
        <div className="hh-goal">
            <Header
                title="设置"
            ></Header>
            <section>
                <ul className="hh-groups">
                    <li className="hh-row">
                        span是否被别人检索
                        <Switch
                            className="fr"
                            checkedChildren={<CheckOutlined />}
                            unCheckedChildren={<CloseOutlined />}
                            defaultChecked
                        />    
                    </li>
                    <li className="hh-row">是否被别人查看okr <Switch
                            className="fr"
                            checkedChildren={<CheckOutlined />}
                            unCheckedChildren={<CloseOutlined />}
                            defaultChecked
                        />    </li>
                    <li className="hh-row">全局主题
                        <input type="color" className="fr"/>
                    </li>
                    <li className="hh-row">清除缓存 <span className="fr">61.7MB</span></li>
                    <li className="hh-row"  onClick={showDrawer}>用户协议</li>
                    <li className="hh-row"  onClick={showDrawer}>隐私协议</li>
                </ul>
            </section>
            <footer>
                版本号: 3.4.1
            </footer>
            <Drawer
                title="Basic Drawer"
                placement='bottom'
                closable={false}
                onClose={onClose}
                getContainer={false}
                visible={visible}
                >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>  
        </div>
    )
}
export default Index