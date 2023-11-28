import React from "react";
import { AppPage } from "../../components/app_page/AppPage";
import { BiSolidPear } from "react-icons/bi";
import { IoChevronForwardSharp } from "react-icons/io5";
import "./listen_now.scss";
import img from "../../assets/listen_now.webp";

const ListenNow: React.FC = () => {
  return (
    <AppPage noPaddingTop={true}>
      <div id="listen_now_page">
        <section className="pitch">
          <div className="logo">
            <span className="icon">
              <BiSolidPear size={24} />
            </span>
            <h1>Music</h1>
          </div>
          <h1 className="catch">Discover new music every day.</h1>
          <p className="offer">
            Get playlists and albums inspired by the artists and genres you're
            listening to. 1 month free, then $10.99/month.
          </p>
          <button className="try_offer">Try it Free</button>
          <span>
            <a href="#">Learn More</a>
            <IoChevronForwardSharp size={12} />
          </span>
        </section>
        <div className="img_container">
          <img src={img} alt="app_preview" />
        </div>
      </div>
    </AppPage>
  );
};

export default ListenNow;
