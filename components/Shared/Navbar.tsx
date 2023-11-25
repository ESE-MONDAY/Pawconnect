import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import logo from "../../app/logo.svg"
import { FaRegUser } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";


const Navbar = () => {
  return (
    <nav className='w-full  bg-red-600'>
        <div className='w-full max-w-[1440px] mx-auto py-2  px-4 md:px-20 flex gap-10 justify-between items-center'>

        <Link href="/" className='flex gap-2 items-center text-white'>
            <Image src={logo} className='md:h-[30px] h-[20px] w-[20px] md:w-[30px]'  alt='PawConnect Logo' />
            <span className='text-md md:text-xl'>Pawconnect</span>
            </Link>
        
        <div className='md:flex gap-4 items-center text-white text-md hidden'>
            <Link href='/'>Home</Link>
            <Link href="/products">Pet Product</Link>
            <Link href='/'>Blog</Link>
        </div>
        

        <div className='flex gap-4 md:gap-8 text-white items-center'>
            <Link href="/cart"> <LuShoppingCart size={14} /></Link>
            <Link href="/auth"><FaRegUser size={14} /></Link>
        </div>
        </div>
       
    </nav>
  )
}

export default Navbar