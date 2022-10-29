import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCalendar,
  faCalendarAlt,
  faCalendarTimes,
  faCheck,
  faCheckSquare,
  faCommentAlt,
  faDownload,
  faGift,
  faHome,
  faMobileAlt,
  faSearch,
  faSync,
  faSyncAlt,
  faUserAlt,
} from "@fortawesome/fontawesome-free-solid";
import DashFooter from "../components/DashFooter";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate=useNavigate()
  return (
    <div className="container">
      <div className="dash_upper">
        <div className="dash_upper_desc">
          <p style={{ color: "rgb(90,82,82)" }}>Balance</p>
          <p style={{ fontWeight: "bold", fontSize: 22 }}>
            ₹0.00{" "}
            <FontAwesomeIcon
              color="black"
              style={{ fontSize: "20px" }}
              icon={faSyncAlt}
            />
          </p>
          <p style={{ color: "gray" }}>ID: 240870</p>
        </div>
        <div className="dash_upper_btns">
          <button style={{ color: "white", backgroundColor: "#1781ff" }} onClick={()=>navigate("/recharge")}>
            Recharge
          </button>
          <button onClick={()=>navigate("/withdraw")}>Withdraw</button>
        </div>
      </div>
      <div className="dash_options">
        <Link to={"/reward"} className="dash_option">
          <div className="dash_option_icon" style={{background:"#e09307"}}>
            <img src="assets/gift.png" alt="" />
          </div>
          <p>Task reward</p>
        </Link>
        <Link to={"/spin"} className="dash_option">
          <div className="dash_option_icon" style={{background:"#20bc20"}}>
            <img src="assets/lottery.png" alt="" />
          </div>
          <p>spin</p>
        </Link>
      </div>
          <div className="dashgames">
              <Link to={"/fastparty"} className="dashgame"><img src="assets/fast-parity.jpg" alt="" /></Link>
              <Link to={"/andarbahar"} className="dashgame"><img src="assets/anB.jpg" alt="" /></Link>
              <Link to={"/fastparty"} className="dashgame"><img src="assets/parity.jpg" alt="" /></Link>
              <Link to={"/fastparty"} className="dashgame"><img src="assets/sapre.jpg" alt="" /></Link>
              <Link to={"/fastparty"} className="dashgame"><img src="assets/dice.jpg" alt="" /></Link>
              <Link to={"/fastparty"} className="dashgame"><img src="assets/wheel.png" alt="" /></Link>
              <Link to={"/fastparty"} className="dashgame"><img src="assets/MineSweeper.png" alt="" /></Link>
      </div>
      <DashFooter selected={"home"}/>
    </div>
  );
}

export default Dashboard;
