import React from 'react'
import EachCartItem from './EachCartItem'

const Cart = () => {
    let data = JSON.parse(localStorage.getItem("cardData")) || []
  return (
    <div id='home-container'>
      {data.map((el)=>(
        <EachCartItem key={el.id} {...el}/>
      ))}
    </div>
  )
}

export default Cart