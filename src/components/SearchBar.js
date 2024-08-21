import "./SearchBar.css";

function SearchBar({ onTypeChange, onChecked }) {
  return (
    <div id="search-bar">
      <div>Search</div>
      <input type="text" id="psearch" onChange={onTypeChange} />
      <div>
        <input type="checkbox" id="sfilter" onChange={onChecked} />
        <label htmlFor="sfilter">Only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
