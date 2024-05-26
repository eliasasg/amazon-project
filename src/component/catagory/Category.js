import React from 'react'
import { categoryInfos } from './catagoryimges'
import CategoryCard from './CategoryCard'
import classes from "./Catagory.module.css"

function Category() {
  return (
  <section  className={classes.category__container}>
    
    
    {
        categoryInfos.map((infos,i)=>(
            <CategoryCard data ={infos}/>
        ))
    }
  </section>
  

  )
}

export default Category