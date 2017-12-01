import React from 'react';
import { BrowserRouter as Router, Route, Switch , Redirect} from 'react-router-dom';
import Home from "./Components/Home";
import Error404 from "./Components/Error404";
import Gallery from "./Components/Gallery";
import App from "./Components/App";

const MyRoute = ()=> (
    <Router>
        <App name='layout'>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Gallery" component={Gallery}/>
                <Route component={Error404}/>
            </Switch>
        </App>
    </Router>
);

export default MyRoute;