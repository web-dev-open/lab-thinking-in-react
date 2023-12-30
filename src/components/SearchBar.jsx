import React, { useState } from 'react'

const SearchBar = ({onSearch,onCheckBoxChange}) => {
  const [searchTerm,setSearchTerm] = useState('');
  const[InStockOnly,setInStockOnly] = useState(false);

  const handleChange = (e)=>{
      const value = e.target.value;
      setSearchTerm(value)
      onSearch(value,InStockOnly)
  }

  const handleCheckBoxChange = ()=>{
    const newStockOnly = !InStockOnly;
    setInStockOnly(newStockOnly)
    onCheckBoxChange(searchTerm,newStockOnly);
  }


  return (
    <form>
    <label>Search</label>
    <br />
      <input
      onChange={handleChange}
       type="text"
       />
      {""}
      <br />
      <label>
      <input
      onChange={handleCheckBoxChange}
       type="checkbox" 
       />
      only show product in Stock

      </label>

    </form>
  )
}

export default SearchBar
