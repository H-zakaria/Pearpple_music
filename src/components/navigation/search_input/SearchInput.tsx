import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchInput: React.FC = () => {
  const [searchBarFocus, setSearchBarFocus] = useState(false);
  return (
    <div className={"searchbar " + (searchBarFocus ? "focused" : "")}>
      <button>
        <IoIosSearch size={16} />
      </button>
      <input
        type="text"
        placeholder="Search"
        onFocus={(e) => setSearchBarFocus(true)}
        onBlur={(e) => setSearchBarFocus(false)}
      />
    </div>
  );
};

export default SearchInput;
