import React, { Fragment, memo, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { withRouter } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { createStructuredSelector } from "reselect";
import Profile from "../../components/Profile/Loader";
import * as actions from "../../redux/actions/homepageActions";
import * as selectors from "../../redux/selectors/homepageSelector";

import "./style.css";

function Homepage(props) {
  const {
    loadHomepage = () => {},
    homepageUsers = {},
    homepageError = {},
  } = props;

  useEffect(() => {
    loadHomepage();
  }, [loadHomepage]);

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
  loadHomepage: PropTypes.func.isRequired,
  homepageUsers: PropTypes.array,
  homepageError: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  homepageUsers: selectors.makeSelectHomepageUser(),
  homepageError: selectors.makeSelectHomepageError(),
});

const mapDispatchToProps = (dispatch) => ({
  loadHomepage: () => dispatch(actions.loadHomepageData()),
});

const homePage = connect(mapStateToProps, mapDispatchToProps)(Homepage);
export default withRouter(memo(homePage));
