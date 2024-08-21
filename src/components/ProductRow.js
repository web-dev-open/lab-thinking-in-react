function ProductRow({ prodName, price, stock }) {
  let itemColor = stock ? "black" : "red";
  return (
    <tr>
      <td style={{ color: itemColor }}>{prodName}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
