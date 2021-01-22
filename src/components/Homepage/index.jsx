import React, { Fragment, memo, useEffect, Suspense } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";
import { Row } from "react-bootstrap";
import * as actions from "../../redux/actions/homepageActions";
const Profile = React.lazy(() => import("./Profile"));

function Homepage(props) {
  const { loadHomepage, homepageStore } = props;
  const { users, error } = homepageStore;

  useEffect(() => {
    loadHomepage();
  }, [loadHomepage]);

  return (
    <Fragment>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <Row style={{ display: "flex", flexWrap: "wrap" }}>
        <Suspense fallback={"Loading..."}>
          {users?.length > 0
            ? users?.map((user, index) => <Profile user={user} key={index} />)
            : error}
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
