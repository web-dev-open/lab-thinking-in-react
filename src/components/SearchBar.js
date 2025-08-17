function SearchBar({ search, setSearch, inStockOnly, setInStockOnly }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />{" "}
          Only show products in stock
        </label>
      </div>
    </div>
  );
}

export default SearchBar;
