import React, { useState, useEffect } from 'react';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.scss';

export interface TabsProps {
    option: {
        [key: string]: string,
    }[]
}
 
export interface TabsState {
    currentIndex: number
}
 
const UserList = (props: TabsProps) => {
    const [hash, setHash] = useState('')

    useEffect(() => {
        setHash(window.location.pathname)
    }, [window.location.pathname])

    const handleClick = (key: string) => {
        window.location.assign(key)
    }

    const listItem = props.option.map((item: any, index: number) => (
        <div 
            className="hh-user-list-item"
            key={item.key}
            onClick={() => handleClick(item.key)}
        >
            <div className="hh-avatar">
                <Avatar icon={<UserOutlined />} />
            </div>
            <div className="hh-content">
                <p>胜率：7521</p>
                <p>星座： 天蝎座</p>
            </div>
            <div className="hh-list-btn">
                <Button type="primary"> P K </Button>
            </div>
        </div>
    ))

    return (
        <div className="hh-UserList">
            {listItem}
        </div>
    )
}
 
export default UserList;