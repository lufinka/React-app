import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'

import App from "../App";
import NotFoundPage from "../pages/NotFound";
import classify from "../pages/classify";
import result from "../pages/result";
import user from "../pages/user";
import set from "../pages/set";

const router = (
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={App}/>
                <Redirect from="/login" to="/" />
                <Route path="/classify" component={classify}/>
                <Route path="/user" component={user}/>
                <Route path="/result" component={result}/>
                <Route path="/set" component={set}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default router;