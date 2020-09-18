import React, { Fragment, memo, useEffect, Suspense } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";
import { Row } from "reactstrap";
import * as actions from "../../redux/actions/homepageActions";
const Profile = React.lazy(() => import("./Profile"));

function Homepage(props) {
  const { loadHomepage, homepageStore } = props;
  const { pageData, error } = homepageStore;
  const userData = pageData && pageData.data;

  useEffect(() => {
    loadHomepage();
  }, [loadHomepage]);

  return (
    <Fragment>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <h1>Homepage</h1>
      <Row>
        <Suspense fallback={"Loading..."}>
          {error
            ? { error }
            : userData && userData.length > 0
            ? userData.map((user, index) => <Profile user={user} key={index} />)
            : "Loading..."}
        </Suspense>
      </Row>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  homepageStore: state.homepage,
});

const mapDispatchToProps = (dispatch) => ({
  loadHomepage: () => dispatch(actions.loadHomepageData()),
});

const homePage = connect(mapStateToProps, mapDispatchToProps)(Homepage);
export default withRouter(memo(homePage));
