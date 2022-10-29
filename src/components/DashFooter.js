import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCommentAlt,
  faCreditCard,
  faGift,
  faHome,
  faMobileAlt,
  faReceipt,
  faSearch,
  faUserAlt,
  faUserFriends,
} from "@fortawesome/fontawesome-free-solid";
import { Link } from 'react-router-dom';

function DashFooter({ selected }) {
  console.log(selected)
  return (
      <div className="dash_footer">
              <Link to={"/dashboard"} className="footer_options">
           <img src="/assets/home.png" alt="" />
          <p className={`${selected=="home" && "selected"}`} >Home</p>
        </Link>
         <Link to={"/invite"} className="footer_options">
       <img src="/assets/add-group.png" alt="" />
          <p className={`${selected=="invite" && "selected"}`} >Invite</p>
          </Link>
          <Link to={"/recharge"} className="footer_options">
           <img src="/assets/wallet.png" alt="" />
          <p className={`${selected=="recharge" && "selected"}`} >Recharge</p>
        </Link>
         <Link to={"/my"} className="footer_options">
           <img src="/assets/user.png" alt="" />
        <p className={`${selected=="my" && "selected"}`} >My</p>
        </Link>
      </div>
  )
}

export default DashFooter
