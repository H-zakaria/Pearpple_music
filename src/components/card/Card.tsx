import React, { useEffect, useState } from "react";
import "./card.scss";
import CardOverlay from "../card_overlay/CardOverlay";

interface Props {
  index: number;
  theme: string;
}
const Card: React.FC<Props> = ({ index, theme }) => {
  const [img_src, setImg_src] = useState("");
  useEffect(() => {
    setImg_src(
      `https://source.unsplash.com/random/?${theme}/400x400?sig=${index}`
    );
  }, []);

  return (
    <div className="card">
      <div className="image_container">
        <img src={img_src} alt="random_image" />
        <CardOverlay />
      </div>
      <div className="card_infos">
        <span className="title">title</span>
        <span className="info_2">artist or category</span>
      </div>
    </div>
  );
};

export default Card;
