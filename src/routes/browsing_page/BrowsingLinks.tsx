import React from "react";
import "./browsing_links.scss";
import { IoChevronForwardSharp } from "react-icons/io5";
const links = [
  "Send Free Trial to Friends",
  "Moods and Activities",
  "Music Videos",
  "Browse by Genre",
  "Worldwide",
  "Spatial Audio",
  "Decades",
  "Charts",
];

const BrowsingLinks: React.FC = () => {
  return (
    <div className="browsing_links">
      {links.map((link) => (
        <div className="browsing_link" key={link}>
          <div className="title">{link}</div>
          <IoChevronForwardSharp />
        </div>
      ))}
    </div>
  );
};

export default BrowsingLinks;
