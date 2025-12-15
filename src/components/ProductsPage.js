
// src/components/ProductsPage.js



import { useState } from  'react';

import jsonData from  './../../data.json';



function ProductsPage () {

const [products, setProducts] = useState(jsonData);

return(

<div>

<h1>Root Store</h1>

</div>

)

}
