import React, { memo } from "react";
import PropTypes from "prop-types";
import { Card, CardImg, Col } from "react-bootstrap";

const Profile = (props) => {
  const { user } = props;
  return (
    <Col>
      <Card body>
        <Card.Title>
          Name: {user.first_name} {user.last_name}
        </Card.Title>
        <CardImg top src={user.avatar} alt="user_image" />
        <Card.Body>
          <Card.Title>Email Address</Card.Title>
          <Card.Title>{user.email}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default memo(Profile);
