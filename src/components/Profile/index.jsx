import React, { memo } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import {
  LazyLoadImage,
  trackWindowScroll,
  LazyLoadComponent,
} from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

const Profile = (props) => {
  const { user } = props;
  return (
    <Card className="my-3 rounded">
      <LazyLoadImage
        src={user.avatar}
        alt="user_image"
        width="350"
        height="350"
        effect="blur"
      />
      <LazyLoadComponent>
        <Card.Body>
          <Card.Title as="div">
            Name: {user.first_name} {user.last_name}
          </Card.Title>
          <Card.Title>Email Address</Card.Title>
          <Card.Title>
            <h4>{user.email}</h4>
          </Card.Title>
        </Card.Body>
      </LazyLoadComponent>
    </Card>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default trackWindowScroll(memo(Profile));
