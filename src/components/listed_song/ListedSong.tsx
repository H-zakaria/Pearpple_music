import React, { useEffect, useState } from "react";
import "./listed_song.scss";
import { RxDotsHorizontal } from "react-icons/rx";
import { IoPlay } from "react-icons/io5";

interface Props {
  index: number;
}
const ListedSong: React.FC<Props> = ({ index }) => {
  const [img_src, setImg_src] = useState("");

  useEffect(() => {
    setImg_src(
      `https://source.unsplash.com/random/?album/200x200?sig=${index}`
    );
  }, []);
  return (
    <div className="listed_song">
      <div className="image_container">
        <img src={img_src} alt="album cover" />
        <div className="overlay">
          <span>
            <IoPlay size={20} />
          </span>
        </div>
      </div>
      <div className="description">
        <span className="title">song title</span>
        <span className="artist">artist name</span>
      </div>
      <span className="more">
        <RxDotsHorizontal size={20} />
      </span>
    </div>
  );
};

export default ListedSong;
