import { faArrowRight, faGift } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import DashFooter from "../components/DashFooter";

function InvitePage() {
  const navigate=useNavigate()
  return (
    <div className="container">
       <div className="topblue"></div>
      <div className="my_main">
      <div className="invite_top">
        <div className="invite_top_left">
          <span style={{ fontSize: "14px", color: "gray", fontWeight: "500" }}>
            Agent Amount
          </span>
          <p>
            <span style={{ fontSize: "12px" }}>₹</span>{" "}
            <span style={{ fontSize: "24px", fontWeight: "bolder" }}>0.00</span>
          </p>
        </div>
        <div className="invite_top_right">
          <button onClick={()=>navigate("/withdraw")}>Withdraw</button>
        </div>
      </div>
      <div className="invite_main">
        <div className="invite_main_header">
          <div className="invite_main_header_options">Privilege</div>
          <span style={{ border: "0.3px solid gray", height: 30 }}></span>
          <div className="invite_main_header_options">My Link</div>
        </div>
        <div className="invite_devider"></div>
        <div className="invite_main_middle">
        
           <div className="invite_main_middle1">
            <span
              style={{ fontSize: "16px", color: "gray", fontWeight: "500" }}
            >
              Invited Money
            </span>
            <p>
              <span style={{ fontSize: "12px" }}>₹</span>{" "}
              <span style={{ fontSize: "24px", fontWeight: "bolder" }}>0</span>
            </p>
            <div className="invite_main_middle_box">
              <span
                style={{ fontSize: "14px", color: "gray", fontWeight: "500" }}
              >
                Total: 0{" "}
              </span>{" "}
              <div
                className="dash_option_icon size20"
                style={{ background: "#e09307" ,marginLeft:"10px"}}
              >
                <FontAwesomeIcon
                  color="white"
                  style={{ fontSize: "15px" }}
                  icon={faArrowRight}
                />
              </div>
            </div>
                  </div>
                    <div className="invite_main_middle1">
            <span
              style={{ fontSize: "16px", color: "gray", }}
            >
              Todays Income
            </span>
            <p>
              <span style={{ fontSize: "12px" }}>₹</span>{" "}
              <span style={{ fontSize: "24px", fontWeight: "bolder" }}>0.00</span>
            </p>
            <div className="invite_main_middle_box">
              <span
                style={{ fontSize: "14px", color: "gray", fontWeight: "500" }}
              >
                Total: ₹{" "}
              </span>{" "}
              <div
                className="dash_option_icon size20"
                style={{ background: "#e09307",marginLeft:"10px" }}
              >
                <FontAwesomeIcon
                  color="white"
                  style={{ fontSize: "15px" }}
                  icon={faArrowRight}
                />
              </div>
            </div>
          </div>
              </div>
        <div className="invite_devider"></div>
              
              <div className="invite_main_bottom">
                  <div className="invite_main_bottom_head">
                      <p style={{ color: "rgb(60, 58, 58)", fontSize: "18px",fontWeight:"500" }}>Income details</p>
                      <p style={{color: "gray"}}>more></p>
                  </div>
                  <div className="invite_main_bottom_main">
                      No records
                  </div>
        </div>
        </div>
        </div>
      <DashFooter selected={"invite"} />
    </div>
  );
}

export default InvitePage;
