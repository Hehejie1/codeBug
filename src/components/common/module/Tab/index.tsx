import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom'
import './index.scss';

export interface TabsProps {
    option: {
        key: string,
        name: string,
    }[]
}
 
export interface TabsState {
    currentIndex: number
}
 
const Tab = (props: TabsProps) => {
    const [hash, setHash] = useState('')
    const history = useHistory();

    useEffect(() => {
        setHash(window.location.pathname)
    }, [window.location.pathname])

    const handleClick = (key: string) => {
        window.location.assign(key)
    }

    const TabPane = props.option.map((item: any, index: number) => (
        <div 
            className={item.key === hash ? "hh-tabpane on" : "hh-tabpane"} 
            key={item.key}
            onClick={() => handleClick(item.key)}
        >{item.name}</div>
    ))

    return (
        <div className="hh-Tab">
            {TabPane}
        </div>
    )
}
 
export default Tab;