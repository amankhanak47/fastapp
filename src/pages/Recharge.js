import React from 'react'
import DashFooter from '../components/DashFooter'

function Recharge() {
  return (
      <div className='container'>
          <div className="card_header">
              <p>Records</p>
              <p style={{fontWeight:"bolder",fontSize:"18px"}}>Recharge</p>
              <p>Help</p>
          </div>
          <div className="card_main">
              <div className="card_main_up">
                  <p style={{fontSize:"gray"}}>Balance</p>
                  <p style={{fontSize:"26px", fontWeight:"bold"}}>₹0.00</p>
              </div>
              <div className="card_main_middle">
                  <p style={{ fontSize: "20px", fontWeight: "bold"}}>Amount</p>
                  <div className='card_main_middle_1'>
                      
                  <span>₹</span> <input type="number" placeholder='200 ~ 50000' />
                  </div>
              </div>

              <div className="card_main_down">
                  <div className="card_main_boxes">
                      <button>₹200</button>
                      <button>₹500</button>
                      <button>₹1320</button>
                      <button>₹2500</button>
                      <button>₹7000</button>
                      <button>₹40000</button>
                  </div>
                  <div className="card_main_submit">
                      <button>
                          Recharge
                      </button>
                      </div>
              </div>
          </div>
      <DashFooter selected={"recharge"}/>
    </div>
  )
}

export default Recharge
