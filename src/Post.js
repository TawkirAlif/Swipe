import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Post.css";
import Badge from "./Badge";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";

function Posts({
  profilePic,
  image,
  username,
  verified,
  postInfo,
  timestemp,
  message,
  reactCount,
  commentCount,
  shareCount,
  comment,
}) {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
  };
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar" />
        <div classNmae="post_info">
          <div className="user_info">
            <div className="user_name">
              <h3>{username}</h3>
            </div>
            <div className="badges">
              <span>{verified && <Badge className="post_badge" />}</span>
            </div>
          </div>
          <div className="posting_info">
            <div className="post_time">
              <p>{timestemp}</p>
            </div>
            <div className="postInfo">
              <p>{postInfo}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="post_message">
        <p>{message}</p>
      </div>

      <div className="post_image">
        <img src={image} alt="" />
      </div>
      <div className="postReactionInfo_box">
        <div className="postReaction_info">
          <div className="postReact_count">
            <FavoriteRoundedIcon />
            <p>{reactCount}</p>
          </div>
          <div className="shareComment_count">
            <div className="commentCount">
              <p>{commentCount} Comments</p>
            </div>
            <div className="shareCount">
              <p>{shareCount} Shares</p>
            </div>
          </div>
        </div>
      </div>
      <div className="post_options">
        <Button className="post_like_option">
          <FavoriteRoundedIcon className='love'/>
          <p className='postLikeOption'>Love</p>
        </Button>
        <Button className="post_comment_options">
          <ChatBubbleOutlineRoundedIcon className='postLikeOption' />
          <p className='postLikeOption'>Comment</p>
        </Button>
        <Button className="post_share_options">
          <ShareRoundedIcon className='postLikeOption'/>
          <p className='postLikeOption'>Share</p>
        </Button>
      </div>
        <div className="commentbox">
          <div className="comment_writing_box">
          <Avatar className='commentAvatar' src={profilePic}/>
            <input
              value={input}
              onChange={(e) => setInput(e.target.vlaue)}
              className="commentInput"
              placeholder="Comment"
            />
            <Button onClick={handleSubmit} type="submit">Post</Button>
          </div>
        </div>
    </div>
  );
}

export default Posts;
