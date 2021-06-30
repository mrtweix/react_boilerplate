import React, { Fragment, memo } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { RegisterForm } from "app/lazyImport/lazyLoad";

const Register = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="This is Register Page" />
      </Helmet>
      <Container>
        <Row className="mt-4">
          <RegisterForm />
        </Row>
      </Container>
    </Fragment>
  );
};

export default withRouter(memo(Register));
