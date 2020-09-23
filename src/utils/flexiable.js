// import { useState, useEffect, useCallback } from 'react';

// 获取改变屏幕时候屏幕的宽度和高度
// export const getWidth = () => {
//     const [size, setSize] = useState({
//         width:document.documentElement.clientWidth,
//         height:document.documentElement.clientHeight,
//     })
//     const onResize = useCallback(()=>{
//         setSize({
//             width:document.documentElement.clientWidth,
//             height:document.documentElement.clientHeight,
//         })
//     },[])

//     useEffect(() => {
//         window.addEventListener('resize', onResize)
//         return ()=>{
//             window.removeEventListener('resize', onResize);
//         }
//     })
//     return size
// }

// 由于不同屏幕的物理像素不一样，一些一个像素点会对于2个或者更多的像素点渲染，所以就会造成放大的效果，尤其是在高清显示屏上。
export const getPixelRatio = function (context) {
    var backingStore = context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;
    return (window.devicePixelRatio || 1) / backingStore;
};