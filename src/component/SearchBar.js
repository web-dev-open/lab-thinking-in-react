import React from 'react'


const SearchBar = ({dvalue,onchange}) => {

    const dstyle = {
        width:'60%',
        height:'40px',
        marginTop:'30px'

    }
  return (
    <div style={{textAlign:'center', marginTop:'50px'}}>

        <h1>Store</h1>
        <h3 style={{marginTop:'50px'}} >Search</h3>
        <input placeholder='Search' style={dstyle}  value={dvalue} onChange={onchange}/>

    </div>
  )
}

export default SearchBar
