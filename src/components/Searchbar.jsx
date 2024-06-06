
import React, { useState } from "react";

export default function SearchBar({ onSearchChange, onStockChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearchChange(e.target.value);
  };

  const handleStockChange = (e) => {
    setInStockOnly(e.target.checked);
    onStockChange(e.target.checked);
  };

  return (
    <div className="search">
      <p style={{ color: "white" }}>
        <b>Search Bar</b>
      </p>
      <div>
        <input
          className="searchbar"
          type="text"
          placeholder="Search...."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <br></br>
      <label style={{ color: "white" }}>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleStockChange}
        />
        <b>Only show products in stock</b>
      </label>
    </div>
  );
}