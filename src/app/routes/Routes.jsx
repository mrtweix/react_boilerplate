import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoute from "./Public.route";
import Layout from "layouts/Layout";

import * as loader from "app/lazyImport/lazyLoad";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" layout={Layout} component={loader.Home} />
        <PublicRoute
          exact
          path="/login"
          layout={Layout}
          component={loader.Login}
        />
        <PublicRoute
          exact
          path="/register"
          layout={Layout}
          component={loader.Register}
        />
        <PublicRoute layout={Layout} component={loader.NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
