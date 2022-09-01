import React from 'react'

const EachCartItem = (props) => {
    const {img,title,price} = props
  return (
    <div id='eachProduct'>
        <img src={img} alt="product_image" />
        <h3>{title}</h3>
        <p>$ {price}</p>
    </div>
  )
}

export default EachCartItem