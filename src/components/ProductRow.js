// src/components/ProductRow.js
function ProductRow({ product }) {
const nameStyle = {
    color: product.inStock ? 'inherit' : 'red',
    padding: '10px',
    borderBottom: '1px solid #ddd'
  };

  return (
    <tr>
      <td style={nameStyle}>
        {product.name}
      </td>
      <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
        {product.price}
      </td>
    </tr>
  );
}

export default ProductRow;
