// src/components/SearchBar.js
function SearchBar({ searchQuery, setSearchQuery, inStockOnly, setInStockOnly }) {
  return (
    <div style={{ marginBottom: '20px', textAlign: 'left' }}>
      <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Search</label>
      <input 
        type="text" 
        placeholder="Search products..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
      />
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
        <input 
          type="checkbox" 
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;