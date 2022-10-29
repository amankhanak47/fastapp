import React from "react";
import { Link } from "react-router-dom";
import DashFooter from "../components/DashFooter";
import Navbar from "../components/Navbar";

function UpdateProfile() {
  return (
    <div className="container">
      <div className="card_header">
        <Link to={"/my"}>
          <img
            src="https://www.fastwin.app/includes/icons/back_wt.png"
            alt=""
          />
        </Link>
        <p style={{ fontWeight: "bolder", fontSize: "18px" }}>Update Profile</p>
        <p></p>
      </div>
      <div className="auth_form">
        <div className="auth_form_options">
          <img src="assets/user.png" alt="" />
          <input
            className="auth_form_input"
            placeholder="Name"
            type="text"
            required
          />
        </div>
        <div className="auth_form_options">
          <img src="assets/cell-phone.png" alt="" />
          <input
            className="auth_form_input"
            placeholder="Mobile Number"
            type="tel"
            maxLength={10}
          />
        </div>
        <div className="auth_form_options">
          <img src="assets/placeholder.png" alt="" />
          <input
            className="auth_form_input"
            placeholder="Country"
            type="text"
            required
          />
        </div>
        <div className="auth_form_options">
          {/* <img src="assets/user1.png" alt="" /> */}
          <p
            style={{
              margin: "0px 10px",
              margin: "0px 10px",
              fontWeight: "bold",
              color: "#494949",
            }}
          >
            profile Photo{" "}
          </p>
          <input
            className="auth_form_input"
            placeholder="Avatar"
            type="file"
            required
          />
        </div>

        <div className="auth_form_submit">
          <button
            className="auth_submit_btn blue"
            style={{ background: "#0093ff" }}
          >
            Update
          </button>
        </div>
      </div>
      <DashFooter selected={"my"} />
    </div>
  );
}

export default UpdateProfile;
