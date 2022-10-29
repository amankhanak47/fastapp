import React from "react";
import { Link } from "react-router-dom";
import DashFooter from "../components/DashFooter";
import "./my.css";
function My() {
  return (
    <div className="container">
      <div className="topblue"></div>
      <div className="my_main">
        <div className="my_main_usercard">
          <div className="user_card_up">
            <img
              src="https://www.fastwin.app/includes/icons/avatar.png"
              alt="https://www.fastwin.app/includes/icons/avatar.png"
            />
            <div className="user_card_info">
              <p style={{color:"black",fontWeight:'bold'}}>9030865747</p>
              <div className="user_card_info_details">
                <p>
                  Mob: <span style={{color: "#959ea6",
    fontFamily: "monospace"}}>9030865747</span>
                </p>
                <p>
                  ID: <span style={{color: "#959ea6",
    fontFamily: "monospace"}}>1902837</span>
                </p>
              </div>
            </div>
          </div>
          <div className="usercard_down">
            <button><Link style={{textDecoration:"none"}} className="bluecolor" to={'/updateprofile'}> Edit Profile</Link></button>
            <button><Link style={{textDecoration:"none"}} className="bluecolor" to={'/forgotpassword'}>Change Password</Link></button>
          </div>
              </div>
              <div className="my_main_options">
                  <Link to={"/order"} className="my_main_option">
                      <div className="my_main_option_left">
                          <img className="my_main_option_left_img" src="https://www.fastwin.app/includes/icons/orderIcon.png" alt="" />
                          <p>Order Records</p>
                      </div>
                      <img className="my_main_option_img" src="https://www.fastwin.app/includes/icons/arrowRight.png" alt="" />

                  </Link>
                  <div className="my_main_option" style={{border:"none"}}>
                      <div className="my_main_option_left">
                          <img className="my_main_option_left_img" src="https://www.fastwin.app/includes/icons/fdetail.png" alt="" />
                          <p>Financial Details</p>
                      </div>
                      <img className="my_main_option_img" src="https://www.fastwin.app/includes/icons/arrowRight.png" alt="" />

                  </div>
                  <div className="invite_devider" style={{background:"lightgray"}}></div>
                  <div className="my_main_option">
                      <div className="my_main_option_left">
                          <img className="my_main_option_left_img" src="https://www.fastwin.app/includes/icons/down.png" alt="" />
                          <p>Downloads</p>
                      </div>
                      <img className="my_main_option_img" src="https://www.fastwin.app/includes/icons/arrowRight.png" alt="" />

                  </div>
                  <div className="my_main_option">
                      <div className="my_main_option_left">
                          <img className="my_main_option_left_img" src="https://www.fastwin.app/includes/icons/telegram.png" alt="" />
                          <p>Follow us</p>
                      </div>
                      <img className="my_main_option_img" src="https://www.fastwin.app/includes/icons/arrowRight.png" alt="" />

                  </div>
                  <div className="my_main_option">
                      <div className="my_main_option_left">
                          <img className="my_main_option_left_img" src="https://www.fastwin.app/includes/icons/support.png" alt="" />
                          <p>Supports</p>
                      </div>
                      <img className="my_main_option_img" src="https://www.fastwin.app/includes/icons/arrowRight.png" alt="" />

                  </div>
          <div className="invite_devider" style={{ background: "lightgray" }}></div>
          <Link to={"/userlogin"}><p style={{marginTop:"20px",display:"flex",justifyContent:"center",alignItems:"center",color:"gray",textDecoration:"none"}}>Signout</p></Link>
              </div>
              
      </div>
      <DashFooter selected={"my"}/>
    </div>
  );
}

export default My;
