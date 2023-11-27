import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { IoIosArrowRoundUp } from "react-icons/io";
import "./links.scss";
type Route = {
  path: string;
  title: string;
  icon: JSX.Element;
};
interface Props {
  routes: Array<Route>;
  expanded: boolean;
  // setExpanded: (arg: boolean) => void;
  resetAnimationsStates: boolean;
  iconSize: number;
  handleMobileNavigate: () => void;
}
const Links: React.FC<Props> = ({
  routes,
  expanded,
  resetAnimationsStates,
  iconSize,
  handleMobileNavigate,
}) => {
  const [canAnimate, setcanAnimate] = useState(false);

  useEffect(() => {
    if (resetAnimationsStates) {
      setcanAnimate(false);
    } else {
      setcanAnimate(true);
    }
  }, [resetAnimationsStates]);

  return (
    <div
      className={
        "inner_nav " + (canAnimate ? (expanded ? "expanded" : "") : "no_expand")
      }
    >
      <ul>
        {routes.map((route) => (
          <li
            key={route.title}
            className="link_wrap"
            onClick={handleMobileNavigate}
          >
            <NavLink
              to={route.path}
              className={({ isActive, isPending }) =>
                isActive ? "active link" : isPending ? "pending link" : "link"
              }
            >
              <span className="icon_wrapper">
                <IconContext.Provider
                  value={{ size: iconSize.toString() + "px" }}
                >
                  {route.icon}
                </IconContext.Provider>
              </span>
              <span className="title"> {route.title}</span>
            </NavLink>
          </li>
        ))}

        <div className="hr"></div>
        <button>
          <span className="icon_wrapper">
            <IoMusicalNotesSharp size={20} />
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
  );
};

export default Links;
