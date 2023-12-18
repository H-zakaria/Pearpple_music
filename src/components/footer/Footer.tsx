import React from "react";
import "./footer.scss";
import { AiOutlineCopyright } from "react-icons/ai";

const languages = [
  "United States",
  "Español(México)",
  "العربية",
  "Русский",
  "Français(France)",
  "한국어",
  "Português(Brazil)",
  "Tiếng Việt",
  "中國語文",
];
const Footer: React.FC = () => {
  return (
    <footer>
      <ul className="languages">
        {languages.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <div className="copyright">
        Copyright{" "}
        <span className="cr_icon">
          <AiOutlineCopyright size={12} />
        </span>{" "}
        2023 <span className="company_name">Pearple Inc.</span> All rights
        reserved.
      </div>
      <ul className="additionnal_links">
        <li>Internet service terms</li>
        <li>Pearple music and privacy</li>
        <li>cookie warning</li>
        <li>support</li>
        <li>feedback</li>
      </ul>
    </footer>
  );
};

export default Footer;
