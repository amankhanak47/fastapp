import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EveryonesOrder from '../components/EveryonesOrder'
import Fastparityform from '../components/Fastparityform';
import MyOrder from '../components/MyOrder';
import "./fastparty.css"

function FastParty() {
  const selects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [select, setselect] = useState("")
  const [color,setcolor]=useState("")
  
  const [ordertype, setordertype] = useState("everyone");
  return (
    <div className='container posfixed'>
        <div className="card_header">
          <Link to={"/dashboard"}><img src="https://www.fastwin.app/includes/icons/back_wt.png" alt="" /></Link>
          <p style={{ fontWeight: "bolder", fontSize: "18px" }}>Fast Parity</p>
          <p>Rules</p>
      </div>
      <div className="game_main">
         <div className="game_main_header">
            <div className="game_main_header_left">
              <p className="lightcolor">Period</p>
              <p className="fs24">0202210231764</p>
            </div>
            <div className="game_main_header_right">
              <p className="lightcolor">countdown</p>
              <p className="fs24">00:09</p>
            </div>
        </div>
         <div className="game_main2">
            <div className="game_main_option">
            <div className="game_main_option_upper green" onClick={() => { setselect("green"); setcolor("green")}}>
                <img src="https://www.fastwin.app/includes/icons/rocket.png" alt="" />
                <p> Join Green</p>
              </div>
              <p className="lightcolor">1:2</p>
            </div>
            <div className="game_main_option">
            <div className="game_main_option_upper violet" onClick={() => { setselect("violet");setcolor("violet") }}>
                <img src="https://www.fastwin.app/includes/icons/rocket.png" alt="" />
                <p> Join Violet</p>
              </div>
              <p className="lightcolor">1:4:5</p>
            </div>
             <div className="game_main_option">
            <div className="game_main_option_upper red" onClick={() => { setselect("red"); setcolor("red")}}>
                <img src="https://www.fastwin.app/includes/icons/rocket.png" alt="" />
                <p> Join Red</p>
              </div>
              <p className="lightcolor">1:2</p>
            </div>
        </div>
          <div className="game_main3">
            <div className="game_main3_options">
            {selects.map(i => (
              <div className="game_main3_option1" onClick={() => { setselect(i); setcolor("blue")}}>{i}</div>
  
))}
        
            </div>
            <p>1:9</p>
        </div>
          <div className="game_main_record">
            <p className="game_main_record_p tfw7 lightblack7">Records</p>
            <div className="game_main_record_info">
              <p className="fs20 lightblack">Fast-Parity Record(s)</p>
              <p>more {">"}</p>
            </div>
            <div className="game_main_record_main">
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle red">1</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle violet">2</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle green ">5</div>
                <p>741</p>
              </div>
             
               <div className="game_main_record_main_option">
                <div className="game_main_record_circle red">1</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle violet">2</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle green ">5</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle red">1</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle violet">2</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle green ">5</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle red">1</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle violet">2</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle green ">5</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle red">1</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle violet">2</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle green ">5</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle red">1</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle violet">2</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle green ">5</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle red">1</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle violet">2</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle green ">5</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle red">1</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle violet">2</div>
                <p>741</p>
              </div>
              <div className="game_main_record_main_option">
                <div className="game_main_record_circle green ">5</div>
                <p>741</p>
              </div>
             
            </div>
        </div>
          <div className="game_main4">
            <div className="game_main4_header">
              <p style={{borderRight:"2px solid lightgray"}} className={`fs20 lightcolor ${ordertype=="everyone"&&"game_users_selected"}`} onClick={()=>setordertype("everyone")}>Everyone's Order</p>
              <p className={`fs20 lightcolor ${ordertype=="my"&&"game_users_selected"}`} onClick={()=>setordertype("my")}>My Order</p>
          </div>
          {
            ordertype=="everyone"?
              <EveryonesOrder /> :
              <MyOrder/>

          }
          </div>
      </div>
      {
        select && <Fastparityform selected={select} setselected={setselect} color={color} />
      }
      
    </div>
  )
}

export default FastParty
