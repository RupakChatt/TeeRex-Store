import React, { useState } from 'react'
import { Product } from '../ProductContext';
import { BsFillCartPlusFill } from 'react-icons/bs';
import outOfStock from '../assets/outOfStock.png';
import Filter from '../Components/Filter';


const Products = () => {

    const { productData, cartItems, Cart } = Product();
    const [searchTerm, setSearchTerm] = useState('');
    const [customerOrderQuantity, setCustomerOrderQuantity] = useState(0);
    let singleCartItem;

    return (
        <div className='flex flex-col items-center'>
            <div className='m-6 flex flex-row items-center'>
                <input type="search" placeholder='Search for products' className='outline-none max-w-[20rem] border border-slate-400 rounded-md p-2' onChange={(event) => setSearchTerm(event.target.value)} />
            </div>
            <div className='md:flex md:flex-row md:items-start'>
                <Filter />
                <div className='md:grid md:grid-cols-4 md:gap-6 flex flex-col items-center justify-center m-3'>
                    {productData.filter(item => {

                        if (searchTerm === '') {
                            return item;
                        }
                        if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return item;
                        }
                    }).map(product => {
                        return (
                            <div className='w-[13rem] min-h-[13rem] p-2 flex flex-col items-start shadow-md rounded-md ' key={product.id}>

                                <div className='flex items-center justify-center w-full'>
                                    {product.quantity === 0 ? <img src={outOfStock} alt='productImage' className='max-w-[11rem] h-[9rem]' /> : <img src={product.imageURL} alt='productImage' className='max-w-[11rem] h-[9rem]' />}
                                </div>

                                <div className='flex flex-row w-full items-center'>
                                    <div className='flex flex-col items-start justify-between w-full m-1'>
                                        <div><h3 className='font-semibold text-slate-700'>{product.name}</h3></div>
                                        <div><h3>{product.currency} {product.price}</h3></div>
                                    </div>
                                    <div className='flex flex-row items-center'>

                                        <input type="text" placeholder='Qty.' className='w-[3rem] mr-1 text-center p-1 outline-none border border-slate-800 rounded-md' onChange={(e) => {
                                            setCustomerOrderQuantity(e.target.value);
                                        }} />

                                        <BsFillCartPlusFill size={25} className='text-slate-700 hover:text-slate-500 cursor-pointer' onClick={() => {
                                            singleCartItem = new Cart(product.name, product.quantity, product.price, product.id, product.imageURL, customerOrderQuantity, (customerOrderQuantity * product.price));

                                            if (product.quantity >= customerOrderQuantity) {
                                                alert('Added to Cart successfully!');
                                                cartItems.push(singleCartItem);
                                            }
                                            else {
                                                alert('Error! Order exceeds inventory');
                                            }
                                        }} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Products