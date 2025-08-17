function ProductRow({ product }) {
  const nameStyle = {
    color: product.inStock ? "black" : "red",
  };

  return (
    <tr>
      <td style={nameStyle}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
