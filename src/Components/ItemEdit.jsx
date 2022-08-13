import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'

const ItemEdit = ({ setEditModal }) => {

  return (
    <div className='w-full h-screen fixed flex justify-center items-center backdrop-blur-sm'>
      <div className='max-w-[80rem] min-h-[7rem] bg-white shadow-md rounded-md p-3'>
        <div className='flex flex-row items-center justify-center'>
          <h1 className='text-green-700 text-2xl font-bold mr-2'>Quantity Updated!</h1>
          <BsCheckCircleFill size={25} className='text-green-700' />
        </div>
        <div className='flex flex-row items-center justify-center m-2'>
          <button className='pl-6 pr-6 border rounded-md md:mr-1 border-slate-800 text-slate-800 font-semibold hover:bg-slate-800 hover:text-white' onClick={() => {
            setEditModal(false)
          }}>OK</button>
        </div>
      </div>
    </div>
  )
}

export default ItemEdit