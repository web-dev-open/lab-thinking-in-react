function ProductRow({ product }) {
    return (
        <tr style={{ color: product.inStock ? 'black' : 'red' }}>
            <td className="py-2 px-4 border-b">{product.name}</td>
            <td className="py-2 px-4 border-b">{product.category}</td>
            <td className="py-2 px-4 border-b">{product.price}</td>
            <td className="py-2 px-4 border-b">{product.inStock ? 'Yes' : 'No'}</td>
        </tr>
    );
}

export default ProductRow;