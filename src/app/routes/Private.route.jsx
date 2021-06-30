import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ layout: Layout, component: Component, ...rest }) => {
  const authenticated = true;
  return (
    <Route
      exact
      {...rest}
      render={(props) =>
        authenticated ? (
          <Layout>
            <Component {...rest} {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
