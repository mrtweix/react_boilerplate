import React from "react";
import { Card, CardImg, CardText, CardTitle, Col } from "reactstrap";

function Profile(props) {
  const { user } = props;
  return (
    <Col>
      <Card body>
        <CardTitle>
          Name: {user.first_name} {user.last_name}
        </CardTitle>
        <CardImg top width="10%" src={user.avatar} alt="user_image" />
        <CardText>
          Email:
          <br /> {user.email}
        </CardText>
      </Card>
    </Col>
  );
}

export default Profile;
