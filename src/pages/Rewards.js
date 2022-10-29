import React from "react";
import { Link } from "react-router-dom";
import "./reward.css";
function Rewards() {
  return (
    <div className="container">
      <div className="card_header">
        <Link to={"/dashboard"}><img src="https://www.fastwin.app/includes/icons/back_wt.png" alt="" /></Link>
        <p style={{ fontWeight: "bolder", fontSize: "18px" }}>Rewards</p>
        <p></p>
      </div>
      <div className="withdraw_main">
        <div className="withdraw_main_box">
          <div className="withdraw_main_box_up">
            <p className="withdraw_main_box_up_heading">Welcome</p>
            <p className="withdraw_main_box_up_amount">₹20</p>
          </div>

          <div className="pback">
            <span class="pgbx p100"></span>
          </div>
          <p>We will reward you with ₹20 when you join our Telegram Channel.</p>
          <button className="withdraw_main_box_button ">Join & Get</button>
        </div>
        <div className="withdraw_main_box">
          <div className="withdraw_main_box_up">
            <p className="withdraw_main_box_up_heading">First Recharge</p>
            <p className="withdraw_main_box_up_amount">₹20</p>
          </div>

          <div className="pback">
            <span class="pgbx p100" style={{width:"10%"}}></span>
          </div>
          <p>This reward can only be obtained by doing your first recharge.</p>
          <button className="withdraw_main_box_button reward_light_button">
            Collect
          </button>
        </div>
        <div className="withdraw_main_box">
          <div className="withdraw_main_box_up">
            <p className="withdraw_main_box_up_heading">Daily 100 orders</p>
            <p className="withdraw_main_box_up_amount">₹20</p>
          </div>

          <div className="pback">
            <span class=" pgbx p100" style={{width:"10%"}}></span>
          </div>
          <p>You need to complete 100 games in order to receive this reward.</p>
          <button className=" withdraw_main_box_button reward_light_button">
            Collect
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
