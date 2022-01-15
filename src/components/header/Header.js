import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
         <em> Expense Tracker</em> 
         <i class="far fa-credit-card"></i>
        </div>
        <button className="header-button">
          <a
            href="https://github.com/Rajeev745"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="devicon-github-original colored" />
            Star
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;