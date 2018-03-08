import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'

import App from "../App";
import NotFoundPage from "../pages/NotFound";
import classify from "../pages/classify";
import result from "../pages/result";
import user from "../pages/user";

const router = (
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/classify" component={classify}/>
                <Route path="/user" component={user}/>
                <Route path="/result" component={result}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default router;