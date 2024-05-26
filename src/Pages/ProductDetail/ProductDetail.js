import React, { useEffect, useState } from 'react'
import classess from "./ProductDetail.module.css"
import LayOut from '../../component/LayOut/LayOut'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { productUrl } from '../../Api/endpoints'
import ProductCard from '../../component/Product/ProductCard'
import Loader from "../../component/Loader/Loader"

function ProductDetail() {
  const {productId} = useParams()
  const [product, setproduct]=useState({})
  const [isLoading, setIsLoading] =useState(false)
  // console.log(productId);
  useEffect(()=>{
    setIsLoading(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setproduct(res.data)
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err);
      setIsLoading(false)
    })
  },[])
  return (
    <LayOut>
      {isLoading? (<Loader />):(<ProductCard product={product}
      flex={true}
      renderDesc={true}
      renderAdd={true}
      
      
      
      />)}
            
    </LayOut>
   
  )
}

export default ProductDetail