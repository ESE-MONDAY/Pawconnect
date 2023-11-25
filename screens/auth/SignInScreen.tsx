import React from 'react'
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Input} from '@/components/Form/Input'
import PasswordInput from '@/components/Form/PasswordInput';
import { Button } from '@/components/Form/Button';
import {MdLockOutline} from 'react-icons/md'
import Link from 'next/link';


interface formValues{
  email: string,
  password: string

}
  
const initialValues: formValues = {
  email: '',
  password: ''

}
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),

  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

type SignInScreenProps = {
  onActionChange: (newAction: string) => void;
};

const SignInScreen: React.FC<SignInScreenProps> = ({onActionChange}) => {
  
  const handleSwitch = () => {
    onActionChange('registration');
  };
  return (
    <div className='max-w-[500px] mx-auto  bg-white mt-40 px-4 py-2 '>
          <h2 className='font-semibold text-lg sm:text-2xl'>Welcome Back</h2>
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
              const { email, password } = values;
              return(
                <div className='mt-8 '>
                  
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
                  Sign In
                </Button>

                </div>
              )
            }}

          </Formik>
          <div className='mt-4 w-full gap-2 flex flex-row justify-end p-4 items-center '>
                        <p className='text-sm font-satoshiRegular  text-secondary6'>New to PawConnect?</p> 
                        <button onClick={handleSwitch} className="text-[16px]  text-secondary6 font-satoshiBold hover:underline hover:underline-offset-2">
							Create Account
						</button>
                    </div>


        </div>
  )
}

export default SignInScreen