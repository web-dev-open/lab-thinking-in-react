import React from 'react';

const ProductRow = ({ product }) => {
  const { name, category, price, inStock } = product;
  const rowStyle = {
    color: inStock ? 'black' : 'red',
  };

  return (
    <tr style={rowStyle}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;