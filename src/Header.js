import React from 'react';
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
    return (
      <div className="header">
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
        <img
          className="header__logo"
          src="https://th.bing.com/th/id/OIP.rbnndQRyfyrBSjqFntOMvQHaEK?w=322&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt="tinder-logo"
        ></img>
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </div>
    );
}

export default Header;
