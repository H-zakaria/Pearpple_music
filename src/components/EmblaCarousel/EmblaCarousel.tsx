import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";

import { NextButton, PrevButton } from "./EmblaCarouselButtons";
import "./embla_carousel.scss";
useEmblaCarousel.globalOptions = { loop: false };

const EmblaCarousel = ({
  children,
  doubleRow = false,
  className,
  sectionTitle,
}: {
  children: React.ReactNode;
  doubleRow?: boolean;
  className?: string;
  sectionTitle?: string;
}) => {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    slidesToScroll: className == "small_cards" ? 2 : 1,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  useEffect(() => {
    if (embla) {
      const onSelect = () => {
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
      };

      embla.on("select", onSelect);
      onSelect();
    }
  }, [embla]);

  return (
    <div className="embla_wrapper">
      {sectionTitle && <h3 className="section_title">{sectionTitle}</h3>}
      <div className={`embla ${doubleRow ? "double_row" : ""}`} ref={emblaRef}>
        <div className={`embla__container ${className ? className : ""}`}>
          {children &&
            React.Children.map(children, (Child, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide_inner">{Child}</div>
              </div>
            ))}
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  );
};

export default EmblaCarousel;
