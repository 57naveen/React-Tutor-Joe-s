import {useState} from 'react'

export const Cart = () => {
    const [cartCount,setCartCount]=useState(0);
    const handelClick=()=>setCartCount(cartCount +  1)
    
  return (
    <>
    <h1>Number of items in the cart : {cartCount}</h1>
    <button onClick={handelClick}> Add to Cart</button>
    </>
  )
}
