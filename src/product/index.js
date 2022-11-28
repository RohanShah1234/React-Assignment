import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './product.css'

function Product() {
    const [products, setProducts]= useState([]);
    const fetchData =() =>{
        axios.get('https://dummyjson.com/products')
        .then((res)=>setProducts(res.data.products))
        .catch(err=>console.log(err))
    };
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className='product-container'>
      {products.map(product=>(
      <div className='product'>
        <div>{product.title}</div>
        <img className='thumbnail' src={product.thumbnail} />
         <div>
            <span className='price'>{product.price}</span>
            <span className='rating'>{product.rating}</span>
         </div>
      </div>
      ))}
      
    </div>
  )
}

export default Product
