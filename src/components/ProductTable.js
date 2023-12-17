import ProductRow from "./ProductRow";

export default function ProductTable({products}){
    return (
        <table style={{width: "100%", marginTop: "40px"}}>
            <thead>
                <th>Name</th>
                <th>Price</th>
            </thead>
            <tbody>
                {
                    products.map(product => (
                        <ProductRow key={product.id} product={product}/>
                    ))
                }
            </tbody>
        </table>
    )
}