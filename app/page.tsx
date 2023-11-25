"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import { account, ID } from './appwrite'

interface User {
  name: string;
 
}

export default function Home() {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");


  
  const login = async (email: string, password: string): Promise<void> => {
    const session = await account.createEmailSession(email, password);
    console.log(session);
    setLoggedInUser(await account.get());

  };

  const register = async (): Promise<void> => {
    await account.create(ID.unique(), email, password, name);
    login(email, password);
  };

  const logout = async (): Promise<void> => {
    await account.deleteSession("current");
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    return (
      <div className='bg-red-500'>
        <p>Logged in as {loggedInUser.name}</p>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }
  return (
    <main className="bg-red-600 h-full">
       <div>
      <p>Not logged in</p>
      <form className='text-black'>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='text-black'
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <br />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <br />
        <button type="button" onClick={() => login(email, password)} className='bg-red-600 px-4 py-2 text-white'>
          Login
        </button>
        <br />
        <button type="button" onClick={register} className='bg-red-600 px-4 py-2 text-white'>
          Register
        </button>
      </form>
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
