import React, { useState, useEffect, useRef, useMemo, ReactNode } from 'react';
import './index.scss';


export interface DragProps {
    firstChild: React.ReactNode
    secondChild: React.ReactNode
    initSate: {
        x1: string | number
        x2: string | number
        y1: string | number
        y2: string | number
    } | {
        x1: 0
        x2: 0
        y1: 0
        y2: 0
    },
    showLine?: boolean | true
}
const useDrag = (domRef: any, setPosition: any, parentRef: any, initSate?: any) => {
    const mouseStart = useRef({
        x:  0,
        y:  0
    })
    const domStart = useRef({x: 0,y: 0})

    useEffect(() => {
        const originX = parentRef?.current?.getBoundingClientRect().x || 0
        const originY = parentRef?.current?.getBoundingClientRect().y || 0

        const down = (e: any) => {
            const { x, y} = domRef.current.getBoundingClientRect();
            mouseStart.current = {x: e.x ,y: e.y}
            domStart.current = {x , y};
            document.addEventListener("mousemove", move);
            document.addEventListener("mouseup", up);
        }
    
        const up = (e: any) => {
            document.removeEventListener("mousemove",move);
            document.removeEventListener("mouseup",up);
        } 
    
        const move = (e: any) => {
            const { pageX, pageY, x, y} = e;
            const { width, height } = domRef.current.getBoundingClientRect();
            const _x = domStart.current.x - originX + x - mouseStart.current.x;
            // const _x = domStart.current.x + x - mouseStart.current.x;
            const _y = domStart.current.y - originY + y - mouseStart.current.y;
            // const _y = domStart.current.y + y - mouseStart.current.y;

            setPosition({
                x: _x + width / 2,
                y: _y + height / 2,
            })
            domRef.current.style.left = _x + "px";
            domRef.current.style.top = _y + "px";
        }
        const {x, y, width, height} = domRef.current.getBoundingClientRect();
        setPosition({
            x: x - originX + width / 2,
            y: y - originY + height / 2,
        });
        domRef.current.addEventListener("mousedown", down);
    },[])


}
const Drag = (props: DragProps) => {
    const startRef: any = useRef();
    const endRef: any = useRef();
    const parentRef: any = useRef();

    const [startPosition, setStartPosition] = useState({x: 0, y: 0})
    const [endPosition, setEndPosition] = useState({x: 0, y: 0})

    useDrag(startRef, setStartPosition, parentRef)
    useDrag(endRef, setEndPosition, parentRef)
    const linePosition = useMemo(() => {
        return {
            x1: startPosition.x,
            x2: endPosition.x,
            y1: startPosition.y,
            y2: endPosition.y,
        }

    }, [startPosition, endPosition])
    return (
        <div ref={parentRef} className="hh-drag">
            <svg className="hh-drag-line" style={{opacity: props.showLine ? 1 : 0}}>
                <line
                    className="line"
                    x1={linePosition.x1}
                    x2={linePosition.x2}
                    y1={linePosition.y1}
                    y2={linePosition.y2}
                ></line>
            </svg> 
            <div ref={startRef} style={{left:props.initSate.x1,top:props.initSate.y1}} className="hh-drag-box">{props.firstChild}</div>
            <div ref={endRef} style={{left:props.initSate.x2,top:props.initSate.y2}} className="hh-drag-box">{props.secondChild}</div>
        </div>
    )
}
export default Drag;