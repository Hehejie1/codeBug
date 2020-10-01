import React, { useState,useRef, useLayoutEffect }  from 'react';
import ReactDOM from 'react-dom'
/*
不得不承认的是，基于 Portal 方案的 Conditional 组件并不能包治百病，和 Vue 的 keep-alive 相比，也存在不少缺憾：
需要手动控制 active ，不能直接基于子组件销毁/创建的生命周期事件
缺少失活/激活的生命周期时间，子组件无法感知自己是不是被缓存起来了
依赖了 ReactDOM ，对 SSR 不够友好
*/
import "./index.scss"

interface IProps{
    active: boolean,
    children: any
}

export default (props: IProps) => {
    const [targetElement] = useState(() => document.createElement('div'));
    const containerRef = useRef<HTMLDivElement>(null)

    const activeRef = useRef(false)
    activeRef.current = activeRef.current || props.active

    useLayoutEffect(() => {
        if(containerRef.current === null) return;
        if(props.active){
            containerRef.current.appendChild(targetElement);
        }else{
            try{
                containerRef.current.appendChild(targetElement);
            }catch(e){

            }
        }
    },[props.active, targetElement])
    return (
        <>
            <div ref={containerRef} />
            {activeRef && (
                ReactDOM.createPortal(props.children, targetElement)
            )}
        </>
    )
}