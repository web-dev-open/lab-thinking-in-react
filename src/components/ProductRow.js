function ProductRow({ product, index, style }) {
  const name = product.inStock ? <span>{product.name}</span> :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr key={index}>
      <td style={style}>{name}</td>
      <td style={style}>{product.category}</td>
      <td style={style}>{product.price}</td>
    </tr>
  );
}
export default ProductRow;