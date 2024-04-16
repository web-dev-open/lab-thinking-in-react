export default function SearchBar({ handleSearch, handleCheckboxChange, showOnlyInStock }) {
    
    return (<div style={{ marginBottom: '40px',display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center' }}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        style={{ padding: '5px',margin:'15px', width: '200px', border: '1px solid #ccc', borderRadius: '5px' }}
      />
       <input type="checkbox"  style={{ padding: '5px',margin:'15px', width: '20px',height:'20px', border: '1px solid #ccc', borderRadius: '5px' }}
      onChange={handleCheckboxChange} checked={showOnlyInStock} />
       <label style={{ marginLeft: '10px', color: '#ffee2f' }}>Show only products in stock</label>
      </div>
    );
  }