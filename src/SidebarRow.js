import { Avatar } from "@material-ui/core";
import TrandingIcon from "@material-ui/icons/Ballot";
import React from "react";
import "./SidebarRow.css";
import Badge from "./Badge";

function SidebarRow({ verified, profilePic, username,}) {
  return (
    <div className="sidebarRow">
      <div className="userInfo_box">
        <Avatar className="user_avatar" src={profilePic}/>
        <h8>{username}</h8>
        <div className="Badges">
              <span>{verified && <Badge className="post_badge" />}</span>
            </div>
      </div>
      <div className="buttonInfo_box">
        <div className="covidInfo_box">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png?_nc_eui2=AeEXYjRS42KNuNKuzNUJaxT7C4TVz-PYFxULhNXP49gXFRXO5L7h7tlteJ4pHE4hkX1VfrzuStlVYYUO5R3gZsGX"
            alt=""
          />
          <h7>COVID-19 Information Center</h7>
        </div>
        <div className="followerInfo_box">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeGUQ_t_g-ooSthjC_WKz0JgqfpKmA4GtxSp-kqYDga3FG5q9K8f-EvdZ2OI5bJUeL1Q-cPXnj4lxsunVL8zgzE9"
            alt=""
          />
          <h7>Followers</h7>
        </div>
        <div className="musicInfo_box">
          <img
            src="https://purepng.com/public/uploads/large/purepng.com-play-music-icon-android-lollipopsymbolsiconsgooglegoogle-iconsandroid-lollipoplollipop-iconsandroid-50-721522597267vg2xw.png"
            alt=""
          />
          <h7>Music</h7>
        </div>
        <div className="trandingInfo_box">
          <img
            src="https://i.pinimg.com/originals/5d/7d/6d/5d7d6dc0add2fc7e6a2379e0a57e80b5.png"
            alt=""
          />
          <h7>On Tranding</h7>
        </div>
        <div className="gameInfo_box">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png?_nc_eui2=AeHSuiQh6oSTKjXux0T0v08Gnh-wUgbTF8ueH7BSBtMXyxE1GfqcqvQ3iY8uSdxaazvHukU3ZVcSR-QMIUMEFoPm"
            alt=""
          />
          <h7>Games</h7>
        </div>

        <div className="threeOption_box">
          <div className="adInfo_box">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/CwKNCefmHON.png?_nc_eui2=AeGLHxm50G3ZvWr-1mDmmtKgdJ1I9kdbuqh0nUj2R1u6qNsNNarNmyQvj6U9rA22OPv_62x8HqNIr_x7hCiKU3Xb"
              alt=""
            />
            <h7>Ad Center</h7>
          </div>
          <div className="offerInfo_box">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/NYOGcd-z-qs.png?_nc_eui2=AeFl5DkYiN4LqcvzzarcQNVRCtL2vQiEDDAK0va9CIQMMKj9QNktubQIrmSBcApP5ZewCHwKm9aiyDGXaCmPurGw"
              alt=""
            />
            <h7>Offer</h7>
          </div>
          <div className="watherInfo_box">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/bo0Zt72NIra.png?_nc_eui2=AeGuqhEQa4tUMz9Aml1TkePgdpCQBhan_k52kJAGFqf-TkJeJxba266JCMtHHwDXIRRxyfoMeE6x8Fca3sxO1CXT"
              alt=""
            />
            <h7>Weather</h7>
          </div>
        </div>
      </div>

      <div className="sidebarBottom_box"></div>
    </div>
  );
}

export default SidebarRow;
