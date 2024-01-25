import React from 'react';

function SearchBar({ filterText, onFilterTextChange, onInStockOnlyChange }) {
  const handleFilterTextChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  const handleInStockOnlyChange = (e) => {
    onInStockOnlyChange(e.target.checked);
  };

  return (
    <form>
      <label>
        Search
      </label>
      <input
        type="text"
        value={filterText}
        onChange={handleFilterTextChange}
        style={{width: '100%'}}
      />
      <label>
        <input
          type="checkbox"
          onChange={handleInStockOnlyChange}
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;