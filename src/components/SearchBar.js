import './SearchBar.css';
export default function SearchBar({ onSearch, onInStockChange }) {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  const handleInStockChange = (event) => {
    onInStockChange(event.target.checked);
  };
  return (
    <div className="SearchBar">
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      <label>
        <input type="checkbox" onChange={handleInStockChange} />
        Only show products in stock
      </label>
    </div>
  );
}
