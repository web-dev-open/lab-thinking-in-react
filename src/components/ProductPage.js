import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import jsonData from '../data.json';
import './ProductsPage.css'

export default function ProductPage() {
    const [products] = useState(jsonData);
    const [searchTerm, setSearchTerm] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleInStockChange = (inStock) => {
        setInStockOnly(inStock);
    }
    return (
        <div className="ProductsPage">
            <h1>Root Store</h1>
            <SearchBar onSearch={handleSearch} onInStockChange={handleInStockChange}/>
            <ProductTable products={products} searchTerm={searchTerm} inStockOnly={inStockOnly}/>
        </div>
    )
}