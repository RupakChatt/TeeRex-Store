import React, { useState } from 'react'
import { Product } from '../ProductContext';
import ItemDelete from '../Components/ItemDelete';
import ItemEdit from '../Components/ItemEdit';

const CartList = () => {
  const { cartItems } = Product();
  const [deletionModal, setDeletionModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  let grandTotal = 0;
  let totalPriceArray = [];
  let updateQuantity = 0;

  cartItems.map(item => {
    return totalPriceArray.push(item.total)
  })

  for (let i = 0; i < totalPriceArray.length; i++) {
    grandTotal += totalPriceArray[i];
  }

  return (
    <div className='flex flex-col items-center min-h-screen m-4'>
      <div className='md:flex md:flex-col'>
        <div className='m-4'>
          <h1 className='text-3xl text-center text-slate-800 font-medium'>Your Cart Items</h1>
        </div>
        <div className='md:flex md:flex-row md:m-[1rem] md:items-center md:justify-center w-full hidden'>
          <h1 className='text-slate-800 text-xl font-semibold md:m-4 text-center md:ml-[2rem] md:mr-[4rem]'>Description</h1>
          <h1 className='text-slate-800 text-xl font-semibold md:m-4 text-center md:ml-[2rem] md:mr-[4rem]'>Quantity</h1>
          <h1 className='text-slate-800 text-xl font-semibold md:m-4 text-center md:ml-[3rem] md:mr-[4rem]'>Price</h1>
          <h1 className='text-slate-800 text-xl font-semibold md:m-4 text-center md:ml-[5rem] md:mr-[1rem]'>Total</h1>
        </div>
        <div className='md:flex md:flex-col items-center md:w-full'>

          {cartItems.length === 0 && <h1 className='text-xl font-semibold text-slate-700 text-center'>No Items in Cart</h1>}

          {cartItems.map(item => {
            return (
              <div className='md:flex md:flex-row md:m-[1rem] items-center justify-between w-full shadow-md bg-slate-50 ' key={item.productId}>
                <div className='md:bg-gray-200 rounded-md md:shadow-md flex items-center justify-center'>
                  <img src={item.productImage} alt="productImage" className='max-w-[10rem] h-[7rem] md:p-2' />
                </div>
                <div className='md:flex md:flex-row items-center'>
                  <div className='flex justify-center'>
                    <h1 className='text-slate-800 text-xl font-semibold md:m-4 text-left md:ml-[7rem]'>{item.productName}</h1>
                  </div>
                  <div className='flex flex-row items-center justify-center'>
                    <h1 className='text-slate-800 text-lg md:m-4 text-left md:ml-[7rem] m-3'>{item.orderedQuantity} No.</h1>
                    <h1 className='text-slate-800 text-lg md:m-4 text-left md:ml-[7rem] m-3'>{item.productPrice} /-</h1>
                    <h1 className='text-slate-800 text-lg md:m-4 text-left md:ml-[7rem] m-3'>{item.total} /-</h1>
                  </div>
                </div>
                <div className='md:ml-[2rem] m-3 flex flex-row justify-center'>
                  <button className='pl-2 pr-2 m-1 border rounded-md md:mr-1 border-slate-800 text-slate-800 font-semibold hover:bg-slate-800 hover:text-white' onClick={() => {

                    updateQuantity = prompt('Add the new quantity for: ' + item.productName);

                    if (updateQuantity === null) {
                      alert('Quantity was not updated')
                    }
                    else if (updateQuantity > item.productQuantity) {
                      alert(' Entered Quantity more than items in stock')
                    }
                    else {
                      setEditModal(true)
                      item.orderedQuantity = updateQuantity;
                      item.total = item.orderedQuantity * item.productPrice
                    }
                  }}>Edit</button>

                  <button className='pl-2 pr-2 m-1 border rounded-md md:ml-1 border-red-700 text-red-700 font-semibold hover:bg-red-700 hover:text-white' onClick={() => {
                    setDeletionModal(true)
                    cartItems.splice(cartItems.findIndex(val => val.productId === item.productId), 1)
                  }}>Delete</button>

                </div>
              </div>
            )
          })}
        </div>
        <hr />
        <div className='flex flex-row items-center md:justify-end justify-center md:mr-[11.5rem]'>
          <h1 className='font-semibold text-slate-700 md:mr-2 text-lg'>Grand Total:</h1>
          <h1 className='font-semibold text-slate-700 md:ml-2 text-lg'>{grandTotal}</h1>
        </div>
      </div>
      {deletionModal && <ItemDelete setDeletionModal={setDeletionModal} />}
      {editModal && <ItemEdit setEditModal={setEditModal} />}
    </div>
  )
}

export default CartList