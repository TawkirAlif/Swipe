import React from "react";
import "./Feed.css";
import PostCreateBox from "./PostCreateBox.js";
import Post from "./Post.js";

function Feed() {
  return (
    <div className="feed">
      <div className="postCreator_body">
        <PostCreateBox profilePic='https://scontent.fdac5-2.fna.fbcdn.net/v/t1.0-1/p100x100/131926610_404557237641850_4978944694788749490_n.jpg?_nc_cat=101&ccb=2&_nc_sid=7206a8&_nc_eui2=AeFA-xqTjrwpwVGJtZgZX56-nz6m7V-zXlCfPqbtX7NeUC9yy-pA9KiEeAtItfy8h9mFnrE0zaDmpEQfNsiUVxYi&_nc_ohc=oO_QTDE3e6kAX8Ia7mj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac5-2.fna&tp=6&oh=30e3f9d2348078c65e9dbeda6d35a743&oe=600FFFA4'/>
      </div>
      <div className="posts_container">
      <Post
          profilePic="https://scontent.fdac5-2.fna.fbcdn.net/v/t1.0-1/p100x100/131926610_404557237641850_4978944694788749490_n.jpg?_nc_cat=101&ccb=2&_nc_sid=7206a8&_nc_eui2=AeFA-xqTjrwpwVGJtZgZX56-nz6m7V-zXlCfPqbtX7NeUC9yy-pA9KiEeAtItfy8h9mFnrE0zaDmpEQfNsiUVxYi&_nc_ohc=oO_QTDE3e6kAX8Ia7mj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac5-2.fna&tp=6&oh=30e3f9d2348078c65e9dbeda6d35a743&oe=600FFFA4"
          username="Tawkir Alif"
          verified={true}
          timestemp="1h."
          postInfo="sponsored"
          message="Hey I'm the CEO of Swipe. This a social media platform, 
          where you can explore everything. In once at once. That can make you life easyer & save your most expencive time. 
          Tawkir Alif here, 
          Thank You"
          image=''
          reactCount='1.5M'
          commentCount='4.7M'
          shareCount='587K'
        />
        <Post
          profilePic="https://scontent.fdac5-2.fna.fbcdn.net/v/t1.0-1/p100x100/131926610_404557237641850_4978944694788749490_n.jpg?_nc_cat=101&ccb=2&_nc_sid=7206a8&_nc_eui2=AeFA-xqTjrwpwVGJtZgZX56-nz6m7V-zXlCfPqbtX7NeUC9yy-pA9KiEeAtItfy8h9mFnrE0zaDmpEQfNsiUVxYi&_nc_ohc=oO_QTDE3e6kAX8Ia7mj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac5-2.fna&tp=6&oh=30e3f9d2348078c65e9dbeda6d35a743&oe=600FFFA4"
          username="tawkiralif"
          verified={true}
          timestemp="1h."
          postInfo="sponsored"
          message="Hey I'm the CEO of Swipe. This a social media platform, 
          where you can explore everything. In once at once. That can make you life easyer & save your most expencive time. 
          Tawkir Alif here, 
          Thank You"
          image="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.0-9/132653192_409251250505782_2795895024999557998_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_eui2=AeGONdmY7sCqaTk0Dq2sYzcqvRkPWb3mNMq9GQ9ZveY0yrd-Wnr1d0PKjDWinesgCIWAY3uiStNqqrAR5RCUa11b&_nc_ohc=57iPpkyOTFUAX_QU7Vf&_nc_ht=scontent.fdac5-1.fna&oh=04c1cce1b97d19adb4576dc982308e23&oe=6011BD95"
          reactCount='1.5M'
          commentCount='4.7M'
          shareCount='587K'
        />
        <Post
          profilePic="https://scontent.fdac5-2.fna.fbcdn.net/v/t1.0-1/p100x100/131926610_404557237641850_4978944694788749490_n.jpg?_nc_cat=101&ccb=2&_nc_sid=7206a8&_nc_eui2=AeFA-xqTjrwpwVGJtZgZX56-nz6m7V-zXlCfPqbtX7NeUC9yy-pA9KiEeAtItfy8h9mFnrE0zaDmpEQfNsiUVxYi&_nc_ohc=oO_QTDE3e6kAX8Ia7mj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac5-2.fna&tp=6&oh=30e3f9d2348078c65e9dbeda6d35a743&oe=600FFFA4"
          username="tawkiralif"
          verified={true}
          timestemp="1h."
          postInfo="Public"
          message="Hey I'm the CEO of Swipe. This a social media platform, 
          where you can explore everything. In once at once. That can make you life easyer & save your most expencive time. 
          Tawkir Alif here, 
          Thank You"
          image="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          reactCount='1.5M'
          commentCount='4.7M'
          shareCount='587K'
        />
        <Post
          profilePic="https://scontent.fdac5-2.fna.fbcdn.net/v/t1.0-1/p100x100/131926610_404557237641850_4978944694788749490_n.jpg?_nc_cat=101&ccb=2&_nc_sid=7206a8&_nc_eui2=AeFA-xqTjrwpwVGJtZgZX56-nz6m7V-zXlCfPqbtX7NeUC9yy-pA9KiEeAtItfy8h9mFnrE0zaDmpEQfNsiUVxYi&_nc_ohc=oO_QTDE3e6kAX8Ia7mj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac5-2.fna&tp=6&oh=30e3f9d2348078c65e9dbeda6d35a743&oe=600FFFA4"
          username="tawkiralif"
          verified={true}
          timestemp="1h."
          postInfo="sponsored"
          message="Hey I'm the CEO of Swipe. This a social media platform, 
          where you can explore everything. In once at once. That can make you life easyer & save your most expencive time. 
          Tawkir Alif here, 
          Thank You"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLy_8G_NWnbipkKmtoRBq-RJt5OxiUsxfpsA&usqp=CAU"
          reactCount='1.5M'
          commentCount='4.7M'
          shareCount='587K'
        />
        <Post
          profilePic="https://scontent.fdac5-2.fna.fbcdn.net/v/t1.0-1/p100x100/131926610_404557237641850_4978944694788749490_n.jpg?_nc_cat=101&ccb=2&_nc_sid=7206a8&_nc_eui2=AeFA-xqTjrwpwVGJtZgZX56-nz6m7V-zXlCfPqbtX7NeUC9yy-pA9KiEeAtItfy8h9mFnrE0zaDmpEQfNsiUVxYi&_nc_ohc=oO_QTDE3e6kAX8Ia7mj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac5-2.fna&tp=6&oh=30e3f9d2348078c65e9dbeda6d35a743&oe=600FFFA4"
          username="tawkiralif"
          verified={true}
          timestemp="1h."
          postInfo="sponsored"
          message="Hey I'm the CEO of Swipe. This a social media platform, 
          where you can explore everything. In once at once. That can make you life easyer & save your most expencive time. 
          Tawkir Alif here, 
          Thank You"
          image="https://cdn.dribbble.com/users/267188/screenshots/1913677/swipe_example_cards_02.gif"
          reactCount='1.5M'
          commentCount='4.7M'
          shareCount='587K'
        />
      </div>
    </div>
  );
}

export default Feed;
