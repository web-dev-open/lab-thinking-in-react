import ProductRow from "./ProductRow";
import './ProductTable.css';

export default function ProductTable({ products, searchTerm, inStockOnly }) {
   const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesInStock = inStockOnly ? product.inStock : true;
    return matchesSearchTerm && matchesInStock;
   })
    return (
            <table className="ProductTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product) => (
                        <ProductRow key={product.id} product={product} />
                    ))}
                </tbody>
            </table>
    )
}