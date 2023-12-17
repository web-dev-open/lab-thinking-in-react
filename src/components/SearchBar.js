import products from "./../data.json"

export default function SearchBar({setProducts}){

    const handleSearch = (e)  => {
        const searchInput = e.target.value;

        if(searchInput == "") {
            setProducts(products);
            return;
        }

        const searchResults = products.filter(product => product.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()));

        setProducts(searchResults);
    }

    const handleFilter = (e) => {
        const filterResults = products.filter(product => product.inStock);
        setProducts(e.target.checked ? filterResults : products);
    }


    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <h3>Search</h3>
            <input style={{padding: "10px"}} type="text" onChange={handleSearch}/>
            <div>
                <input type="checkbox" id="checkbox" onChange={handleFilter}/>
                <label for="checkbox">Only show products in stock</label>
            </div>
            
        </div>
    )
}