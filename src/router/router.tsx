// eslint-disable-next-line
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
// import Tab from '../components/common/module/Tab/index'
// <Tab 
//     option={[{key:'/index',name:'首页'},{key:'/user/index',name:'空间'}]}
// />
// const Login = lazy(() => import('../view/login/index'))
// const Index = lazy(() => import('../view/index/index'))
// const Error = lazy(() => import('../view/error/index'))
// const Message = lazy(() => import('../view/message/index'))

// const My = lazy(() => import('../view/my/index'))
// const Goal = lazy(() => import('../view/my/goal/index'))
// const Okr = lazy(() => import('../view/my/okr/index'))
// const Setting = lazy(() => import('../view/my/setting/index'))
// const Todo = lazy(() => import('../view/my/todo/index'))

// const User = lazy(() => import('../view/user/index'))
// const Dare = lazy(() => import('../view/user/dare/index'))
// const Finish = lazy(() => import('../view/user/finish/index'))
// const UserInfo = lazy(() => import('../view/user/userInfo/index'))
import Login from '../view/login/index'
import Index from '../view/index/index'
import Error from '../view/error/index'
import Message from '../view/message/index'
import My from '../view/my/index'
import Goal from '../view/my/goal/index'
import Okr from '../view/my/okr/index'
import Setting from '../view/my/setting/index'
import Help from '../view/my/help/index'
import Todo from '../view/my/todo/index'

import User from '../view/user/index'
import Dare from '../view/user/dare/index'
import UserInfo from '../view/user/userInfo/index'
import RouteInfo from '../mock/swagger'

const router = (props: any) => (
    <Router>
        <div style={{width: '100%',height: '100%',overflow: 'auto',background:'#F6F7F9'}}>
            <Switch>
                {/* 如果想要二级路由就不能出现extct 如果不能出现extct就不能出现重定向 */}
                {/* <Route path="/" render={() => <Redirect to="/login" push />} /> */}
                <Route path="/login" component={Login}/>
                <Route path="/index" component={Index}/>
                <Route path="/message" component={Message}/>
                <Route path="/user" render={() => (
                    <Switch>
                        <Route path="/user/index" component={User} />
                        <Route path="/user/userInfo" component={UserInfo} />
                        <Route path="/user/dare" component={Dare} />
                        <Redirect to="/user/index" />
                    </Switch>
                )}/>
                <Route path="/my" render={() => (
                    <Switch>
                        <Route path="/my/index" component={My} />
                        <Route path="/my/goal" component={Goal} />
                        <Route path="/my/okr" component={Okr} />
                        <Route path="/my/help" component={Help} />
                        <Route path="/my/setting" component={Setting} />
                        <Route path="/my/todo" component={Todo} />
                        <Redirect to="/my/index" />
                    </Switch>
                )}/>
                <Route path="/404" component={Error}/>
                <Route path="/route" component={RouteInfo}/>
                <Route path="/" render={() => <Redirect to="/login" push />} />
                <Route component={Error}/>
            </Switch>
        </div>
    </Router>
);


export default router;