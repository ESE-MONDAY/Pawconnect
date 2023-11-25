"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import logo from '../logo.svg'
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Input} from '@/components/Form/Input'
import PasswordInput from '@/components/Form/PasswordInput';
import { Button } from '@/components/Form/Button';
import {MdLockOutline} from 'react-icons/md'


interface formValues{
    userName: string,
    email: string,
    password: string
  
  }
  
  const initialValues: formValues = {
    userName: '',
    email: '',
    password: ''
  
  }
  const validationSchema = yup.object().shape({
    userName: yup
      .string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters'),
  
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required'),
  
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });
  

  type RegistrationScreenProps = {
    onActionChange: (newAction: string) => void;
  };
const SignUpScreen: React.FC<RegistrationScreenProps> = ({onActionChange }) => {
  const handleSwitch = () => {
    onActionChange('signin');
  };
  return (
    <div className='max-w-[500px] mx-auto  bg-white mt-60 px-4 py-2 '>
          <h2 className='font-semibold text-lg sm:text-2xl'>Join Our Community</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values)
              setTimeout(() => {
                console.log(values)
                setSubmitting(false);
              }, 500);
            }}
          >
            {({ values, touched, errors, handleChange, handleBlur, handleSubmit }) =>{
              const { email, password, userName } = values;
              return(
                <div className='mt-8 '>
                   <Input
                    withICon={true}
                    type={'userName'}
                    label={'userName'}
                    placeholder={userName ? userName : 'What should we call you?'}
                    value={userName}
                    onBlur={handleBlur('userName')}
                    onChange={handleChange('userName')}
                    error={errors.userName && touched.userName ? errors.userName : ''}
                    isRequired={true} // Add required prop to make the input required
                    inputStyle="w-[20%] text-sm font-satoshiRegular"
                  ></Input>
                   <Input
                    withICon={true}
                    type={'email'}
                    label={'email'}
                    placeholder={email ? email : 'Enter your email address'}
                    value={email}
                    onBlur={handleBlur('email')}
                    onChange={handleChange('email')}
                    error={errors.email && touched.email ? errors.email : ''}
                    isRequired={true} // Add required prop to make the input required
                    inputStyle="w-[20%] text-sm font-satoshiRegular"
                  ></Input>
                   <PasswordInput
                  label={'password'}
                  containerClassWithIcon="password-container"
                  value={password}
                  onChange={handleChange('password')}
                  type="password"
                  placeholder="Enter your password"
                  inputStyle="password-input"
                  error={errors.password}
                  isRequired={true} 
                >
                  <span>
                    <MdLockOutline size={24} color="#A580C0" />
                  </span>
                </PasswordInput>

                <Button
                  type={`button`}
                  onClick={handleSubmit}
                  buttonStyle={`w-full bg-red-500 shadow text-secondary6 hover:text-white tracking-wider text-sm py-3 mt-4 font-satoshiMedium text-base `}
                >
                  Join us
                </Button>

                </div>
              )
            }}

          </Formik>
          <div className="w-full gap-2 flex mt-4 flex-row justify-end p-4 items-center ">
                  <p className="text-sm font-satoshiRegular text-secondary6">Already have an account?</p>{' '}
                  <button onClick={handleSwitch} className="text-[16px]  text-secondary6 font-satoshiBold hover:underline hover:underline-offset-2">
                    Login
                  </button>
                </div>


        </div>
  )
}

export default SignUpScreen