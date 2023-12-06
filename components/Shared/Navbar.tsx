import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import logo from "../../app/logo.svg"
import { FaRegUser } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import Searchbar from '../Searchbar';


const Navbar = () => {
  return (
    <nav className='hidden md:flex w-full  bg-transparent '>
        <div className='w-full  max-w-[1440px] mx-auto'>
          <div className='w-full border-[1px] border-gray-800/60 bg-white/50 max-w-[1300px] mx-auto py-4 mt-6 rounded-full px-4 md:px-20 flex gap-10 justify-between items-center'>

          <Link href="/" className='flex gap-2 items-center text-[#6654B1]'>
            <Image src={logo} className='md:h-[20px] h-[10px] w-[20px] md:w-[20px] '  alt='PawConnect Logo' />
            <span className='text-md md:text-xl font-bold font-serif'>Paws</span>
            </Link>
        
        <div className='md:flex gap-4 items-center text-purple-700 text-xs hidden w-full max-w-[400px]'>
          <Searchbar />
            {/* <Link href='/'>Home</Link>
            <Link href="/products">Pet Product</Link>
            <Link href='/'>Blog</Link> */}
        </div>
        

        <div className='flex gap-4 md:gap-8 text-[#6654B1] text-sm items-center'>
            <Link href="/cart"> <LuShoppingCart size={12} /></Link>
            <Link href="/auth"><FaRegUser size={12} /></Link>
        </div>
          </div>

        
        </div>
       
    </nav>
  )
}

export default Navbar