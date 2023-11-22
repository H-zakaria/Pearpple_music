import React, { useEffect, useState } from "react";
import "./navigation.scss";
import { BiSolidPear } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoPlayCircleOutline } from "react-icons/io5";
import { PiSquaresFourLight } from "react-icons/pi";
import { IoIosRadio, IoIosSearch } from "react-icons/io";
import Burger from "./burger_btn/Burger";
import Links from "./mobile_links_list/Links";
import SearchInput from "./search_input/SearchInput";
import { useMediaQuery } from "react-responsive";

const iconSize = 34;
const mobileRoutes = [
  {
    path: "/",
    title: "Listen Now",
    icon: <IoPlayCircleOutline />,
    iconSize: iconSize,
  },
  {
    path: "/browse",
    title: "Browse",
    icon: <PiSquaresFourLight />,
    iconSize: iconSize,
  },
  {
    path: "/radio",
    title: "Radio",
    icon: <IoIosRadio />,
    iconSize: iconSize,
  },
  {
    path: "/search",
    title: "Search",
    icon: <IoIosSearch />,
    iconSize: iconSize,
  },
];

const Navigation: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [currentNavRoutes, setCurrentNavRoutes] = useState(mobileRoutes);
  //eviter l'animation en resize --- comme un reset
  const [resetAnimationsStates, setResetAnimationsStates] = useState(false);

  const isTablet = useMediaQuery({
    query: "(min-width: 483px)",
  });

  useEffect(() => {
    if (isTablet) {
      setResetAnimationsStates(true);
      setExpanded(false);
      const tabletRoutes = mobileRoutes.filter(
        (route) => route.title !== "Search"
      );
      setCurrentNavRoutes(tabletRoutes);
    } else {
      setResetAnimationsStates(false);
      setCurrentNavRoutes(mobileRoutes);
    }
  }, [isTablet]);

  return (
    <div className="top_nav">
      <div className="relative_wrap">
        <div className="top">
          <Burger
            expanded={expanded}
            setExpanded={setExpanded}
            resetAnimationsStates={resetAnimationsStates}
          />
          <button className="logo">
            <span>
              <BiSolidPear />
            </span>
            <Link to={"/"} className="link">
              Music
            </Link>
          </button>
          <button className="signin_btn">sign in</button>
          <SearchInput />
        </div>
      </div>
      <Links
        routes={currentNavRoutes}
        expanded={expanded}
        resetAnimationsStates={resetAnimationsStates}
      />
    </div>
  );
};

export default Navigation;
