// eslint-disable-next-line
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
const Login = lazy(() => import('../view/login/index'))
const Index = lazy(() => import('../view/index/index'))
const Error = lazy(() => import('../view/error/index'))
const Message = lazy(() => import('../view/message/index'))


const My = lazy(() => import('../view/my/index'))
const Goal = lazy(() => import('../view/my/goal/index'))
const Okr = lazy(() => import('../view/my/okr/index'))
const Setting = lazy(() => import('../view/my/setting/index'))
const Todo = lazy(() => import('../view/my/todo/index'))

const User = lazy(() => import('../view/user/index'))
const Dare = lazy(() => import('../view/user/dare/index'))
const Finish = lazy(() => import('../view/user/finish/index'))
const UserInfo = lazy(() => import('../view/user/userInfo/index'))

const router = () => (
    <Router>
        <Suspense fallback={(<div>loading...</div>)}>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/login" push />} />
                <Route path="/login" component={Login}/>
                <Route path="/index" component={Index}/>
                <Route path="/message" component={Message}/>
                <Route path="/user" render={() => (
                    <Switch>
                        <Route path="/user/index" component={User} />
                        <Route path="/user/userInfo" component={UserInfo} />
                        <Route path="/user/dare" component={Dare} />
                        <Route path="/user/finish" component={Finish} />
                        <Redirect to="/user/index" />
                    </Switch>
                )}/>
                <Route path="/my" render={() => (
                    <Switch>
                        <Route path="/my/index" component={My} />
                        <Route path="/my/goal" component={Goal} />
                        <Route path="/my/okr" component={Okr} />
                        <Route path="/my/setting" component={Setting} />
                        <Route path="/my/todo" component={Todo} />
                        <Redirect to="/my/index" />
                    </Switch>
                )}/>
                <Route path="/404" component={Error}/>
                <Route component={Error}/>
            </Switch>
        </Suspense>
    </Router>
);


export default router;