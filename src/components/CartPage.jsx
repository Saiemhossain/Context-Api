/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { Cart } from "../context/CartContext";

/* eslint-disable react/prop-types */
export default function CartPage() {
  const [total, setTotal] = useState(0);
const {cart} = useContext(Cart)

  useEffect(() => {
    setTotal(cart.reduce((pre, curValue) => pre + Number(curValue.price), 0));
  }, [cart]);
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Product In Cart {cart.length ? cart.length : ''}
              </h1>
            </header>

            <div className="mt-8">
              <ul className="space-y-4 grid grid-cols-2 gap-10">
                {cart.map(product => (
                  <SingleProduct product={product} />
                ))}
              </ul>
             

              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd className="text-xl">{total}</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>VAT</dt>
                      <dd> {total ? '$25' : ''} </dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd className="text-2xl text-indigo-500">
                        ${total ? total + 25 : total}
                      </dd>
                    </div>
                  </dl>

                  <div className="flex justify-end"></div>

                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
