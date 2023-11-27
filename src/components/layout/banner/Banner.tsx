import React, { useEffect, useState } from "react";
import "./banner.scss";
import { useMediaQuery } from "react-responsive";
import { IoMdClose } from "react-icons/io";
import { TbRulerMeasure } from "react-icons/tb";
const Banner: React.FC = () => {
  const [showDetails, setShowDetails] = useState(true);
  const [position, setPosition] = useState("top");
  const isTablet = useMediaQuery({
    query: "(min-width: 483px)",
  });
  // const isDesktop = useMediaQuery({
  //   query: "(min-width: 1010px)",
  // });
  useEffect(() => {
    if (isTablet) {
      setPosition("bot");
      setShowDetails(true);
    } else {
      setPosition("top");
    }
  }, [isTablet]);

  return (
    <div id="banner" className={position}>
      <div className="relative_container">
        {position === "top" && showDetails && (
          <button id="close_details" onClick={() => setShowDetails(false)}>
            <IoMdClose size={26} />
          </button>
        )}
        <div className={showDetails ? "text" : "no_details text"}>
          <h1>Get over 100 million songs free for 1 month.</h1>
          {showDetails == true && (
            <p>
              Plus your entire music library on all your devices, 1 month free,
              then $10.99/month.
            </p>
          )}
        </div>
        {position === "bot" && <button className="try_it">Try it Free</button>}
      </div>
    </div>
  );
};

export default Banner;
