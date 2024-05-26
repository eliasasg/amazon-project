import React from 'react'
import LayOut from '../../component/LayOut/LayOut'
import Carousel  from '../../component/Carousel/CarouselEffect'
import Category from "../../component/catagory/Category"
import Product from "../../component/Product/Product"

function Landing() {
  return (
    <LayOut>
        <Carousel />
        <Category />
        <Product />
    </LayOut>
  )
}

export default Landing