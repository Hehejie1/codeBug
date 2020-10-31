import React, { useState, useEffect, ReactNode } from 'react';
import { PageHeader } from 'antd';
import './index.scss';


export interface TabsProps {
    title?: string | ReactNode
    subTitle?: string | ReactNode
    backIcon?: boolean | ReactNode
    extra?: ReactNode   // 操作区，位于 title 行的行尾	
}
 
export interface TabsState {
    currentIndex: number
}
 
const Header = (props: TabsProps) => {
    return (
        <PageHeader
            className="hh-page-header"
            onBack={() => window.history.back()}
            title={props?.title}
            subTitle={props?.subTitle}
            extra={props.extra}
        ></PageHeader>
    )
}
 
export default Header;