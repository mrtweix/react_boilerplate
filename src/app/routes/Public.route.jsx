import { Route } from "react-router";

const PublicRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      exact
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default PublicRoute;
