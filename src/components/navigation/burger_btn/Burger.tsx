import React, { useEffect, useState } from "react";
import "./burger.scss";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
interface Props {
  expanded: boolean;
  setExpanded: (arg: boolean) => void;
  resetAnimationsStates: boolean;
}
const Burger: React.FC<Props> = ({
  expanded,
  setExpanded,
  resetAnimationsStates,
}) => {
  const [wasOpenedOnce, setWasOpenedOnce] = useState<boolean>(false);

  useEffect(() => {
    if (resetAnimationsStates) {
      setWasOpenedOnce(false);
    }
  }, [resetAnimationsStates]);

  function toggleBurger() {
    if (expanded) {
      setExpanded(false);
    } else {
      setWasOpenedOnce(true);
      setExpanded(true);
    }
  }

  return (
    <button
      onClick={toggleBurger}
      className={
        "burger " + (expanded ? "expanded" : wasOpenedOnce ? "closed" : "")
      }
    >
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </button>
  );
};

export default Burger;
