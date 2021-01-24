import React, { memo } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const Profile = (props) => {
  const { user } = props;
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Img src={user.avatar} variant="top" alt="user_image" />
      <Card.Body>
        <Card.Title as="div">
          Name: {user.first_name} {user.last_name}
        </Card.Title>

        <Card.Title>Email Address</Card.Title>
        <Card.Title>
          <h4>{user.email}</h4>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default memo(Profile);
