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

const Navigation: React.FC = () => {
  const tabletIconSize = 20;
  const mobileIconSize = 30;

  const [iconSize, setIconSize] = useState(tabletIconSize);
  let mobileRoutes = [
    {
      path: "/listen_now",
      title: "Listen Now",
      icon: <IoPlayCircleOutline />,
    },
    {
      path: "/browse",
      title: "Browse",
      icon: <PiSquaresFourLight />,
    },
    {
      path: "/radio",
      title: "Radio",
      icon: <IoIosRadio />,
    },
    {
      path: "/search",
      title: "Search",
      icon: <IoIosSearch />,
    },
  ];

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
      // setTimeout(() => setResetAnimationsStates(false), 200);
      setExpanded(false);
      const tabletRoutes = mobileRoutes.filter(
        (route) => route.title !== "Search"
      );
      setCurrentNavRoutes(tabletRoutes);
      setIconSize(tabletIconSize);
    } else {
      setResetAnimationsStates(false);
      setCurrentNavRoutes(mobileRoutes);
      setIconSize(mobileIconSize);
    }
  }, [isTablet]);

  //ferme les liens lors de navigation mobile
  function handleMobileNavigate() {
    if (expanded) {
      setResetAnimationsStates(false);
      setExpanded(false);
    }
  }

  return (
    <div className="top_nav">
      <div className="relative_wrap">
        <div className="top">
          <Burger
            expanded={expanded}
            setExpanded={setExpanded}
            resetAnimationsStates={resetAnimationsStates}
          />
          <button className="logo" onClick={handleMobileNavigate}>
            <span>
              <BiSolidPear />
            </span>
            <Link to={"/listen_now"} className="link">
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
        iconSize={iconSize}
        handleMobileNavigate={handleMobileNavigate}
      />
    </div>
  );
};

export default Navigation;
