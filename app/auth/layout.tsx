import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })




export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' flex flex-col min-h-screen overflow-y-auto   ' >
        <div className='min-h-screen grid grid-cols-3'>
            <div className='col-span-1 bg-red-300 hidden sm:flex'>
                <div className='mt-28 pl-16'>
                  <h3 className='flex items-center gap-2'>Welcome to PawConnect</h3>
                  <p>Become friends with your pet</p>
                </div>
              </div>
                <div className='col-span-3 sm:col-span-2'>
                {children}

                </div>
            </div>
      
      </body>
    </html>
  )
}
