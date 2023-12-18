import React from "react";
import "./card_overlay.scss";
import { RxDotsHorizontal } from "react-icons/rx";
import { IoPlay } from "react-icons/io5";
import CardOverlayMenu from "./card_overlay_menu/CardOverlayMenu";
const CardOverlay: React.FC = () => {
  return (
    <div className="card_overlay">
      <div className="content">
        <CardOverlayMenu />
        <div className="bottom">
          <span>
            <IoPlay size={20} />
          </span>
          <span>
            <RxDotsHorizontal size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardOverlay;
