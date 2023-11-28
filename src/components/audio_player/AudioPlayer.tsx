import React from "react";
import "./audio_player.scss";
import { IoMusicalNotesSharp, IoPersonSharp } from "react-icons/io5";
import { IoIosList } from "react-icons/io";
import { BiSolidPear } from "react-icons/bi";
import AudioMenu from "./audio_menu/AudioMenu";
import SoundInput from "./sound_input/SoundInput";

type Props = {
  setShowPlayerModal: (arg: boolean) => void;
  toggleModal: () => void;
};
const AudioPlayer: React.FC<Props> = ({ setShowPlayerModal, toggleModal }) => {
  return (
    <div id="audio_player">
      <div className="container">
        <AudioMenu />
        <div className="btn_group">
          <button
            className="modal_btn"
            onClick={() => setShowPlayerModal(true)}
          >
            <IoMusicalNotesSharp size={24} />
          </button>
          <div className="logo">
            <BiSolidPear size={24} />
          </div>
        </div>
        <SoundInput />
        <div className="btn_group">
          <button className="playlist_btn" onClick={toggleModal}>
            <IoIosList size={24} />
          </button>
          <button className="sign_in">
            <IoPersonSharp />
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
