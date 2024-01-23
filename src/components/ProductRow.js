import './ProductRow.css';

import React from 'react'

export default function ProductRow(props) {

    const inStock = props.inStock;

    return (
        <tr className={inStock ? 'productRow available' : 'productRow soldOut'}>
            <td>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}
