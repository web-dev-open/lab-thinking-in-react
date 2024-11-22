import ProductRow from './ProductRow';

function ProductTable({ products }) {
    return (
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
                <tr className="bg-gray-200">
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Category</th>
                    <th className="py-2 px-4 border-b">Price</th>
                    <th className="py-2 px-4 border-b">In Stock</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <ProductRow key={product.name} product={product} />
                ))}
            </tbody>
        </table>
    );
}

export default ProductTable;