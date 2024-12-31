import './Header.css';
import { LOGO_IMG } from '../utils/constants';
import { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';


const Header= () => {


  const [loginText, setloginText]=useState("login")
  
  const OnlineStatus=useOnlineStatus();

  const {loggedInUser}=useContext(UserContext);
  
  
  //subscribing to the store using a selector
  const cartItems=useSelector((store)=>store.cart.items);
  // console.log(cartItems);

  return(
    <header className="head">
      <div className="logo">
        <Link>
          <img src={LOGO_IMG} alt='logo'/>
          <p>FoodPlex</p>
        </Link>
      </div>

      <div className="nav-items"> 
        <ul className='ull-head'>

          {OnlineStatus?<div className='colG circle'></div>:<div className='colR circle'></div>}

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/NorthIndianPage">North Indian</Link>
          </li>
          
          <li>
            <Link to="/cart">Cart- ({cartItems.length} items) </Link>
          </li>

          <li>
            <Link to="/contact">Contact us</Link>
          </li>

          <li>
            <Link to="/about">About us</Link>
          </li>

          <li>
            <button
              className="loginBtn"
              onClick={()=>{
                loginText==="login"?setloginText("logout"):setloginText("login");
              }}
            >
              {loginText}
            </button>
            <span>{loggedInUser}</span>
          </li>
        </ul>
      </div>

    </header>
  );
}

export default Header;