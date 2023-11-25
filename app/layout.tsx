import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PawConnect - Unleash Pet Connections',
  description: "Join PawConnect, the ultimate hub for pet lovers! Share your pet's story, explore blogs, and discover the latest pet products. Connect with a vibrant community of passionate pet owners. 🐾✨",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' flex flex-col min-h-screen overflow-y-auto bg-gray-200' >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
