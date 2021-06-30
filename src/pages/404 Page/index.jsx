import React, { memo } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./404.css";

function NotFound() {
  return (
    <Container>
      <Row>
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details text-secondary">
              Sorry, Requested page not found!
            </div>
            <p className="pt-3">
              <Link to="/">Go Back</Link>
            </p>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default memo(NotFound);
