import React from 'react'
import {
  render,
  fireEvent,
  screen
} from '@testing-library/react';
import MyCart from '../MyCart'
import '@testing-library/jest-dom/extend-expect'

test("show the correct total price", () => {
  const price = 95.00;
  const vat = price * 0.25;
  const cartPrice = price + vat
  const quentity = 1;

  expect(cartPrice*quentity).toEqual(118.75)
})
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


