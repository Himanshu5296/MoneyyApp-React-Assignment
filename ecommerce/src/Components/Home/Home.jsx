import React from 'react'
import EachProduct from './EachProduct'
import data from "./Product.json"


const Home = () => {
  return (
    <>
    <div id='home-container'>
       {data.product.map((el)=>(
          <EachProduct key={el.id} {...el} />
       ))}
    </div>
    </>
  )
}

export default Home