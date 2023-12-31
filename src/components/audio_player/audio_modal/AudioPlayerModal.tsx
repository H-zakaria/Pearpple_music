import React from "react";
import "./audio_player_modal.scss";

import {
  IoMusicalNotes,
  IoPlay,
  IoPlayBack,
  IoPlayForward,
  IoVolumeHigh,
  IoVolumeOff,
} from "react-icons/io5";
import { TbChevronCompactDown } from "react-icons/tb";

interface Props {
  showPlayerModal: boolean;
  setShowPlayerModal: (arg: boolean) => void;
}
const AudioPlayerModal: React.FC<Props> = ({
  showPlayerModal,
  setShowPlayerModal,
}) => {
  let soundValue = 45;
  return (
    <div id="audio_player_modal" className={showPlayerModal ? "active" : ""}>
      <div className="container">
        <button
          className="close_modal_btn"
          onClick={() => setShowPlayerModal(false)}
        >
          <TbChevronCompactDown size={32} />
        </button>

        <div className="jacket_skeleton">
          <IoMusicalNotes />
        </div>
        <div className="modal_audio_controls">
          <div className="time_progress_bar_container">
            <div className="time_progress_bar bar"></div>
            <div className="time_progress_metrics">
              <span>0:00</span>
              <span>-0:00</span>
            </div>
          </div>
          <div className="audio_buttons_container">
            <div className="audio_buttons">
              <button>
                <IoPlayBack size={35} />
              </button>
              <button>
                <IoPlay size={45} />
              </button>
              <button>
                <IoPlayForward size={35} />
              </button>
            </div>
          </div>
          <div className="sound_control_bar_container">
            <button>
              <IoVolumeOff size={20} />
            </button>
            <div className="sound_control_bar bar">
              <div
                className="bar_fill"
                style={{ width: soundValue + "%" }}
              ></div>
            </div>
            <button>
              <IoVolumeHigh size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayerModal;
