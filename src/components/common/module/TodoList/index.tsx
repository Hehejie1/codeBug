import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import './index.scss';

interface IProps {
    list: any,
}

 
const TodoList = (props: IProps) => {


    const TabPane = props.list.map((item: any, index: number) => (
        <div 
            key={item.key}
        >
            <Link className="hh-link" to={item.key}>{item.name}</Link>
        </div>
    ))

    return (
        <div className="hh-Tab">
              {
                  TabPane
              }
              <textarea className="hh-textarea">总结</textarea>
        </div>
    )
}
 
export default TodoList;