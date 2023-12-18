import React from "react";
import "./mobile_audio_player.scss";
import { IoMusicalNotes, IoPlayForward, IoPlay } from "react-icons/io5";

interface Props {
  setShowPlayerModal: (arg: boolean) => void;
}
const MobileAudioPlayer: React.FC<Props> = ({ setShowPlayerModal }) => {
  return (
    <div id="mobile_audio_player">
      <div className="player">
        <button
          className="show_player_btn"
          onClick={() => setShowPlayerModal(true)}
        >
          <IoMusicalNotes size={22} />
        </button>
        <div className="mobile_player_controls">
          <button className="play">
            <IoPlay size={30} />
          </button>
          <button className="next">
            <IoPlayForward size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileAudioPlayer;
