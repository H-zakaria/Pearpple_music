import React from "react";
import "./audio_menu.scss";
import {
  IoPlaySharp,
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoShuffleOutline,
  IoRepeatOutline,
} from "react-icons/io5";

const AudioMenu: React.FC = () => {
  const playIconSize = 28;
  const iconSize = 22;
  const smallerIconSize = 16;
  return (
    <div id="audio_menu">
      <div className="audio_buttons">
        <button className="smaller">
          <IoShuffleOutline size={smallerIconSize} />
        </button>
        <button>
          <IoPlayBackSharp size={iconSize} />
        </button>
        <button>
          <IoPlaySharp size={playIconSize} id="play_btn" />
        </button>
        <button>
          <IoPlayForwardSharp size={iconSize} />
        </button>
        <button className="smaller">
          <IoRepeatOutline size={smallerIconSize} />
        </button>
      </div>
    </div>
  );
};

export default AudioMenu;
