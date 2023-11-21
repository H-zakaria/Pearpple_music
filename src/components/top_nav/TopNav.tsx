import React, { useState } from "react";
import "./top_nav.scss";
import { BiSolidPear } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { IoPlayCircleOutline, IoMusicalNotesSharp } from "react-icons/io5";
import { PiSquaresFourLight } from "react-icons/pi";
import { IoIosRadio, IoIosSearch, IoIosArrowRoundUp } from "react-icons/io";
import Burger from "./Burger";

const TopNav = () => {
  const [expanded, setExpanded] = useState(false);
  const iconSize = 34;
  const routes = [
    {
      path: "/",
      title: "Listen Now",
      icon: <IoPlayCircleOutline size={iconSize} />,
    },
    {
      path: "/browse",
      title: "Browse",
      icon: <PiSquaresFourLight size={iconSize} />,
    },
    { path: "/radio", title: "Radio", icon: <IoIosRadio size={iconSize} /> },
    { path: "/search", title: "Search", icon: <IoIosSearch size={iconSize} /> },
  ];
  return (
    <>
      <div className={"top_nav "}>
        <div className="top">
          <Burger expanded={expanded} setExpanded={setExpanded} />
          <button className="logo">
            <span>
              <BiSolidPear />
            </span>
            <h1>Music</h1>
          </button>
          <button>sign in</button>
        </div>
      </div>
      <div className={"inner_nav " + (expanded ? "expanded" : "")}>
        <ul>
          {routes.map((route) => (
            <li key={route.title} className="link_wrap">
              <NavLink
                to={route.path}
                className={({ isActive, isPending }) =>
                  isActive ? "active link" : isPending ? "pending link" : "link"
                }
              >
                <span className="icon_wrapper">{route.icon}</span>
                <span className="title"> {route.title}</span>
              </NavLink>
            </li>
          ))}
          <div className="hr"></div>
          <button>
            <span className="icon_wrapper">
              <IoMusicalNotesSharp size={24} />
            </span>
            <span className="title">
              Open in music
              <span className="icon_wrapper">
                <IoIosArrowRoundUp size={20} />
              </span>
            </span>
          </button>
        </ul>
      </div>
    </>
  );
};

export default TopNav;
