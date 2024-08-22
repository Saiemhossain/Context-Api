/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import SingleProduct from "./SingleProduct";
import { faker } from '@faker-js/faker';
import { Cart } from "../context/CartContext";


export default function Shop() {
  const {cart} = useContext(Cart)

  const productArray = [...Array(6)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));
console.log(cart)
  const [products] = useState(productArray)
  
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 px-5">
      {products.map(product => (
        <SingleProduct product={product}
        
          key={product.id} />
      ))}
    </div>
  );
}
