import React from 'react'

const SearchBar = ({searchQuery, setSearchQuery, showInStock, setShowInStock}) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={showInStock}
          onChange={(e) => setShowInStock(e.target.checked)}
        />
        <span>Only show products in stock</span>
      </label>
    </div>
  )
}

export default SearchBar