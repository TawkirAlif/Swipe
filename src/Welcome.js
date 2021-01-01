import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="fadeIn">
      <div className="welcome_box">
        <img
          className="welcome_img"
          src="https://pbs.twimg.com/media/Eo3bX7PVEAINkoP?format=png&name=small"
          alt=""
        />
        <img
          className="loadingImg"
          src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
          alt=""
        />
      </div>
    </div>
  );
}

export default Welcome;
