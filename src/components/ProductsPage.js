import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [searchTerm, setSearchTerm] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const filteredProducts = products.filter(product => {
        const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesInStock = !inStockOnly || product.inStock;
        return matchesSearchTerm && matchesInStock;
    });

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Root Store</h1>
            <SearchBar 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                inStockOnly={inStockOnly} 
                setInStockOnly={setInStockOnly} 
            />
            <ProductTable products={filteredProducts} />
        </div>
    );
}

export default ProductsPage;