# 编码



### 设计目标

适配： PC端，移动端 

色彩：\#fabc04(土黄色色调) 对比色： 蓝色，紫色。互补色：绿色，红色

react 的工具覆盖、ts 的类型检测完善、css的动画实现效果、兼容不同端的、大数据的展示





### 技术选型

react+redux+react-router+scss+es6

apache+nodejs+koa+pm2+redis+mongodb

软件重构、设计模式、系统架构



ui：使用antd+scss实现  

定义接口规范： mock+swagger    

classnames。简单的设置classNames

echarts： 设计图标展示内容



组件库：

使用代理模式： 将组件和组件的调用解耦，使得组件库发生改变时候，组件依旧能继续调用。

缺点： 在进行回溯的时候，路径成本比较长，同时在更改时候会导致更改较多的文档





禁止返回：

```
history.pushState(null, null, document.URL);
window.addEventListener("popstate",function(e) {  
  console.log(e);
  history.pushState(null, null, document.URL);
}, false);
```







