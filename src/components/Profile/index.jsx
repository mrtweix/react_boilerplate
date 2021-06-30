import React, { memo } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import {
  LazyLoadImage,
  trackWindowScroll,
  LazyLoadComponent,
} from "react-lazy-load-image-component";

const Profile = (props) => {
  const { user } = props;
  return (
    <Card className="p-3 m-3 rounded-0">
      <LazyLoadImage
        src={user.avatar}
        alt="user_image"
        effect="blur"
        className="mx-auto d-block rounded-circle"
        width="130"
      />
      <Card.Body>
        <LazyLoadComponent>
          <Card.Title as="div" className="text-center">
            Name: {user.first_name} {user.last_name}
            <br />
            Email Address: {user.email}
          </Card.Title>
        </LazyLoadComponent>
      </Card.Body>
    </Card>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

Profile.defaultProps = {
  user: {
    avatar: "no-image",
    first_name: "first_Name",
    last_name: "last_Name",
  },
};

export default trackWindowScroll(memo(Profile));
