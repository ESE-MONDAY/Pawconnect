"use client"
import React, {useState} from 'react'
import SignUpScreen from '@/screens/auth/SignUpScreen'
import SignInScreen from '@/screens/auth/SignInScreen'
import { ComponentType } from 'react';


const Auth = () => {
  
const actionComponents: Record<string, ComponentType<any>> = {
  signin: SignInScreen,
  registration: SignUpScreen 
};
const [action, setAction] = useState("signin");

const handleSetAction = (newAction: string) => {
  if (action !== newAction) {
    setAction(newAction);
  }
};

const ScreenComponent = actionComponents[action] || SignInScreen;;

   
  return (
    <div className=''>
      <ScreenComponent onActionChange={handleSetAction} />
    </div>
  )
}

export default Auth