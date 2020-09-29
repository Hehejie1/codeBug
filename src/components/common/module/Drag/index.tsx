import React, { useState, useEffect, useRef, useMemo } from 'react';
import './index.scss';

export interface DragProps {

}
const useDrag = (domRef: any, setPosition: any) => {
    const mouseStart = useRef({x: 0,y: 0})
    const domStart = useRef({x: 0,y: 0})

    
    useEffect(() => {
        const down = (e: any) => {
            const { x, y} = domRef.current.getBoundingClientRect();
            mouseStart.current = {x: e.x ,y: e.y}
            domRef.current = {x , y};
            document.addEventListener("mousemove", move);
            document.addEventListener("mouseup", up);
        }
    
        const up = (e: any) => {
            document.removeEventListener("mousemove",move);
            document.removeEventListener("mouseup",up);
        } 
    
        const move = (e: any) => {
            const { pageX, pageY, x, y} = e;
            console.log(domRef);
            const { width, height } = domRef.current.getBoundingClientRect();
            const _x = domStart.current.x + x - mouseStart.current.x;
            const _y = domStart.current.y + y - mouseStart.current.y;
            setPosition({
                x: _x + width / 2,
                y: _y + height / 2,
            })
            domRef.current.style.left = _x + "px";
            domRef.current.style.top = _y + "px";
        }
        console.log(domRef);
        const {x, y, width, height} = domRef.current.getBoundingClientRect();
        setPosition({
            x: x + width / 2,
            y: y + height / 2,
        });
        domRef.current.addEventListener("mousedown", down);
    },[])


}
const Drag = (props: DragProps) => {
    const startRef: any = useRef();
    const endRef: any = useRef();

    const [startPosition, setStartPosition] = useState({x: 0, y: 0})
    const [endPosition, setEndPosition] = useState({x: 0, y: 0})

    useDrag(startRef, setStartPosition)
    useDrag(endRef, setEndPosition)
    const linePosition = useMemo(() => {
        return {
            x1: startPosition.x,
            x2: endPosition.x,
            y1: startPosition.y,
            y2: endPosition.y,
        }

    }, [startPosition, endPosition])
    return (
        <div className="hh-drag">
            <svg className="hh-drag-line">
                <line
                    className="line"
                    x1={linePosition.x1}
                    x2={linePosition.x2}
                    y1={linePosition.y1}
                    y2={linePosition.y2}
                ></line>
            </svg> 
            <div ref={startRef} className="hh-drag-box"></div>
            <div ref={endRef} className="hh-drag-box"></div>
        </div>
    )
}
export default Drag;