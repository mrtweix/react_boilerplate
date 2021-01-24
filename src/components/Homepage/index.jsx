import React, { Fragment, memo, useEffect, Suspense, lazy } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import { withRouter } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { createStructuredSelector } from "reselect";
import * as actions from "../../redux/actions/homepageActions";
import * as selectors from "../../redux/selectors/homepageSelector";
import "./homepage.css";

const Profile = lazy(() => import("./Profile"));

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
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <Suspense fallback={"Loading..."}>
        <Row className="band">
          {homepageUsers?.length > 0
            ? homepageUsers?.map((user, index) => (
                <Col key={index} sm={12} md={6} lg={4} xl={3}>
                  <Profile user={user} key={index} />
                </Col>
              ))
            : homepageError}
        </Row>
      </Suspense>
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
