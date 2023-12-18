import React from "react";

interface Props {
  item: React.ReactNode;
  width: number | string;
}

const CarouselItem: React.FC<Props> = ({ item, width }) => {
  return (
    <div
      className="carousel-item"
      style={{ width: typeof width === "string" ? width : width + "px" }}
    >
      {item}
    </div>
  );
};

export default CarouselItem;
