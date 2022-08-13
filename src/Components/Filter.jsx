import React, { useState } from 'react'
import { Product } from '../ProductContext';
import { BsFilterSquareFill } from 'react-icons/bs'

const Filter = () => {
    const { setProductData, filterColor, filterGender, filterType, filterPrice, ITEMS } = Product()
    const [filter, setFilter] = useState(false);

    const toggleFilterView = () => {
        filter ? setFilter(false) : setFilter(true)
    }

    return (

        <div>
            <div className='flex flex-row items-center justify-center'>
                <BsFilterSquareFill size={30} className='text-slate-700 md:hidden cursor-pointer' onClick={toggleFilterView} />
            </div>
            {filter ?
                <div className='md:m-6 md:flex md:flex-col'>
                    <div className='max-w-[17rem] md:flex md:flex-col md:items-start'>
                        <div>
                            <h1 className='md:text-lg md:m-3 font-semibold '>Filter By</h1>
                        </div>
                        <div>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => setProductData(ITEMS)}>All Products</button>
                        </div>
                        <div className='flex flex-row items-center w-[80%]'>
                            <h2 className='md:text-xl md:m-3 font-semibold'>Color</h2>
                        </div>
                        <div className='md:flex md:flex-row md:flex-wrap  md:items-center'>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterColor('Black')}>Black</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterColor('Blue')}>Blue</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterColor('Pink')}>Pink</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterColor('Green')}>Green</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterColor('Red')}>Red</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterColor('Grey')}>Grey</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterColor('Purple')}>Purple</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterColor('White')}>White</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterColor('Yellow')}>Yellow</button>
                        </div>
                    </div>
                    <div className='md:flex md:flex-col md:items-start'>
                        <div className='flex flex-row items-center'>
                            <h2 className='md:text-xl md:m-3 font-semibold'>Gender</h2>
                        </div>
                        <div className='md:flex md:flex-row md:flex-wrap md:items-center'>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterGender('Men')}>Men</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterGender('Women')}>Women</button>
                        </div>
                    </div>
                    <div className='md:flex md:flex-col md:items-start'>
                        <div className='flex flex-row items-center'>
                            <h2 className='md:text-xl md:m-3 font-semibold'>Price</h2>
                        </div>
                        <div className='md:flex md:flex-row md:flex-wrap md:items-center'>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterPrice(250, 350)}>250-350</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterPrice(350, 500)}>350-500</button>
                        </div>
                    </div>
                    <div className='md:flex md:flex-col md:items-start'>
                        <div className='flex flex-row items-center'>
                            <h2 className='md:text-xl md:m-3 font-semibold'>Type</h2>
                        </div>
                        <div className='md:flex md:flex-row md:flex-wrap md:items-center'>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterType('Basic')}>Basic</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterType('Polo')}>Polo</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterType('Hoodie')}>Hoodie</button>
                        </div>
                    </div>
                </div> :
                <div className='md:m-6 md:flex md:flex-col hidden md:visible'>
                    <div className='max-w-[17rem] md:flex md:flex-col md:items-start'>
                        <div>
                            <h1 className='md:text-lg md:m-3 font-semibold '>Filter By</h1>
                        </div>
                        <div>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => setProductData(ITEMS)}>All Products</button>
                        </div>
                        <div className='flex flex-row items-center w-[80%]'>
                            <h2 className='md:text-xl md:m-3 font-semibold'>Color</h2>
                        </div>
                        <div className='md:flex md:flex-row md:flex-wrap  md:items-center'>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterColor('Black')}>Black</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterColor('Blue')}>Blue</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterColor('Pink')}>Pink</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterColor('Green')}>Green</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterColor('Red')}>Red</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterColor('Grey')}>Grey</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterColor('Purple')}>Purple</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterColor('White')}>White</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterColor('Yellow')}>Yellow</button>
                        </div>
                    </div>
                    <div className='md:flex md:flex-col md:items-start'>
                        <div className='flex flex-row items-center'>
                            <h2 className='md:text-xl md:m-3 font-semibold'>Gender</h2>
                        </div>
                        <div className='md:flex md:flex-row md:flex-wrap md:items-center'>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterGender('Men')}>Men</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterGender('Women')}>Women</button>
                        </div>
                    </div>
                    <div className='md:flex md:flex-col md:items-start'>
                        <div className='flex flex-row items-center'>
                            <h2 className='md:text-xl md:m-3 font-semibold'>Price</h2>
                        </div>
                        <div className='md:flex md:flex-row md:flex-wrap md:items-center'>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterPrice(250, 350)}>250-350</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterPrice(350, 500)}>350-500</button>
                        </div>
                    </div>
                    <div className='md:flex md:flex-col md:items-start'>
                        <div className='flex flex-row items-center'>
                            <h2 className='md:text-xl md:m-3 font-semibold'>Type</h2>
                        </div>
                        <div className='md:flex md:flex-row md:flex-wrap md:items-center'>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterType('Basic')}>Basic</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterType('Polo')}>Polo</button>
                            <button className='md:m-1 p-2 hover:bg-slate-700 hover:text-white rounded-md' onClick={() => filterType('Hoodie')}>Hoodie</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Filter