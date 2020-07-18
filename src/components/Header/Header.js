import React from 'react';
import './Header.css';
import logo from '../../images/logo2.png';

const Header = () => {
  return (
    <div className="hader-wrapper">
      <div className="header-left">
        <img src={logo} alt="RED-ONION" />
      </div>
      <div className="header-right">
        <ul className="navbar">
          <li>
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
          </li>
          <li>
            <span className="btn-login">Login</span>
          </li>
          <li>
            <button className="btn-signup">Sign Up</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
