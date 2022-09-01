import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addData } from '../../Redux/action';

const EachProduct = (props) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch()
 
    const {img,title,price} = props

    const sendData = (img,title,price)=>{
        let obj = {img:img,title:title,price:price}
        dispatch(addData(obj))
    }
    
  return (
    <div id='eachProduct'>
        <img src={img} alt="product_image" />
        <h3>{title}</h3>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <p>$ {price}</p>
        <div>
          {addedToCart ? (
            <div className='addToCartButton'>
              Added
            </div>
          ) : loader ? (
           <div className='addToCartButton'>.......</div>
          ) : (
            <div className='addToCartButton'
              onClick={() => {
                setLoader(true);
                setAddedToCart(true);
                sendData(img,title,price)
              }}
              >
              Add to Cart
            </div>
          )}
        </div>
        </div>
    </div>
  )
}

export default EachProduct