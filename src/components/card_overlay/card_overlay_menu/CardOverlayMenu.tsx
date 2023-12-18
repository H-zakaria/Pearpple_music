import React, { useState } from "react";
import "./card_overlay_menu.scss";
import { LuFocus } from "react-icons/lu";
import { TbCards } from "react-icons/tb";
import { RxDotsHorizontal } from "react-icons/rx";

const CardOverlayMenu: React.FC = () => {
  const [iconFocussed, setIconFocussed] = useState(false);
  return (
    <div
      className="card_overlay_menu"
      onMouseOver={() => setIconFocussed(true)}
      onMouseLeave={() => setIconFocussed(false)}
    >
      <span
        className={`focus ${iconFocussed ? "active" : ""}`}
        title="visual search"
      >
        <LuFocus size={20} />
      </span>
      <span
        className={`secondary_icon ${iconFocussed ? "active" : ""}`}
        title="add to your collection"
      >
        <TbCards size={20} />
      </span>
      <span
        className={`secondary_icon ${iconFocussed ? "active" : ""}`}
        title="settings"
      >
        <RxDotsHorizontal size={20} />
      </span>
    </div>
  );
};

export default CardOverlayMenu;
