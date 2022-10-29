import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./order.css";

function Order() {
  const [selected,setselected]=useState("fastparity")
  return (
    <div className="container">
      <div className="card_header">
        <Link to={"/my"}>
          <img
            src="https://www.fastwin.app/includes/icons/back_wt.png"
            alt=""
          />
        </Link>
        <p style={{ fontWeight: "bolder", fontSize: "18px" }}>Order</p>
        <p></p>
      </div>

      <div className="order_main">
        <div className="order_main_header">
          <div className={`order_main_header_option ${selected=="fastparity"&&"order_main_header_option_selected"}`} onClick={()=>setselected("fastparity")}>FastParity</div>
          <div className={`order_main_header_option ${selected=="parity"&&"order_main_header_option_selected"}`} onClick={()=>setselected("parity")} >Parity</div>

          <div className={`order_main_header_option ${selected=="sapre"&&"order_main_header_option_selected"}`} onClick={()=>setselected("sapre")}>Sapre</div>

          <div className={`order_main_header_option ${selected=="dice"&&"order_main_header_option_selected"}`} onClick={()=>setselected("dice")}>Dice</div>
          <div className={`order_main_header_option ${selected=="anB"&&"order_main_header_option_selected"}`} onClick={()=>setselected("anB")}>AndarBahar</div>
          <div className={`order_main_header_option ${selected=="wheelocity"&&"order_main_header_option_selected"}`} onClick={()=>setselected("wheelocity")}>Wheelocity</div>
          <div className={`order_main_header_option ${selected=="parity"&&"order_main_header_option_selected"}`}>FastParity</div>
          <div className={`order_main_header_option ${selected=="parity"&&"order_main_header_option_selected"}`}>FastParity</div>
        </div>
      </div>
    </div>
  );
}

export default Order;
