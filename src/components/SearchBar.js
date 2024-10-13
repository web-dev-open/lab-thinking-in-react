// src/components/SearchBar.js
function SearchBar({ onSearch, showInStock, onToggleInStock }) {
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={showInStock}
            onChange={onToggleInStock}
          />
          Only show products in stock
        </label>
      </div>
    );
  }
  
  export default SearchBar;
  