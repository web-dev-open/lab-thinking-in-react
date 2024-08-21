import "./ProductTable.css";
import ProductRow from "./ProductRow";

function ProductTable({ prodList }) {
  let prodItems = prodList.map((item) => (
    <ProductRow
      prodName={item.name}
      price={item.price}
      stock={item.inStock}
      key={item.id}
    />
  ));
  return (
    <table id="tablebox">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{prodItems}</tbody>
    </table>
  );
}

export default ProductTable;
