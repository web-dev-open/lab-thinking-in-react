import './ProductRow.css'
export default function ProductRow({ product }) {
    return (
            <tr className='ProductRow'>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
    )
}