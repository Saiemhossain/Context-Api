/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext } from "react";
import {  useState } from "react"

export const Cart = createContext();
  
export default function CartContext({children}) {

 const [cart, setCart] = useState([]);

  return (
    <Cart.Provider value={{cart, setCart}}>
      {children}
   </Cart.Provider>
  )
}
