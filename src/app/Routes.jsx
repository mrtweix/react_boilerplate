import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../components/Homepage";
import NotFound from "../components/NotFound";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
