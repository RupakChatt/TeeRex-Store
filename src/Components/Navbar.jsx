import React from 'react'
import { BsFillCartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <div className='flex flex-row items-center justify-between md:flex md:flex-row md:items-center md:justify-between md:p-4 bg-slate-800 text-white md:min-h-[60px] sticky top-0'>
            <div>
                <h1 className='md:text-2xl font-semibold cursor-pointer text-xl m-2'>TeeRex Store</h1>
            </div>
            <div className='flex flex-row items-center md:flex md:flex-row md:items-center m-3'>
                <Link to='/'>
                    <button className='md:m-2 m-3 md:text-xl text-lg'>Products</button>
                </Link>
                <Link to='/cart'>
                    <BsFillCartFill size={20} className='md:m-2 cursor-pointer' />
                </Link>
            </div>
        </div>
    )
}

export default Navbar