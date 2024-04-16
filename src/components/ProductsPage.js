import React, { useState, useEffect } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTables';

export default function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [key, setKey] = useState(0);
    const [showOnlyInStock, setShowOnlyInStock] = useState(false);

    const handleSearch = (searchTerm) => {
        const filteredProducts = jsonData.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filteredProducts);
      setKey(prevKey => prevKey + 1);
    };
  
    useEffect(() => {
     setProducts(jsonData);
    }, []);
    const handleCheckboxChange = () => {
        setShowOnlyInStock(!showOnlyInStock);
    };
    const filteredProducts = showOnlyInStock ? products.filter(product => product.inStock) : products;
    return (
        <div style={{ margin: '20px', padding: '15px', border: '2px solid #ccc', borderRadius: '10px' }}>
        <h1 style={{ fontSize: '36px', color: '#4f5eff', marginBottom: '10px' }}><u>Root Store</u></h1>
        <SearchBar handleSearch={handleSearch} handleCheckboxChange={handleCheckboxChange} checked={showOnlyInStock}/>
        <ProductTable key={key} products={filteredProducts} /> 
      </div>
    );
  }