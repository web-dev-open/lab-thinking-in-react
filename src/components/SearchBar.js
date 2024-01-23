import { useState } from  'react';
// import jsonData from  './../data.json';

function SearchBar({onSearch}){
    const [query, setQuery] = useState('');
    const [showOnlyInStock, setShowOnlyInStock] = useState(false);
    
    //defining function to handle changes to search input field
    const handleQueryChange = (event) => {

        //extract new query value from input field
        const newQuery = event.target.value;
        //updates query state with new value
        setQuery(newQuery);
        //calls on prop function , passing the new query and the current value of showOnlyInStock
        onSearch(newQuery, showOnlyInStock);

    }
    //function to handle changes in the checkbox
    const handleCheckboxChange = () => {
        //toggles ShowOnlyInStock ste to the opposite of its current value
        const newShowOnlyInStock = !showOnlyInStock;
        //updates  the state
        setShowOnlyInStock(newShowOnlyInStock);
        //calling prop passing the current query and the new value of showOnlyInStock
        onSearch(query,newShowOnlyInStock);
    }
    return(
        <form>
            <input 
            type="text" 
            placeholder="Search..."
            value={query}
            onChange={handleQueryChange}
            />
            <label>
                <input 
                type="checkbox"
                checked={showOnlyInStock}
                onChange={handleCheckboxChange}    
                />
                {''}
                Only show products in stock
            </label>
        </form>
    )
}
export default SearchBar;