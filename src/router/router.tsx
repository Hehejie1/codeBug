// eslint-disable-next-line
import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Login from '../view/login/login'
import Index from '../view/index/index'
import User from '../view/user/user'
import My from '../view/my/my'
import Swagger from '../mock/swagger'

const router = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/index" component={Index}/>
            <Route exact path="/user" component={User}/>
            <Route exact path="/my" component={My}/>
            <Route exact path="/swagger" component={Swagger}/>
        </Switch>
    </HashRouter>
);


export default router;