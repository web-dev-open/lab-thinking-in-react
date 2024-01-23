import React from 'react';

import './SearchBar.css';

export default function SearchBar({onSearchChange, onCheck}) {

    function updateSearchString (event) {
        const newSearchString = event.target.value;
        onSearchChange(newSearchString);
    }

    function handleCheckBox () {
        onCheck();
    }

    return (
        <div className="searchBox">
            <h3 className='searchHeading'>Search</h3>
            <input type="text" className='inputField' onChange={updateSearchString}/>
            <div className='checkBox'>
                <input type="checkbox" id="checkbox" onChange={handleCheckBox}/>
                <label htmlFor="checkbox">Only show items in stock</label>
            </div>
        </div>
    )
}
