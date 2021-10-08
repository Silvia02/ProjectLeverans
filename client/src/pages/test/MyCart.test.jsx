import React from 'react'
import {
  render
} from '@testing-library/react';
import {
  act
} from 'react-dom/test-utils';
import MyCart from '../MyCart'
import '@testing-library/jest-dom/extend-expect'
globalThis.React = React;

test("show the correct total price", () => {
  const price = 95.00;
  const vat = price * 0.25;
  const cartPrice = price + vat
  const quentity = 1;

  expect(cartPrice * quentity).toEqual(118.75)
});

let f = require('node-fetch');
window.fetch = function (...args) {
  if (args[0].indexOf('/') === 0) {
    args[0] = 'http://localhost:4000' + args[0];
  }
  return f(...args);
}
//waiting for fetches, re-renders etc)
let sleep = ms => new Promise(res => setTimeout(res, ms));

//test cart is empty
test('that the cart is empty', async () => {
   await act(async () => {
    render( <MyCart /> );
     await sleep(1000); // wait for fetches
     expect(document.querySelector('.cart').innerHTML.includes('The Cart is Empty')).toBe(true);
   });
});
  
// test("adding item to the product", () => { })
// test("removing item from the product,",()=>{})


// test("adding items to the mycart when addtocart button is enabled", () => {
  //     const { getByTestId } = render(<Product/>)
  //     const AddtoCartButton = getByTestId("addToCart")
  //     const myCartAmount = getByTestId("cartCounter")
  //      expect(myCartAmount.textContent).toBe("0")

  //     fireEvent.click(AddtoCartButton);
  //     expect(myCartAmount.textContent).toBe("1")

  //   })

