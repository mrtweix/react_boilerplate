import React, { Fragment, memo, useEffect } from "react";
import PropTypes from "prop-types";
import Profile from "components/Profile/Loader";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "redux/actions/homepageActions";
import * as selectors from "redux/selectors/homepageSelector";

import "./style.css";

function Homepage() {
  const dispatch = useDispatch();

  const homepageUsers = useSelector(selectors.makeSelectHomepageUser());
  const homepageError = useSelector(selectors.makeSelectHomepageError());

  useEffect(() => {
    dispatch(actions.loadHomepageData());
  }, [dispatch]);

  return (
    <Fragment>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="This is Homepage" />
      </Helmet>

      <Row className="band">
        {homepageUsers?.map((user, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <Profile user={user} key={index} />
          </Col>
        )) || homepageError}
      </Row>
    </Fragment>
  );
}

Homepage.propTypes = {
  homepageUsers: PropTypes.array,
  homepageError: PropTypes.string,
};

export default withRouter(memo(Homepage));
