import React from 'react'
import { TfiSearch } from "react-icons/tfi";

const Searchbar = () => {
  return (
    <div className='w-full rounded-full py-2 px-4 border-[1px] border-[#6654B1] flex items-center'>
        <input className='bg-transparent w-full text-sm outline-none'
        placeholder='Search millions of dog, breeds,locations....'/>
        <TfiSearch size={14}  />
        

    </div>
  )
}

export default Searchbar