import React from "react";
import Login from "../login/login";

const Container = function () {
  return (
    <div className="container pt-xl-0 pb-xl-0 align-self-center">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7 col-lg-5 col-xl-5 col-xxl-4 pt-4 pb-4">
          <Login />
        </div>
      </div>
    </div>
  );
};
export default Container;
