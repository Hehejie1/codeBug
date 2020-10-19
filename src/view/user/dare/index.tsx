import React, { useState } from 'react';
import { Drag } from "../../../components/index"
import "./index.scss"
import avatarImg from '../../../assert/images/user_one.jpg'
interface IProps{

}

export default (props: IProps) => {
    const [myLists, setMyLists] = useState()

    const handleClick = (index:number) => {
        console.log(index)
    }

    const FirstChild: React.ReactNode = (
        <>
            <div className="hh-dare-img">
                <img src={avatarImg} alt="个人头像"/>
            </div>
            <div className="hh-dare-list">
                <ul className="hh-todo-lists">
                    <li className="hh-todo-item" onClick={() => handleClick(1)}>我今天也要做什么</li>
                </ul>
            </div>
        </>
    )
    const SecondChild: React.ReactNode = (
        <>
            <div className="hh-dare-img">
                <img src={avatarImg} alt="个人头像"/>
            </div>
            <div className="hh-dare-list">
                <ul className="hh-todo-lists">
                    <li className="hh-todo-item">我今天也要做什么</li>
                    <li className="hh-todo-item">我今天也要做什么</li>
                    <li className="hh-todo-item">我今天也要做什么</li>
                    <li className="hh-todo-item">我今天也要做什么</li>
                </ul>
            </div>
        </>
    )

    return (
        <div className="hh-dare">
            <Drag 
                firstChild={FirstChild} 
                secondChild={SecondChild} 
                initSate={{x1:10,x2:200,y1:10,y2:10}}
                showLine={false}
            ></Drag>
        </div>
    )
}