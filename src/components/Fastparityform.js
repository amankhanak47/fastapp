import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./fastparityform.css";
function Fastparityform({ selected, setselected, color }) {
  const [number, setnumber] = useState(0);
  const [contract_money, setcontract_money] = useState(0);
  return (
    <div className="container fast_parity_container">
      <div
        className="empty_parity"
        style={{ height: "100vh" }}
        onClick={() => setselected("")}
      ></div>
      <div className="parity_form">
        <p className={`parity_form_header ${color}color`}>Select {selected}</p>
        <div className="parityinputform">
          <p>{"₹4000"}</p>{" "}
          <button className="blue">
            <Link to={"/recharge"}>Recharge</Link>
          </button>
        </div>
        <div className="parity_contractmoney">
          <p>Contract Money</p>
          <div className="parity_contract_boxes">
            <div
              className="parity_contract_box"
              onClick={() => setcontract_money(contract_money + 10)}
            >
              10
            </div>
            <div
              className="parity_contract_box"
              onClick={() => setcontract_money(contract_money + 100)}
            >
              100
            </div>
            <div
              className="parity_contract_box"
              onClick={() => setcontract_money(contract_money + 1000)}
            >
              1000
            </div>
            <div
              className="parity_contract_box"
              onClick={() => setcontract_money(contract_money + 10000)}
            >
              10000
            </div>
          </div>
        </div>
        <div className="parity_numbers_main">
          <p>Number</p>
          <div className="parity_Number">
            <div className="parity_number_left">
              <div
                className="parity_contract_box"
                onClick={() => setnumber(number + 1)}
              >
                +1
              </div>
              <div
                className="parity_contract_box"
                onClick={() => setnumber(number + 2)}
              >
                +2
              </div>
            </div>
            <div className="parity_number_middle">{number}</div>
            <div className="parity_number_right">
              <div
                className="parity_contract_box"
                onClick={() => setnumber(number + 3)}
              >
                +3
              </div>
              <div
                className="parity_contract_box"
                onClick={() => setnumber(number + 5)}
              >
                +5
              </div>
            </div>
          </div>
        </div>
        <div className="total_contract_money">
          Total contract money is{" "}
          <span style={{ fontSize: "20px", color: "#ffa500" }}>
            {contract_money}
          </span>
        </div>
        <button
          className={` parity_form_button ${color}`}
          onClick={() => setselected("")}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Fastparityform;

// position: fixed;
// background: #fff;
// color: #666;
// font-family: sans-serif;
// border-radius: 5px;
// margin: auto;
// bottom: 0;
// left: 0;
// right: 0;
// z-index: 1000;
