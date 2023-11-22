import React, { useEffect, useState } from "react";
import "./burger.scss";
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
  const [wasClosed, setWasClosed] = useState(false);

  function toggleBurger() {
    if (expanded) {
      setWasClosed(true);
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  }
  useEffect(() => {
    if (resetAnimationsStates) {
      setWasClosed(false);
    }
  }, [resetAnimationsStates]);

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
