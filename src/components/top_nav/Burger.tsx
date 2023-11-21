import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./burger.scss";
interface Props {
  expanded: boolean;
  setExpanded: (arg: boolean) => void;
}
const Burger: React.FC<Props> = ({ expanded, setExpanded }) => {
  const [wasClosed, setWasClosed] = useState(false);

  function toggleBurger() {
    if (expanded) {
      setWasClosed(true);
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  }

  return (
    <button
      onClick={toggleBurger}
      className={
        "burger " + (expanded ? "expanded" : wasClosed ? "closed" : "")
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
