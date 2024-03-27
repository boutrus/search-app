import React, { useState } from "react";
import { searchData } from "./search-vault";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    const filteredResults = searchData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
      />
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>
            {item.name} <br />
            meaning : {item.meaning}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
