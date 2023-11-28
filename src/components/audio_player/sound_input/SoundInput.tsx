import React, { useEffect, useRef, useState } from "react";
import "./sound_input.scss";
import {
  IoIosVolumeMute,
  IoIosVolumeLow,
  IoIosVolumeHigh,
} from "react-icons/io";

const SoundInput: React.FC = () => {
  const iconSize = 20;
  const defaultVolume = 40;
  const [currentVolume, setCurrentVolume] = useState<number>(defaultVolume);
  const [icon, setIcon] = useState<JSX.Element>(
    <IoIosVolumeLow size={iconSize} />
  );

  useEffect(() => {
    if (currentVolume >= 70) {
      setIcon(<IoIosVolumeHigh size={iconSize} />);
    } else if (currentVolume > 0) {
      setIcon(<IoIosVolumeLow size={iconSize} />);
    } else {
      setIcon(<IoIosVolumeMute size={iconSize} />);
    }
  }, [currentVolume]);

  return (
    <div id="sound_input">
      <button className="mute" onClick={(e) => setCurrentVolume(0)}>
        {icon}
      </button>
      <div className="sound_input_bar_container">
        <input
          type="range"
          min={0}
          max={100}
          value={currentVolume}
          onChange={(e) => setCurrentVolume(parseInt(e.target.value))}
          className="sound_input_bar_cursor"
        ></input>
      </div>
    </div>
  );
};

export default SoundInput;
