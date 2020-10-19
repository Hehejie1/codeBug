import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import './index.scss';

export interface TabsProps {
    option: {
        key: string,
        name: string,
    }[],
}
 
export interface TabsState {
    currentIndex: number
}
 
const Tab = (props: TabsProps) => {
    const [hash, setHash] = useState('')

    let location = useLocation()
    
    useEffect(() => {
        // setHash(window.location.pathname)
        setHash(location?.pathname);
    }, [location])

    const handleClick = (key: string) => {
        // window.location.assign(key)
    }

    const TabPane = props.option.map((item: any, index: number) => (
        <div 
            className={item.key === hash ? "hh-tabpane on" : "hh-tabpane"} 
            key={item.key}
            // onClick={() => handleClick(item.key)}
        >
            <Link className="hh-link" to={item.key}>{item.name}</Link>
        </div>
    ))

    return (
        <div className="hh-Tab">
            {TabPane}
        </div>
    )
}
 
export default Tab;