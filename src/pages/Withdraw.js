import React from "react";
import { Link } from "react-router-dom";
import "./withdraw.css";
function Withdraw() {
  return (
    <div className="container">
      <div className="card_header">
        <Link to={"/dashboard"}>
          <img
            src="https://www.fastwin.app/includes/icons/back_wt.png"
            alt=""
          />
        </Link>

        <p style={{ fontWeight: "bolder", fontSize: "18px" }}>Withdraw</p>
        <p>Records</p>
      </div>
      <div className="withdraw_main">
        <div className="withdraw_main_1">
          <p style={{ color: "gray" ,fontSize:"14px"}}>Balance</p>
          <p style={{ fontWeight: "bold", fontSize: 24 }}>₹0.00</p>
        </div>
        <div className="withdraw_main_2">Add UPI</div>
        <div className="withdraw_main_3 lightblue">
          <div style={{ width:"105%"}}>

          <button className="ptm_wallet blue">Paytm Wallet</button>
          </div>
          <div className="withdraw_main_3_main">

          <p style={{color:"gray",fontSize:"14px"}}>Paytm wallet can be added to get fast withdrawals.</p>
            <Link to={"/dashboard"}> <p style={{ color: "black", fontSize: "14px"}}> Click here to add</p></Link>
          </div>
        </div>
        <div className="withdraw_main_4 ">
          <p style={{fontWeight:"bolder",fontSize:"20px"}}>Amount</p>
          <input  type="tel" placeholder="230 ~ 50000" maxLength={10}/>
          <div className="withdraw_main_4_para">
            <p>Amount {"<"} ₹1500,fee ₹30</p>
            <p>
              Maximum: <span><span style={{color:"blue"}}>₹0</span></span>
            </p>
          </div>
          <div className="withdraw_main_4_para">
            <p>Amount {"<"} ₹1500,fee 2%</p>
            <p>
              Maximum: <span>₹230</span>
            </p>
          </div>

          <button>Withdrawal</button>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
