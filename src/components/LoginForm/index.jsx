/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, memo } from "react";
import { Container, Row, Col, Card, Form, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Input from "../common/Input";

const LoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} lg={6} sm={6}>
          <Card className="rounded-0">
            <Card.Header className="py-2 text-center">LOGIN</Card.Header>
            <Card.Body>
              <Form>
                <FormGroup>
                  <Col lg={12} md={12} sm={12}>
                    <Input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange("email")}
                      className="form-control rounded-0"
                      labelText="Email Address"
                      labelClass="col-md-4 col-form-label"
                    />
                  </Col>
                </FormGroup>
                <div className="clearfix mt-3" />
                <FormGroup>
                  <Col lg={12} md={12} sm={12}>
                    <Input
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange("password")}
                      className="form-control rounded-0"
                      labelText="Password"
                      labelClass="col-md-4 col-form-label"
                    />
                  </Col>
                </FormGroup>
                <div className="clearfix mt-4" />
                <Col lg={12} md={12} sm={12}>
                  <button type="submit" className="btn btn-primary rounded-0">
                    Login
                  </button>
                  <Link to="/forgot-password" className="btn btn-link">
                    Forgot Your Password?
                  </Link>
                </Col>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(LoginForm);
