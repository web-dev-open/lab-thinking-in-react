function SearchBar({
  searchText,
  onSearchChange,
  inStockOnly,
  onInStockChange,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <div>
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockChange(e.target.checked)}
          />
          Only show products in stock
        </label>
      </div>
    </div>
  );
}

export default SearchBar;
