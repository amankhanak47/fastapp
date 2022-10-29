import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { WheelComponent } from '../components/react-wheel-of-prizes'
import "./spin.css"
function Spin() {
    const segments = [
//   "Buy a nice cake now!",
//   "Hit me a phone call， I'll sing happy birthday song to you!",
  "Go to get a stranger and take a photo, tell him/her it's your birthday",
  "Find the best restaurant in the airport and have a nice meal",
  "Let me buy you a amazon prime membership as gift",
  "Do all of the them on the list",
  "Others - You could improvise, tell me what you want, I could try to fulfill you"
];
const seg_colors = [
//   "#F0CF50",
//   "#815CD1",
  "#3DA5E0",
  "#34A24F",
  "#F9AA1F",
  "#FF9000",
  "#FF9000"
    ];
    const navigate=useNavigate()
  return (
      <div className='container spin_page_color'>
           <div className="card_header">
           <Link to={"/dashboard"}>
          <img
            src="https://www.fastwin.app/includes/icons/back_wt.png"
            alt=""
          />
        </Link>
          <p style={{ fontWeight: "bolder", fontSize: "18px" }}>Spin</p>
          <p></p>
          </div>
          <div className="spin_main">
              <p>Spin And Win</p>
          <WheelComponent
               segments={segments}
               seg_colors={seg_colors}
               onFinished={(winner) => {
                   alert(winner)
                   navigate("/dashboard")
                }}
                primaryColor="white"
                contrastColor="black"
                buttonText="Draw!"
                />
                </div>
    </div>
  )
}

export default Spin
