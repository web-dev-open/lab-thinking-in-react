import './ProductRow.css'

function ProductRow(props)
{
    let color='red';
    if(props.stock)
       color='green'
    return <div className="row" style={{color:color}}>
        <h3>{props.name}</h3>
        <h3>{props.price}</h3>
    </div>
}
export default ProductRow