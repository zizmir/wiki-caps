import React from 'react';
import { BrowserRouter as Router, Route, Switch , Redirect} from 'react-router-dom';
import Home from "./Components/Home";
import Error404 from "./Components/Error404";
import Gallery from "./Components/Gallery";
import App from "./Components/App";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";


const MyRoute = ()=> (
    <Router>
        <App name='layout'>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/profile/view" component={Profile}/>
                <Route component={Error404}/>
            </Switch>
        </App>
    </Router>
);

export default MyRoute;