import React from "react";
import "./audio_player.scss";
import { IoMusicalNotesSharp, IoPersonSharp } from "react-icons/io5";
import { BiSolidPear } from "react-icons/bi";

type Props = {
  setShowPlayerModal: (arg: boolean) => void;
};
const AudioPlayer: React.FC<Props> = ({ setShowPlayerModal }) => {
  return (
    <div id="audio_player">
      <div className="container">
        <button className="modal_btn" onClick={(e) => setShowPlayerModal(true)}>
          <IoMusicalNotesSharp size={24} />
        </button>
        <div className="logo">
          <BiSolidPear size={24} />
        </div>
        <button className="sign_in">
          <IoPersonSharp />
          Sign in
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
