import React from "react";

export default function Row({ product }) {
  const { name, price, inStock } = product;
  const textColor = inStock ? "black" : "red";

  return (
    <tr>
      <td style={{ color: textColor }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}