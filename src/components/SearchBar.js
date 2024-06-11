import React from 'react';

const SearchBar = ({ onSearchChange, onStockChange, inStockOnly }) => {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  const handleStockChange = (event) => {
    onStockChange(event.target.checked);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearchChange}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleStockChange}
        />
        Only show products in stock
      </label>
    </div>
  );
};

export default SearchBar;