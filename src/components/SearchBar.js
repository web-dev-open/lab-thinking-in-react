// src/components/SearchBar.js

import React from 'react';

function SearchBar({onChangeprop}) {
  return (
    <div>
      <input type="text"  onChange={onChangeprop} placeholder="Search products" />
    </div>
  );
}

export default SearchBar;