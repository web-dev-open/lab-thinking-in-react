function SearchBar({
  searchText,
  onSearchChange,
  inStockOnly,
  onInStockChange,
}) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockChange(e.target.checked)}
        />
        {" "}Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
