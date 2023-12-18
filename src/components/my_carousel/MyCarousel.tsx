import React, { useEffect, useRef, useState } from "react";
import "./my_carousel.scss";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import CarouselItem from "./CarouselItem";
import useWindowWide from "../../hooks/useWindowSize";
import { isBrowser } from "react-device-detect";

export type Breakpoint = {
  elementWidth: number | string;
  itemsToScroll: number;
  screenWidth: number;
};

interface Props {
  items: Array<React.ReactNode>;
  gridGap: number;
  breakpoints?: Array<Breakpoint>;
  doubleRow?: boolean;
  carouselHeight?: string;
  rows?: string;
  columns?: string;
}
const MyCarousel: React.FC<Props> = ({
  items,
  gridGap,
  breakpoints,
  doubleRow = false,
  carouselHeight,
  rows,
  columns,
}) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const itemsContainerRef = useRef<HTMLDivElement | null>(null);
  const [maxScrolledBack, setMaxScrolledBack] = useState(true);
  const [maxScrolledForward, setMaxScrolledForward] = useState(false);
  const [scrollDistance, setScrollDistance] = useState(100);
  const [itemWidth, setItemWidth] = useState<number | string>(0);
  //faire un objet qui contient l'état de chaque slide/item, avec sa référence et si elle est visible ou non

  const winSize = useWindowWide();

  useEffect(() => {
    let maxScrollWidth =
      carouselRef.current!.scrollWidth - carouselRef.current!.clientWidth;
    if (breakpoints) {
      breakpoints.map((point) => {
        if (winSize >= point.screenWidth) {
          if (typeof point.elementWidth === "number") {
            setItemWidth(point.elementWidth);
            let toScroll =
              point.elementWidth * point.itemsToScroll +
              (gridGap + 100) / (items.length - 2);
            setScrollDistance(toScroll);
          } else if (typeof point.elementWidth === "string") {
            let percentValue = parseFloat(point.elementWidth.split("%")[0]);
            percentValue = (percentValue / 100) * maxScrollWidth;
            setItemWidth(percentValue);
            let toScroll =
              percentValue * point.itemsToScroll + gridGap / (items.length - 2);
            setScrollDistance(toScroll);
          }
        }
      });
    } else {
      setScrollDistance(400);
    }
  }, [winSize]);

  const SlideButtons = (): JSX.Element => {
    return (
      <>
        <button
          className={`carousel_btn left ${isBrowser ? "isBrowser" : ""}`}
          style={{ visibility: maxScrolledBack ? "hidden" : "visible" }}
          onClick={handleSlideBack}
        >
          <span>
            <IoChevronBack size={30} />
          </span>
        </button>
        <button
          className={`carousel_btn right ${isBrowser ? "isBrowser" : ""}`}
          style={{ visibility: maxScrolledForward ? "hidden" : "visible" }}
          onClick={handleSlideForward}
        >
          <span>
            <IoChevronForward size={30} />
          </span>
        </button>
      </>
    );
  };
  function handleSlideBack() {
    setMaxScrolledForward(false);

    itemsContainerRef.current?.scroll({
      behavior: "smooth",
      left: itemsContainerRef.current.scrollLeft - scrollDistance,
    });
    if (itemsContainerRef.current?.scrollLeft == 0) {
      setMaxScrolledBack(true);
    }
    setTimeout(() => {
      if (itemsContainerRef.current?.scrollLeft == 0) {
        setMaxScrolledBack(true);
      }
    }, 1000);
  }
  function handleSlideForward() {
    let item = itemsContainerRef.current;

    if (item) {
      let maxScrollWidth = item.scrollWidth - item.clientWidth;
      setMaxScrolledBack(false);

      itemsContainerRef.current?.scroll({
        behavior: "smooth",
        left: itemsContainerRef.current.scrollLeft + scrollDistance,
      });
      setTimeout(() => {
        if (itemsContainerRef.current!.scrollLeft >= maxScrollWidth) {
          setMaxScrolledForward(true);
        }
      }, 1000);
    }
  }

  return (
    <>
      {items && (
        <div
          className="carousel"
          ref={carouselRef}
          style={{
            height: carouselHeight ? carouselHeight : "auto",
          }}
        >
          {doubleRow ? (
            <div
              className={`items_container`}
              ref={itemsContainerRef}
              style={{
                gridTemplateColumns: `repeat(${Math.ceil(
                  items.length / 2
                )},1fr)`,
                gap: gridGap,
                gridTemplateRows: "1fr 1fr",
              }}
            >
              {items.map((item, i) => (
                <CarouselItem item={item} key={i} width={itemWidth} />
              ))}
            </div>
          ) : (
            <div
              className={`items_container`}
              ref={itemsContainerRef}
              style={{
                gridTemplateColumns: columns
                  ? columns
                  : `repeat(${items.length}, 1fr)`,
                gap: gridGap,
                gridTemplateRows: rows ? rows : "1fr",
              }}
            >
              {items.map((item, i) => (
                <CarouselItem item={item} key={i} width={itemWidth} />
              ))}
            </div>
          )}
          <SlideButtons />
        </div>
      )}
    </>
  );
};

export default MyCarousel;
