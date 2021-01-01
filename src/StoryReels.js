import { Avatar } from "@material-ui/core";
import React from "react";
import "./StoryReels.css";

function StoryReels({ username, profilePic }) {
  return (
    <div>
      <div className="story_container">
        <div className="story_head">
          <div className="storyInfo_box">
            <Avatar className="avatar" src={profilePic} />
            <p>{username}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryReels;
