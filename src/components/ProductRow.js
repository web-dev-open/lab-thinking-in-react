import React from "react";

const ProductRow = ({ product }) => {
  return (
    <div>
      <tr>
        <td className={`border p-2 ${!product.inStock ? "text-red-500" : ""}`}>
          {product.name}
        </td>
        <td className="border p-2">{product.price}</td>
      </tr>
    </div>
  );
};

export default ProductRow;
