import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

//input
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const ForgetPassword = () => {
  const [formData,setFormData]=useState({
    email: "",
    password: "",
    CPassword: "",
  });

  const handleChange=(e)=>{
    setFormData({...formData , [e.target.name] : e.target.value })
  }

  const [error,setError] = useState('')

  const [loading,setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()

    //basic validation
    if(!formData.email || !formData.password || !formData.CPassword){
      setError('All fields are required?')
      return;
    }

    if(formData.password !== formData.CPassword){
      setError('Passwords do not match. Please verify?')
      return;
    }

    if(!/\S+@\S+\.\S+/.test(formData.email)){
      setError('Please enter valid email?')
      return;
    }
    
    setError('')
    setLoading(true)
    setFormData({
      email: "",
      password: "",
      CPassword: "",
    })
    navigate('/react-registration');
    console.log(formData)
  }

  return (
    <div className='container mx-auto'>
      <h2 className='text-center font-serif text-2xl mt-10'>Foget Password</h2>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center my-10'>
      {error && <p className='text-red-400 mb-5'>{error}</p>}
        <label htmlFor="em" className='flex flex-row gap-3'>
          <MdEmail size={40} />
          <input 
            type="email"
            id='em'
            placeholder='Enter Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='border-2 border-black p-2 text-xl'
          />
        </label><br />
        <label htmlFor="p" className='flex flex-row gap-3'>
        <RiLockPasswordFill size={40} />
        <input 
            type="password"
            id='p'
            placeholder='Enter Password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='border-2 border-black p-2 text-xl'
          />
        </label><br />
        <label htmlFor="cp" className='flex flex-row gap-3'>
          <RiLockPasswordFill size={40} />
          <input 
            type="password" 
            id='cp' 
            name='CPassword' 
            value={formData.CPassword} 
            onChange={handleChange} 
            className='border-2 border-black p-2 text-xl'
            placeholder='Correct Password'      
          />
        </label><br />
        <button 
        type='submit' 
        className='border-2 border-black p-2 text-xl px-4 bg-black text-white mt-5'
        >{loading ? 'Signing In' : 'Sign In'}</button>
      </form>
    </div>
  )
}

export default ForgetPassword;
