// eslint-disable-next-line
import React from 'react';
<<<<<<< HEAD
import { HashRouter, Route, Switch} from 'react-router-dom';
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
>>>>>>> feat: eslint,router finished
import Login from '../view/login/login'
import Index from '../view/index/index'
import User from '../view/user/user'
import My from '../view/my/my'
<<<<<<< HEAD
import Swagger from '../mock/swagger'

const router = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Swagger}/>
=======
// import Error from '../view/error/error'
import Swagger from '../mock/swagger'


const router = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/login" component={Login}/>
>>>>>>> feat: eslint,router finished
            <Route exact path="/index" component={Index}/>
            <Route exact path="/user" component={User}/>
            <Route exact path="/my" component={My}/>
            <Route exact path="/swagger" component={Swagger}/>
<<<<<<< HEAD
        </Switch>
    </HashRouter>
=======
            {/* <Route component={Error}/> */}
        </Switch>
    </Router>
>>>>>>> feat: eslint,router finished
);


export default router;