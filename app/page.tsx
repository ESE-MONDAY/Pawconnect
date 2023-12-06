"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import { account, ID } from './appwrite'
import { Button } from '@/components/Form/Button';

interface User {
  name: string;
 
}

export default function Home() {
  return (
    <main className="h-full max-w-[1440px]  mx-auto w-full px-2 ">
      <div className=' w-full md:w-[70%] bg-[#6654B1] h-auto md:h-[550px] max-w-[1100px] rounded-lg mx-auto mt-8 flex flex-col md:flex-row gap-8 p-2 md:p-8'>
        <div className=' h-full basis-1/2 p-2 text-purple-50'>
          <h3 className='text-2xl md:text-5xl font-semibold font-serif mt-32'>Breeding and finding your perfect paw</h3>
          <p className='mt-4 md:mt-8 font-sans text-xs md:text-xl'> A vibrant community where every paw has a story.
        Advertise your dog business and connect with the best breeders.</p>
          <Button buttonStyle='bg-purple-50 rounded-md text-md font-medium font-sans text-[#6654B1] mt-4 px-8 py-2'>Find Paw Friend</Button>
        </div>
        <div className='basis-1/2'>
         pictures
        </div>

      </div>
      <div className='max-w-[1000px] w-full p-4 mx-auto mt-4 md:mt-8'>
        <p className='text-[#6554af] font-semibold text-md font-sans'>ABOUT US</p>
        <div className='w-full flex md:gap-8 flex-col md:flex-row justify-between mt-2 md:mt-10 items-center'>
          <p className=' text-lg md:text-2xl font-serif font-bold mt-2 basis-1/2 text-[#180229]'>How can we offer services catering to dogs?</p>
          <p className=' basis-1/2 text-sm font-sans text-gray-900 mt-4 md:mt-8 '>At PawsConnect, our focus is straightforward: Dogs. We aim to enhance each tail-wagging experience by uniting dog enthusiasts and providing exceptional services for our beloved furry companions. Join us and uncover what sets us apart as every dog&aps;s ultimate companion.</p>
        </div>
        <div className='bg-[#19705c] px-[52px] py-[28px] mt-[60px] rounded-[40px] max-w-[800px] mx-auto w-full'>
          <div className='w-full flex justify-between gap-8'>
            <div className='basis-1/2 w-full  text-white'>
              <p className='mt-8 text-md font-sans font-medium'>Introducing</p>
              <p className='py-4 text-3xl font-bold font-serif'>Our Major Patners:</p>
            </div>
            <div className='basis-1/2 w-full'>2</div>

          </div>
          

        </div>
      </div>
      
     

     

     
    </main>
  )

  // return(
  //   <main className='w-full bg-green-200 max-w-[1440px] mx-auto'>
  //     <h1 className='text-4xl max-w-xl'>Unleash the Power of Pet Connections</h1>
  //     <p className='max-w-2xl'>PawConnect is not just a platform; it&apos;s a vibrant community where pet owners come together to celebrate the joy and companionship that our furry friends bring into our lives.</p>
  //   </main>
  // )
}
