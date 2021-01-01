import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./PostCreateBox.css";
import LiveTvRoundedIcon from "@material-ui/icons/LiveTvRounded";
import CollectionsIcon from "@material-ui/icons/Collections";
import VpnLockIcon from "@material-ui/icons/VpnLock";
import ZoomIn from "@material-ui/icons/ZoomInRounded";

function PostCreateBox({ profilePic }) {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
  };


  return (
    <div className="postcreatebox ">
      <div className="postCreator_box">
        <form>
          <div className="postInput_box">
            <Avatar className="postCreator_avatar" src={profilePic} />

            <input
              value={input}
              onChange={(e) => setInput(e.target.vlaue)}
              className="postInput"
              placeholder="Share your day ?"
            />
            <ZoomIn />
          </div>
          <div className="postBox_middle">
              <Button className="liveOption">
                <LiveTvRoundedIcon style={{ color: "red" }} />
                <h3 className='liveOption_h3'>Go Live</h3>
              </Button>
              <Button className="photoVideo_option">
                <CollectionsIcon style={{ color: "green" }} />
                <h3 className='photoVideo_option_h3'>Photo/Video</h3>
              </Button>
            <div className="postBox_audience">
              <VpnLockIcon style={{ color: "#2e81f4" }} />
              <h3>Public</h3>
            </div>
          </div>
          <div className="postBox_bottom">
            <Button onClick={handleSubmit} type="submit">
              <h5>Post</h5>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostCreateBox;
