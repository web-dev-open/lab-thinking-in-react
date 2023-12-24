// src/components/SearchBar.js

import React, { useState } from 'react';

function SearchBar({ onSearch, onCheckboxChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value, inStockOnly);
  };

  const handleCheckboxChange = () => {
    const newInStockOnly = !inStockOnly;
    setInStockOnly(newInStockOnly);
    onCheckboxChange(searchTerm, newInStockOnly);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleCheckboxChange}
        />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
