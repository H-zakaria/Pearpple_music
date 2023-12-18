import React, { useEffect, useState } from "react";
import "./large_card.scss";
import CardOverlay from "../card_overlay/CardOverlay";

interface Props {
  index: number;
  theme: string;
}
const LargeCard: React.FC<Props> = ({ index, theme }) => {
  const [img_src, setImg_src] = useState("");

  useEffect(() => {
    setImg_src(
      `https://source.unsplash.com/random/?${theme}/600x400?sig=${index}`
    );
  }, []);

  return (
    <div className="large_card">
      <div className="large_card_infos">
        <span className="info_1">info 1</span>
        <span className="info_2">info text 2 &&&&&</span>
        <span className="info_3">info 3</span>
      </div>
      <div className="image_container">
        <CardOverlay />
        <img src={img_src} alt="random_image" />
      </div>
    </div>
  );
};

export default LargeCard;
