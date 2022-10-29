
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import UserRegister from './pages/UserRegister';
import UserLogin from './pages/UserLogin';
import Dashboard from './pages/Dashboard';
import InvitePage from './pages/InvitePage';
import My from './pages/My';
import Recharge from './pages/Recharge';
import Withdraw from './pages/Withdraw';
import Rewards from './pages/Rewards';
import FastParty from './pages/FastParty';
import Spin from './pages/Spin';
import Order from './pages/Order';
import UpdateProfile from './pages/UpdateProfile';
import Forgot_password from './pages/Forgot_password';
import AndarBahar from './pages/AndarBahar';
function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/forgotpassword" element={<Forgot_password/>} />
          <Route path="/updateprofile" element={<UpdateProfile/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/withdraw" element={<Withdraw/>} />
          <Route path="/reward" element={<Rewards/>} />
          <Route path="/invite" element={<InvitePage/>} />
          <Route path="/recharge" element={<Recharge/>} />
          <Route path="/" element={<UserRegister/>} />   
          <Route path="/my" element={<My/>} />   
          <Route path="/userlogin" element={<UserLogin />} /> 
          <Route path="/fastparty" element={<FastParty/>} />
          <Route path="/spin" element={<Spin/>} />
          <Route path="/order" element={<Order />} />
          <Route path="/andarbahar" element={<AndarBahar/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
