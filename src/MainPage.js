import React from "react";
import "./MainPage.css";
import Feed from "./Feed.js";
import Sidebar from "./Sidebar.js";
import Widget from "./Widget.js";
import Header from "./Header.js";

function MainPage() {
  return (
    <div>
      <div className="header__container">
        <Header username='Tawkir Alif'
          profilePic='https://scontent.fdac5-2.fna.fbcdn.net/v/t1.0-1/p100x100/131926610_404557237641850_4978944694788749490_n.jpg?_nc_cat=101&ccb=2&_nc_sid=7206a8&_nc_eui2=AeFA-xqTjrwpwVGJtZgZX56-nz6m7V-zXlCfPqbtX7NeUC9yy-pA9KiEeAtItfy8h9mFnrE0zaDmpEQfNsiUVxYi&_nc_ohc=oO_QTDE3e6kAX8Ia7mj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac5-2.fna&tp=6&oh=30e3f9d2348078c65e9dbeda6d35a743&oe=600FFFA4'
        />
      </div>
      <div className="app_body">
        <div className="sidebar_container">
          <Sidebar />
        </div>
        <div className="feed_container">
          <Feed />
        </div>
        <div className="widget_container">
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
