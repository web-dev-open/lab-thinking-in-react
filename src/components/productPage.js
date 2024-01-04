import data from '../data.json'
import ProductTable from './productTable'
import React from 'react';

function ProductPage()
{
    const [list, setList]=React.useState(data)
    function Search(arr ,text)
    {
        let len=text.length
        console.log(text)
        if(len === 0)
        {
            setList(data) 
        }
        else 
        {
        let filteredArray=arr.filter((l) => {
            if(l.name.substring(0,len).toLowerCase() === text.toLowerCase())
                return true 
            else 
                return false
        })
        setList(filteredArray)
        }
    }
    function showStocks(e)
    {
        if(e.target.checked)
        {
        let filteredArray=list.filter((l) => l.inStock)
        setList(filteredArray)
        }
        else 
        {
            let text=document.getElementById('srch').value
            Search(data ,text)
        }
    }
    return <div>
           <h1>STORE<i class="fa-solid fa-cart-shopping"></i></h1>
           <div>
                <input id='srch' type='text' placeholder='Search product' onChange={(e)=>Search(list ,e.target.value)} style={{width:'400px' , padding:'6px', fontSize:'20px'}}/>
           </div>
           <div style={{marginTop : '20px'}}>
                <input type='checkbox' onChange={showStocks}/>
                <span>Only show products in stock</span>
           </div>
           <ProductTable
              array={list}
           />
    </div>
}
export default ProductPage