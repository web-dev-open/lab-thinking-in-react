

import React from 'react';

function SearchBar({ handleSearch,handleCheckboxChange }) {
  return (
    <div>
      <input type="text" placeholder="Search..." onChange={(e) => handleSearch(e.target.value)} />
      <label>
        <input type="checkbox" onChange={handleCheckboxChange} />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
