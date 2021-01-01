import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/HomeRounded";
import NotificationsActiveRoundedIcon from "@material-ui/icons/NotificationsActiveRounded";
import VideoPlayer from "@material-ui/icons/YouTube";
import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
import FlagRoundedIcon from "@material-ui/icons/FlagRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import SettingsIcon from "@material-ui/icons/Settings";
import { Avatar } from "@material-ui/core";

function Header({username, profilePic}) {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://pbs.twimg.com/media/Eo3bX7PVEAINkoP?format=png&name=small"
          alt=""
        />
        <div className="wipe">
          <h2 className="w">w</h2>
          <h2 className="i">i</h2>
          <h2 className="p">p</h2>
          <h2 className="E">E</h2>
        </div>
        <div className="header__input">
          <SearchIcon className="search__icon" />
          <input type="text" placeholder="Search Swipe?" />
        </div>
      </div>

      <div className="header__middle">
        <div className="header__option">
          <div
            className="home__icon 
          home__icon--active"
          >
            <img src='https://www.iconpacks.net/icons/1/free-home-icon-189-thumb.png' alt='' fontSize="large" />
          </div>
          <div
            className="flag__icon
          flag__icon--active"
          >
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png?_nc_eui2=AeEcs80jwS5laW5sVR3oTxpJtEPFOzh_t-u0Q8U7OH-36-txxRxTRoaFPlgTx0dz7NVo3Q8nskOZY0xWgK4AeHod" alt='flagIcon' fontSize="large" />
          </div>
          <div
            className="notification__icon
          notification__icon--active"
          >
            <NotificationsActiveRoundedIcon fontSize="large" />
          </div>
          <div
            className="videoplayer__icon
          videoplayer__icon--active"
          >
            <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeEvHC_Hv99u3wYnf6PwNVva2NRDTXGHJ53Y1ENNcYcnnS6Zb34dNYV7sw8vRDK4WpCvrwmQ0T0n7OuYRa-5R1Vx' alt="videoIcon" fontSize="large" />
          </div>
          <div
            className="shopping__icon
          shopping__icon--active"
          >
            <img src='https://pngimage.net/wp-content/uploads/2018/06/покупки-png-5.png' alt='shoppingIcon' fontSize="large" />
          </div>
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar className='header_avater' src={profilePic}/>
          <h5>{username}</h5>
        </div>
        <div className="add__icon">
          <AddRoundedIcon fontSize="small" />
        </div>
        <div className="message__icon">
          <img src='https://cdn.iconscout.com/icon/free/png-128/messenger-2952806-2448673.png' alt='messengerIcon' fontSize="small" />
        </div>
        <div className="setting__icon">
          <SettingsIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Header;
