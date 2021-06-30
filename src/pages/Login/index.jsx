import React, { Fragment, memo } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { LoginForm } from "app/lazyImport";

const Login = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="This is Login Page" />
      </Helmet>
      <Container>
        <Row className="mt-4">
          <LoginForm />
        </Row>
      </Container>
    </Fragment>
  );
};

export default withRouter(memo(Login));
