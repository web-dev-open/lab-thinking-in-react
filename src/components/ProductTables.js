
import ProductRow from "./ProductRow";
const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
};

const thStyle = {
    backgroundColor: '#f2f2f2',
    padding: '8px',
    color:'#006f2f'
};

const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
};

function ProductTable({ products }) {
    return (
        <div>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Category</th>
                        <th style={thStyle}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <ProductRow key={index} product={product} style={tdStyle}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;