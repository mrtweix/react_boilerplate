import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Form, FormGroup } from "react-bootstrap";
import Input from "../common/Input";

const RegisterForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = values;

  const handleChange = (name) => (event) => {
    setValues((prev) => ({ ...values, [name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} lg={6} sm={6}>
          <Card className="rounded-0">
            <Card.Header className="py-2 text-center">REGISTER</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Col lg={12} md={12} sm={12}>
                    <Input
                      name="name"
                      value={name}
                      onChange={handleChange("name")}
                      className="form-control rounded-0"
                      labeltext="User Name"
                      labelclass="col-md-4 col-form-label"
                    />
                  </Col>
                </FormGroup>
                <div className="clearfix mt-3" />
                <FormGroup>
                  <Col lg={12} md={12} sm={12}>
                    <Input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange("email")}
                      className="form-control rounded-0"
                      labeltext="Email Address"
                      labelclass="col-md-4 col-form-label"
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
                      labeltext="Password"
                      labelclass="col-md-4 col-form-label"
                    />
                  </Col>
                </FormGroup>
                <div className="clearfix mt-4" />
                <Col lg={12} md={12} sm={12}>
                  <button type="submit" className="btn btn-primary rounded-0">
                    Register
                  </button>
                  <Link to="/login" className="btn btn-link">
                    Already have account?
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

export default memo(RegisterForm);
