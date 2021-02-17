import React from "react";
import "./login.css";
import GitHub from "../../assets/icons/Gihub.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Google from "../../assets/icons/Google.svg";
import Devchallenge from "../../assets/icons/devchallenges.svg";

const CardLogin = function () {
  return (
    <>
      <div className="card" id="card">
        <div className="card-body">
          <div className="pb-4">
            <img src={Devchallenge} alt="" />
          </div>
          <h5 className="card-title">
            Join thousands of learners from around the world
          </h5>
          <p className="card-text">
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </p>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-4">
            <button className="btn btn-primary" type="button">
              Start coding now
            </button>
          </div>
          <p className="mt-4" id="continueWithSocial">
            or continue with these social profile
          </p>
          <div className="d-grid gap-3 d-flex justify-content-center mt-4 mb-4">
            <img src={Google} alt="" />
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={GitHub} alt="" />
          </div>
          <p className="text-center ">Adready a member? <a href="">Login</a></p>
        </div>
      </div>
    </>
  );
};

export default CardLogin;
