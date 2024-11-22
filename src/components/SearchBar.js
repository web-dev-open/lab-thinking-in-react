function SearchBar({ searchTerm, setSearchTerm, inStockOnly, setInStockOnly }) {
    return (
        <div className="mb-4">
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="border border-gray-300 rounded p-2 mr-2"
            />
            <label className="flex items-center">
                <input 
                    type="checkbox" 
                    checked={inStockOnly} 
                    onChange={(e) => setInStockOnly(e.target.checked)} 
                    className="mr-1"
                />
                Only show products in stock
            </label>
        </div>
    );
}

export default SearchBar;