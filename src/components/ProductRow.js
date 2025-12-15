function ProductRow({ product }) {
  const textStyle = {
    color: product.inStock ? "black" : "red",
  };

  return (
    <tr>
      <td style={textStyle}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
