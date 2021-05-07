import React from "react";
import "./style.css";

const SkeletonLoader = () => {
  return (
    <div>
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 first">
            <div className="row overflow">
              <div className="animation1 col-lg-12 col-md-12 col-sm-12" />
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 third">
            <div className="row overflow">
              <div className="animation2 col-lg-12 col-md-12 col-sm-12" />
            </div>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10 fourth">
            <div className="row overflow">
              <div className="animation3 overflow col-lg-12 col-md-12 col-sm-12" />
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 fifth">
            <div className="row overflow">
              <div className="animation4 col-lg-12 col-md-12 col-sm-12" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 first">
            <div className="row overflow">
              <div className="animation1 col-lg-12 col-md-12 col-sm-12" />
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 third">
            <div className="row overflow">
              <div className="animation2 col-lg-12 col-md-12 col-sm-12" />
            </div>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10 fourth">
            <div className="row overflow">
              <div className="animation3 overflow col-lg-12 col-md-12 col-sm-12" />
            </div>
          </div>
          <div className="col-lg-8 col-md-18 col-sm-8 fifth">
            <div className="row overflow">
              <div className="animation4 col-lg-12 col-md-12 col-sm-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
