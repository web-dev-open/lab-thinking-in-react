import { useState } from "react";
import { Space, Table, Tag } from 'antd';
import jsonData from "../data.json";
import ProductRow from "./ProductRow";

const ProductTable = () => {
  const [products, setProducts] = useState(jsonData);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    
  ];
  return (
    <>
      <h1>Product Table</h1>
      
    </>
  );
};

export default ProductTable;
