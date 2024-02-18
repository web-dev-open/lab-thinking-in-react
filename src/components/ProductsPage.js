import { useState } from 'react';

import jsonData from './../data.json';

import './ProductsPage.css';

import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';



export default function ProductsPage() {

    const [products, setProducts] = useState(jsonData);
    const [searchString, setSearchString] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    function onSearchChange(newSearchString) {
        setSearchString(newSearchString);
    }

    function onCheck() {
        setIsChecked(isChecked ? false : true);
    }

    return (
        <div>
            <h1 className='title'>Root Store</h1>
            <SearchBar onSearchChange={onSearchChange} onCheck={onCheck}/>
            <ProductsTable data={products} searchString={searchString} isChecked={isChecked}/>
        </div>
    )
}
