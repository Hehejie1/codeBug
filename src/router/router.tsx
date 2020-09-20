// eslint-disable-next-line
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from '../view/login/index'
import Index from '../view/index/index'
import Error from '../view/error/index'
import Message from '../view/message/index'

import My from '../view/my/index'
import Goal from '../view/my/goal/index'
import Okr from '../view/my/okr/index'
import Setting from '../view/my/setting/index'
import Todo from '../view/my/todo/index'

import User from '../view/user/index'
import Dare from '../view/user/dare/index'
import Finish from '../view/user/finish/index'
import UserInfo from '../view/user/userInfo/index'


const router = () => (
    <Router>
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
    </Router>
);


export default router;