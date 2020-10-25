import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { PageHeader } from 'antd';
import './index.scss';


export interface TabsProps {
    title?: string
    subTitle?: string
}
 
export interface TabsState {
    currentIndex: number
}
 
const Header = (props: TabsProps) => {

    return (
        <PageHeader
            className="site-page-header"
            onBack={() => null}
            title={props?.title}
            subTitle={props?.subTitle}
        />
    )
}
 
export default Header;