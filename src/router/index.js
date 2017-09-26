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

const router = (
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/classify" component={classify}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default router;