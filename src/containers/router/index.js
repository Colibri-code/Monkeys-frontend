import React, { memo } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Login from "../login"
import Project from "../project"
import PrivateRoute from "./privateRoute";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Project} />
        <PrivateRoute exact path="/organizations" component={Project} />
        <PrivateRoute exact path="/manage-project" component={Project} />
      </Switch>
    </BrowserRouter>
  );
}

export default memo(Router);
